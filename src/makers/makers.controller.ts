import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
  UseFilters,
  UseGuards,
} from '@nestjs/common';
import { MakersService } from './makers.service';
import { CreateMakerDto } from './dto/create-maker.dto';
import { UpdateMakerDto } from './dto/update-maker.dto';
import { ApiBearerAuth, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { MakerEntity } from './entities/maker.entity';
import { PrismaClientExceptionFilter } from './../prisma-client-exception/prisma-client-exception.filter';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('makers')
@ApiTags('makers')
@UseFilters(PrismaClientExceptionFilter)
export class MakersController {
  constructor(private readonly makersService: MakersService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: MakerEntity })
  create(@Body() createMakerDto: CreateMakerDto) {
    return this.makersService.create(createMakerDto);
  }

  @Get()
  @ApiCreatedResponse({ type: MakerEntity, isArray: true })
  findAll() {
    return this.makersService.findAll();
  }

  @Get(':id')
  @ApiCreatedResponse({ type: MakerEntity })
  async findOne(@Param('id') id: string) {
    const maker = await this.makersService.findOne(id);

    if (!maker) {
      throw new NotFoundException(`Maker with id: ${id} not found`);
    }

    return maker;
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: MakerEntity })
  update(@Param('id') id: string, @Body() updateMakerDto: UpdateMakerDto) {
    return this.makersService.update(id, updateMakerDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: MakerEntity })
  remove(@Param('id') id: string) {
    return this.makersService.remove(id);
  }
}
