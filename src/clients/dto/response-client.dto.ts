import { ClientEntity } from '../entities/client.entity';
import { ApiProperty } from '@nestjs/swagger';

export class ResponseClientDTO {
  id: number;
  @ApiProperty({ example: 'Maria da Silva' })
  name: string;
  @ApiProperty({ example: '100000.00' })
  salary: number;
  @ApiProperty({ example: '10000.00' })
  company: number;

  constructor(client: ClientEntity) {
    this.id = client.id;
    this.name = client.name;
    this.salary = client.salary;
    this.company = client.company;
  }
}
