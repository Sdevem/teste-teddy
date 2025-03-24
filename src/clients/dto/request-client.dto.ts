/* eslint-disable @typescript-eslint/no-unsafe-call */
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  Min,
  MinLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RequestClientDto {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @ApiProperty({ example: 'Maria da Silva' })
  name;

  @IsNotEmpty()
  @Min(0)
  @IsNumber()
  @ApiProperty({ example: '100000.00' })
  salary;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({ example: '100000.00' })
  company;
}
