import { Injectable } from '@nestjs/common';
import { RequestClientDto } from './dto/request-client.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ClientEntity } from './entities/client.entity';
import { Repository } from 'typeorm';

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

  async findAll() {
    return await this.clientsRepository.find();
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
}
