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

  findAll(modelId: string) {
    return this.prisma.year.findMany({
      where: {
        modelId,
      },
    });
  }

  findOne(id: string) {
    return this.prisma.year.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: string, updateYearDto: UpdateYearDto) {
    return this.prisma.year.update({
      where: {
        id,
      },
      data: updateYearDto,
    });
  }

  remove(id: string) {
    return this.prisma.year.delete({
      where: {
        id,
      },
    });
  }
}
