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
import { YearsService } from './years.service';
import { CreateYearDto } from './dto/create-year.dto';
import { UpdateYearDto } from './dto/update-year.dto';
import { ApiTags, ApiCreatedResponse, ApiBearerAuth } from '@nestjs/swagger';
import { YearEntity } from './entities/year.entity';
import { PrismaClientExceptionFilter } from './../prisma-client-exception/prisma-client-exception.filter';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('years')
@ApiTags('years')
@UseFilters(PrismaClientExceptionFilter)
export class YearsController {
  constructor(private readonly yearsService: YearsService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: YearEntity })
  create(@Body() createYearDto: CreateYearDto) {
    return this.yearsService.create(createYearDto);
  }

  @Get()
  @ApiCreatedResponse({ type: YearEntity, isArray: true })
  async findAll(@Param('modelId') modelId: string) {
    const years = await this.yearsService.findAll(modelId);

    if (!years.length) {
      throw new NotFoundException(`Years with modelId: ${modelId} not found`);
    }

    return years;
  }

  @Get(':id')
  @ApiCreatedResponse({ type: YearEntity })
  findOne(@Param('id') id: string) {
    const year = this.yearsService.findOne(id);

    if (!year) {
      throw new NotFoundException(`Year with id: ${id} not found`);
    }

    return this.yearsService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: YearEntity })
  update(@Param('id') id: string, @Body() updateYearDto: UpdateYearDto) {
    return this.yearsService.update(id, updateYearDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: YearEntity })
  remove(@Param('id') id: string) {
    return this.yearsService.remove(id);
  }
}
