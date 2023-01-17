import { Model } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class ModelEntity implements Model {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty({ required: false, nullable: true })
  makerId: string | null;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
