import { ApiProperty } from '@nestjs/swagger';
import {
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateVersionDto {
  @IsString()
  @MinLength(5)
  @MaxLength(300)
  @ApiProperty()
  name: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false, description: 'Image URL' })
  image?: string;

  @IsString()
  @MinLength(5)
  @ApiProperty()
  gearbox: string;

  @IsString()
  @MinLength(3)
  @ApiProperty()
  bodywork: string;

  @IsString()
  @MinLength(5)
  @ApiProperty()
  fuelType: string;

  @IsString()
  @MaxLength(3)
  @ApiProperty()
  traction: string;

  @IsNumber()
  @MinLength(1)
  @ApiProperty()
  doors: number;

  @IsNumber()
  @MinLength(1)
  @ApiProperty()
  seats: number;

  @IsString()
  @MaxLength(3)
  @ApiProperty()
  horsepower: string;

  @IsString()
  @MaxLength(3)
  @IsOptional()
  @ApiProperty()
  motorization?: string;

  @IsString()
  @MaxLength(3)
  @IsOptional()
  @ApiProperty()
  emissions?: string;

  @IsString()
  @MaxLength(3)
  @IsOptional()
  @ApiProperty()
  fuelEconomy?: string;

  @IsNumber()
  @IsOptional()
  @ApiProperty()
  modelId?: number;

  @IsNumber()
  @IsOptional()
  @ApiProperty()
  yearId?: number;
}
