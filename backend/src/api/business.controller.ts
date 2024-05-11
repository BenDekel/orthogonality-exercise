import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Delete,
} from '@nestjs/common';
import { BusinessService } from './business.service';
import { Business } from '../database/business.entity';
import { CreateBusinessDto, UpdateBusinessDto } from './dtos/business.dto';

@Controller('businesses')
export class BusinessController {
  constructor(private readonly businessService: BusinessService) {}

  @Get()
  async findAll(): Promise<Business[]> {
    return this.businessService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Business> {
    return this.businessService.findOne(id);
  }

  @Post()
  async create(
    @Body() createBusinessDto: CreateBusinessDto,
  ): Promise<Business> {
    return this.businessService.create(createBusinessDto);
  }

  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateBusinessDto: UpdateBusinessDto,
  ): Promise<Business> {
    return this.businessService.update(id, updateBusinessDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.businessService.remove(id);
  }
}
