import { ApiProperty } from '@nestjs/swagger';
import { IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @ApiProperty()
  name: string;

  @IsString()
  @ApiProperty()
  email: string;

  @IsString()
  @MinLength(8)
  @ApiProperty()
  password: string;
}
