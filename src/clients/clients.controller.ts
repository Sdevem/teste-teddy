import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Query,
  Put,
} from '@nestjs/common';
import { ClientsService } from './clients.service';
import { RequestClientDto } from './dto/request-client.dto';
import { ResponseClientDTO } from './dto/response-client.dto';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiQuery,
  ApiParam,
} from '@nestjs/swagger';

@ApiTags('Clientes') // Agrupamento no Swagger
@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Post()
  @ApiOperation({ summary: 'Cria um novo cliente' })
  @ApiResponse({
    status: 201,
    description: 'Cliente criado com sucesso',
    type: ResponseClientDTO,
  })
  async create(@Body() requestClientDto: RequestClientDto) {
    const client = await this.clientsService.create(requestClientDto);
    return new ResponseClientDTO(client);
  }

  @Get()
  @ApiOperation({ summary: 'Lista todos os clientes paginados' })
  @ApiQuery({ name: 'page', required: false, example: 1 })
  @ApiQuery({ name: 'limit', required: false, example: 8 })
  @ApiResponse({
    status: 200,
    description: 'Clientes listados com sucesso',
    schema: {
      example: {
        data: [
          {
            id: 1,
            name: 'João',
            salary: 3500.5,
            company: 100000,
          },
        ],
        total: 1,
        page: 1,
        lastPage: 1,
      },
    },
  })
  async findAll(@Query('page') page: string, @Query('limit') limit: string) {
    const currentPage = parseInt(page) || 1;
    const perPage = parseInt(limit) || 8;

    return await this.clientsService.findAll(currentPage, perPage);
  }

  @Get('by-ids')
  @ApiOperation({ summary: 'Busca múltiplos clientes por array de IDs' })
  @ApiQuery({ name: 'ids', required: true, example: '1,2,3' })
  @ApiResponse({
    status: 200,
    description: 'Clientes encontrados com base nos IDs',
    type: [ResponseClientDTO],
  })
  async findByIds(@Query('ids') ids: string) {
    const parsedIds = ids
      .split(',')
      .map(Number)
      .filter((id) => !isNaN(id));

    return await this.clientsService.findByIds(parsedIds);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Busca um cliente pelo ID' })
  @ApiParam({ name: 'id', example: 1 })
  @ApiResponse({
    status: 200,
    description: 'Cliente encontrado',
    type: ResponseClientDTO,
  })
  @ApiResponse({ status: 404, description: 'Cliente não encontrado' })
  async findOne(@Param('id') id: number) {
    const client = await this.clientsService.findOne(+id);

    if (!client) {
      return 'cliente não encontrado no sistema';
    }

    return new ResponseClientDTO(client);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Atualiza os dados de um cliente' })
  @ApiParam({ name: 'id', example: 1 })
  @ApiResponse({ status: 200, description: 'Cliente atualizado com sucesso' })
  async update(
    @Param('id') id: string,
    @Body() requestClientDto: Partial<RequestClientDto>,
  ) {
    return await this.clientsService.update(+id, requestClientDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove um cliente pelo ID' })
  @ApiParam({ name: 'id', example: 1 })
  @ApiResponse({ status: 200, description: 'Cliente removido com sucesso' })
  async remove(@Param('id') id: string) {
    return await this.clientsService.remove(+id);
  }
}
