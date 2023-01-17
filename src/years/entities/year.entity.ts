import { Year } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class YearEntity implements Year {
  @ApiProperty()
  id: string;

  @ApiProperty()
  year: number;

  @ApiProperty()
  fuelType: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty({ required: false, nullable: true })
  modelId: string | null;
}
