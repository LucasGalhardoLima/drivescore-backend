import { ApiProperty } from '@nestjs/swagger';
import { IsString, MinLength, IsOptional } from 'class-validator';

export class CreateMakerDto {
  @IsString()
  @MinLength(3)
  @ApiProperty()
  name: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false, description: 'Image URL' })
  image?: string;
}
