import { Injectable } from '@nestjs/common';
import { CreateMakerDto } from './dto/create-maker.dto';
import { UpdateMakerDto } from './dto/update-maker.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MakersService {
  constructor(private prisma: PrismaService) {}
  create(createMakerDto: CreateMakerDto) {
    return this.prisma.maker.create({
      data: createMakerDto,
    });
  }

  findAll() {
    return this.prisma.maker.findMany();
  }

  findOne(id: number) {
    return this.prisma.maker.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: number, updateMakerDto: UpdateMakerDto) {
    return this.prisma.maker.update({
      where: {
        id,
      },
      data: updateMakerDto,
    });
  }

  remove(id: number) {
    return this.prisma.maker.delete({
      where: {
        id,
      },
    });
  }
}
