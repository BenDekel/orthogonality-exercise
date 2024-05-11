import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { StaffService } from './staff.service';
import { Staff } from '../database/staff.entity';
import { CreateStaffDto, UpdateStaffDto } from './dtos/staff.dto';

@Controller('staff')
export class StaffController {
  constructor(private readonly staffService: StaffService) {}

  @Get(':businessId')
  async findByBusiness(
    @Param('businessId') businessId: number,
  ): Promise<Staff[]> {
    return this.staffService.findByBusiness(businessId);
  }

  @Post(':businessId')
  async create(
    @Param('businessId') businessId: number,
    @Body() createStaffDto: CreateStaffDto,
  ): Promise<Staff> {
    return this.staffService.create(businessId, createStaffDto);
  }

  @Patch(':businessId/:staffId')
  async update(
    @Param('businessId') businessId: number,
    @Param('staffId') staffId: number,
    @Body() updateStaffDto: UpdateStaffDto,
  ): Promise<Staff> {
    return this.staffService.update(businessId, staffId, updateStaffDto);
  }

  @Delete(':businessId/:staffId')
  async remove(
    @Param('businessId') businessId: number,
    @Param('staffId') staffId: number,
  ): Promise<void> {
    return this.staffService.remove(businessId, staffId);
  }
}
