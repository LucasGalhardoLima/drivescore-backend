import { Module } from '@nestjs/common';
import { YearsService } from './years.service';
import { YearsController } from './years.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [YearsController],
  providers: [YearsService],
  imports: [PrismaModule],
})
export class YearsModule {}
