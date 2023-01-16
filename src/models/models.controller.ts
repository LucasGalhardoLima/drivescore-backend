import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { ModelsService } from './models.service';
import { CreateModelDto } from './dto/create-model.dto';
import { UpdateModelDto } from './dto/update-model.dto';
import { ApiTags, ApiCreatedResponse } from '@nestjs/swagger';
import { ModelEntity } from './entities/model.entity';

@Controller('models')
@ApiTags('models')
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
  async findByMaker(@Param('makerId') makerId: string) {
    const models = await this.modelsService.findByMaker(+makerId);

    if (!models.length) {
      throw new NotFoundException(`Models with makerId: ${makerId} not found`);
    }

    return models;
  }

  @Get(':id')
  @ApiCreatedResponse({ type: ModelEntity })
  async findOne(@Param('id') id: string) {
    const model = await this.modelsService.findOne(+id);

    if (!model) {
      throw new NotFoundException(`Model with id: ${id} not found`);
    }

    return model;
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: ModelEntity })
  update(@Param('id') id: string, @Body() updateModelDto: UpdateModelDto) {
    return this.modelsService.update(+id, updateModelDto);
  }

  @Delete(':id')
  @ApiCreatedResponse({ type: ModelEntity })
  remove(@Param('id') id: string) {
    return this.modelsService.remove(+id);
  }
}
