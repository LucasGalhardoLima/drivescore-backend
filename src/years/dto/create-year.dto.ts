import { ApiProperty } from '@nestjs/swagger';
import {
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateYearDto {
  @IsNumber()
  @MaxLength(4)
  @ApiProperty()
  year: number;

  @IsString()
  @MinLength(5)
  @ApiProperty()
  fuelType: string;

  @IsNumber()
  @IsOptional()
  @ApiProperty()
  modelId?: number;
}
