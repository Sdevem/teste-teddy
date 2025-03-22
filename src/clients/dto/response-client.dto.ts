import { ClientEntity } from '../entities/client.entity';

export class ResponseClientDTO {
  id: number;
  name: string;
  salary: number;
  company: number;

  constructor(client: ClientEntity) {
    this.id = client.id;
    this.name = client.name;
    this.salary = client.salary;
    this.company = client.company;
  }
}
