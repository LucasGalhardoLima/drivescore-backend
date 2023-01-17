import { Maker } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class MakerEntity implements Maker {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty({ required: false, nullable: true })
  image: string | null;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
