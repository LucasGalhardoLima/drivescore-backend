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
import { YearsService } from './years.service';
import { CreateYearDto } from './dto/create-year.dto';
import { UpdateYearDto } from './dto/update-year.dto';
import { ApiTags, ApiCreatedResponse } from '@nestjs/swagger';
import { YearEntity } from './entities/year.entity';

@Controller('years')
@ApiTags('years')
export class YearsController {
  constructor(private readonly yearsService: YearsService) {}

  @Post()
  @ApiCreatedResponse({ type: YearEntity })
  create(@Body() createYearDto: CreateYearDto) {
    return this.yearsService.create(createYearDto);
  }

  @Get()
  @ApiCreatedResponse({ type: YearEntity, isArray: true })
  async findAll(@Param('modelId') modelId: number) {
    const years = await this.yearsService.findAll(modelId);

    if (!years.length) {
      throw new NotFoundException(`Years with modelId: ${modelId} not found`);
    }

    return years;
  }

  @Get(':id')
  @ApiCreatedResponse({ type: YearEntity })
  findOne(@Param('id') id: string) {
    return this.yearsService.findOne(+id);
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: YearEntity })
  update(@Param('id') id: string, @Body() updateYearDto: UpdateYearDto) {
    return this.yearsService.update(+id, updateYearDto);
  }

  @Delete(':id')
  @ApiCreatedResponse({ type: YearEntity })
  remove(@Param('id') id: string) {
    return this.yearsService.remove(+id);
  }
}
