import { Module } from '@nestjs/common';
import { MakersService } from './makers.service';
import { MakersController } from './makers.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [MakersController],
  providers: [MakersService],
  imports: [PrismaModule],
})
export class MakersModule {}
