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
} from '@nestjs/common';
import { ModelsService } from './models.service';
import { CreateModelDto } from './dto/create-model.dto';
import { UpdateModelDto } from './dto/update-model.dto';
import { ApiTags, ApiCreatedResponse } from '@nestjs/swagger';
import { ModelEntity } from './entities/model.entity';
import { PrismaClientExceptionFilter } from './../prisma-client-exception/prisma-client-exception.filter';

@Controller('models')
@ApiTags('models')
@UseFilters(PrismaClientExceptionFilter)
export class ModelsController {
  constructor(private readonly modelsService: ModelsService) {}

  @Post()
  @ApiCreatedResponse({ type: ModelEntity })
  create(@Body() createModelDto: CreateModelDto) {
    return this.modelsService.create(createModelDto);
  }

  @Get()
  @ApiCreatedResponse({ type: ModelEntity, isArray: true })
  findAll() {
    return this.modelsService.findAll();
  }

  @Get(':makerId')
  @ApiCreatedResponse({ type: ModelEntity, isArray: true })
  async findByMaker(@Param('makerId', ParseIntPipe) makerId: number) {
    const models = await this.modelsService.findByMaker(makerId);

    if (!models.length) {
      throw new NotFoundException(`Models with makerId: ${makerId} not found`);
    }

    return models;
  }

  @Get(':id')
  @ApiCreatedResponse({ type: ModelEntity })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const model = await this.modelsService.findOne(id);

    if (!model) {
      throw new NotFoundException(`Model with id: ${id} not found`);
    }

    return model;
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: ModelEntity })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateModelDto: UpdateModelDto,
  ) {
    return this.modelsService.update(id, updateModelDto);
  }

  @Delete(':id')
  @ApiCreatedResponse({ type: ModelEntity })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.modelsService.remove(id);
  }
}
