import { Model } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class ModelEntity implements Model {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty({ required: false, nullable: true })
  makerId: number | null;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
