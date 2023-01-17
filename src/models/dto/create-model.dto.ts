import { ApiProperty } from '@nestjs/swagger';
import { IsString, MinLength, IsOptional } from 'class-validator';

export class CreateModelDto {
  @IsString()
  @MinLength(3)
  @ApiProperty()
  name: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  image?: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  makerId?: string;
}
