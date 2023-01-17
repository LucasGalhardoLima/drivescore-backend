import { Injectable } from '@nestjs/common';
import { CreateVersionDto } from './dto/create-version.dto';
import { UpdateVersionDto } from './dto/update-version.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class VersionsService {
  constructor(private prisma: PrismaService) {}
  create(createVersionDto: CreateVersionDto) {
    return this.prisma.version.create({
      data: createVersionDto,
    });
  }

  findAll(yearId: string, modelId: string) {
    return this.prisma.version.findMany({
      where: {
        yearId,
        modelId,
      },
    });
  }

  findOne(id: string) {
    return this.prisma.version.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: string, updateVersionDto: UpdateVersionDto) {
    return this.prisma.version.update({
      where: {
        id,
      },
      data: updateVersionDto,
    });
  }

  remove(id: string) {
    return this.prisma.version.delete({
      where: {
        id,
      },
    });
  }
}
