import { Injectable } from '@nestjs/common';
import { RequestClientDto } from './dto/request-client.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ClientEntity } from './entities/client.entity';
import { In, Repository } from 'typeorm';

@Injectable()
export class ClientsService {
  constructor(
    @InjectRepository(ClientEntity)
    private clientsRepository: Repository<ClientEntity>,
  ) {}

  async create(requestClientDto: RequestClientDto) {
    const client = this.clientsRepository.create(requestClientDto);

    return await this.clientsRepository.save(client);
  }

  async findAll(page = 1, limit = 10) {
    const [data, total] = await this.clientsRepository.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
      order: { id: 'ASC' }, // você pode trocar por outro campo
    });

    return {
      data: data.map((item) => ({
        id: item.id,
        name: item.name,
        salary: this.formatMoney(item.salary),
        company: this.formatMoney(item.company),
      })),
      total,
      page,
      lastPage: Math.ceil(total / limit),
    };
  }

  async findOne(id: number) {
    return await this.clientsRepository.findOne({ where: { id } });
  }

  async update(id: number, requestClientDto: Partial<RequestClientDto>) {
    return await this.clientsRepository.update(id, requestClientDto);
  }

  async remove(id: number) {
    return await this.clientsRepository.delete(id);
  }

  private formatMoney(value: number): string {
    return Number(value)
      .toFixed(2)
      .replace('.', ',')
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
  }

  async findByIds(ids: number[]) {
    console.log(ids);
    return await this.clientsRepository.find({
      where: { id: In(ids) },
      order: { id: 'ASC' },
    });
  }
}
