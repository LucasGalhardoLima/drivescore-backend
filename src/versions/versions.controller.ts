import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
  ParseIntPipe,
  UseFilters,
  UseGuards,
} from '@nestjs/common';
import { VersionsService } from './versions.service';
import { CreateVersionDto } from './dto/create-version.dto';
import { UpdateVersionDto } from './dto/update-version.dto';
import { ApiTags, ApiCreatedResponse, ApiBearerAuth } from '@nestjs/swagger';
import { VersionEntity } from './entities/version.entity';
import { PrismaClientExceptionFilter } from './../prisma-client-exception/prisma-client-exception.filter';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('versions')
@ApiTags('versions')
@UseFilters(PrismaClientExceptionFilter)
export class VersionsController {
  constructor(private readonly versionsService: VersionsService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: VersionEntity })
  create(@Body() createVersionDto: CreateVersionDto) {
    return this.versionsService.create(createVersionDto);
  }

  @Get(':yearId/:modelId')
  @ApiCreatedResponse({ type: VersionEntity, isArray: true })
  async findAll(
    @Param('yearId') yearId: string,
    @Param('modelId') modelId: string,
  ) {
    const versions = await this.versionsService.findAll(yearId, modelId);

    if (!versions.length) {
      throw new NotFoundException(
        `Versions with yearId: ${yearId} and modelId: ${modelId} not found`,
      );
    }

    return versions;
  }

  @Get(':id')
  @ApiCreatedResponse({ type: VersionEntity })
  async findOne(@Param('id') id: string) {
    const version = await this.versionsService.findOne(id);

    if (!version) {
      throw new NotFoundException(`Version with id: ${id} not found`);
    }

    return version;
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: VersionEntity })
  update(@Param('id') id: string, @Body() updateVersionDto: UpdateVersionDto) {
    return this.versionsService.update(id, updateVersionDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: VersionEntity })
  remove(@Param('id') id: string) {
    return this.versionsService.remove(id);
  }
}
