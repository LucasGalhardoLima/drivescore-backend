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
    return this.prisma.$transaction(async (tx) => {
      const count = await tx.maker.count();
      const makers = await tx.maker.findMany({
        take: 10,
        // skip: 10,
        orderBy: {
          name: 'asc',
        },
      });

      return {
        count,
        perPage: 10,
        totalPages: Math.ceil(count / 10),
        page: 0,
        data: makers,
      };
    });
  }

  findOne(id: string) {
    return this.prisma.maker.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: string, updateMakerDto: UpdateMakerDto) {
    return this.prisma.maker.update({
      where: {
        id,
      },
      data: updateMakerDto,
    });
  }

  remove(id: string) {
    return this.prisma.maker.delete({
      where: {
        id,
      },
    });
  }
}
