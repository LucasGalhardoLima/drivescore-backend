import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { MakersModule } from './makers/makers.module';
import { ModelsModule } from './models/models.module';
import { YearsModule } from './years/years.module';
import { VersionsModule } from './versions/versions.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [PrismaModule, MakersModule, ModelsModule, YearsModule, VersionsModule, AuthModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
