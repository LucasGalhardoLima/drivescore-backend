import { Version } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class VersionEntity implements Version {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty({ required: false, nullable: true })
  image: string | null;

  @ApiProperty()
  gearbox: string;

  @ApiProperty()
  bodywork: string;

  @ApiProperty()
  fuelType: string;

  @ApiProperty()
  traction: string;

  @ApiProperty()
  doors: number;

  @ApiProperty()
  seats: number;

  @ApiProperty()
  horsepower: string;

  @ApiProperty({ required: false, nullable: true })
  motorization: string | null;

  @ApiProperty({ required: false, nullable: true })
  emissions: string | null;

  @ApiProperty({ required: false, nullable: true })
  fuelEconomy: string | null;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty({ required: false, nullable: true })
  yearId: number | null;

  @ApiProperty({ required: false, nullable: true })
  modelId: number | null;
}
