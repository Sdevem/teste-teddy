import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ClientsService } from './clients.service';
import { RequestClientDto } from './dto/request-client.dto';
import { ResponseClientDTO } from './dto/response-client.dto';
import { ClientEntity } from './entities/client.entity';
// import { ResponseClientDto } from './dto/response-client.dto';

@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Post()
  async create(@Body() requestClientDto: RequestClientDto) {
    const client = await this.clientsService.create(requestClientDto);

    return new ResponseClientDTO(client);
  }

  @Get()
  async findAll() {
    const clients = await this.clientsService.findAll();

    return clients.map((client: ClientEntity) => new ResponseClientDTO(client));
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    const client = await this.clientsService.findOne(+id);

    if (!client) {
      return 'cliente não encontrado no sistema';
    }

    return new ResponseClientDTO(client);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() requestClientDto: Partial<RequestClientDto>,
  ) {
    return await this.clientsService.update(+id, requestClientDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.clientsService.remove(+id);
  }
}
