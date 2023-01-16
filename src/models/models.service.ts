import { Injectable } from '@nestjs/common';
import { CreateModelDto } from './dto/create-model.dto';
import { UpdateModelDto } from './dto/update-model.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ModelsService {
  constructor(private prisma: PrismaService) {}
  create(createModelDto: CreateModelDto) {
    return this.prisma.model.create({
      data: createModelDto,
    });
  }

  findAll() {
    return this.prisma.model.findMany();
  }

  findByMaker(makerId: number) {
    return this.prisma.model.findMany({
      where: {
        makerId,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.model.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: number, updateModelDto: UpdateModelDto) {
    return this.prisma.model.update({
      where: {
        id,
      },
      data: updateModelDto,
    });
  }

  remove(id: number) {
    return this.prisma.model.delete({
      where: {
        id,
      },
    });
  }
}
