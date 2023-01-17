import { ApiProperty } from '@nestjs/swagger';
import {
  IsNumber,
  IsOptional,
  IsString,
  Max,
  MinLength,
} from 'class-validator';

export class CreateYearDto {
  @IsNumber()
  @Max(9999)
  @ApiProperty()
  year: number;

  @IsString()
  @MinLength(5)
  @ApiProperty()
  fuelType: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  modelId?: string;
}
