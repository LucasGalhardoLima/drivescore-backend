import { Injectable } from '@nestjs/common';
import { CreateYearDto } from './dto/create-year.dto';
import { UpdateYearDto } from './dto/update-year.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class YearsService {
  constructor(private prisma: PrismaService) {}
  create(createYearDto: CreateYearDto) {
    return this.prisma.year.create({
      data: createYearDto,
    });
  }

  findAll(modelId: number) {
    return this.prisma.year.findMany({
      where: {
        modelId,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.year.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: number, updateYearDto: UpdateYearDto) {
    return this.prisma.year.update({
      where: {
        id,
      },
      data: updateYearDto,
    });
  }

  remove(id: number) {
    return this.prisma.year.delete({
      where: {
        id,
      },
    });
  }
}
