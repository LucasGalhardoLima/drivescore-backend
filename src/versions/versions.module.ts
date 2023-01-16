import { Module } from '@nestjs/common';
import { VersionsService } from './versions.service';
import { VersionsController } from './versions.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [VersionsController],
  providers: [VersionsService],
  imports: [PrismaModule],
})
export class VersionsModule {}
