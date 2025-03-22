/* eslint-disable @typescript-eslint/no-unsafe-call */
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  Min,
  MinLength,
} from 'class-validator';

export class RequestClientDto {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  name;

  @IsNotEmpty()
  @Min(0)
  @IsNumber()
  salary;

  @IsNotEmpty()
  @IsNumber()
  company;
}
