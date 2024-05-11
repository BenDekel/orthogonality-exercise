import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Staff } from '../database/staff.entity';
import { CreateStaffDto, UpdateStaffDto } from './dtos/staff.dto';

@Injectable()
export class StaffService {
  constructor(
    @InjectRepository(Staff)
    private staffRepository: Repository<Staff>,
  ) {}

  async findByBusiness(businessId: number): Promise<Staff[]> {
    return this.staffRepository.find({
      where: { business: { id: businessId } },
    });
  }

  async create(
    businessId: number,
    createStaffDto: CreateStaffDto,
  ): Promise<Staff> {
    const staff = this.staffRepository.create({
      ...createStaffDto,
      business: { id: businessId },
    });
    return this.staffRepository.save(staff);
  }

  async update(
    businessId: number,
    staffId: number,
    updateStaffDto: UpdateStaffDto,
  ): Promise<Staff> {
    const staff = await this.staffRepository.findOne({
      where: { id: staffId, business: { id: businessId } },
    });
    if (!staff) {
      throw new NotFoundException('Staff not found');
    }
    Object.assign(staff, updateStaffDto);
    return this.staffRepository.save(staff);
  }

  async remove(businessId: number, staffId: number): Promise<void> {
    const staff = await this.staffRepository.findOne({
      where: { id: staffId, business: { id: businessId } },
    });
    if (!staff) {
      throw new NotFoundException('Staff not found');
    }
    await this.staffRepository.remove(staff);
  }
}
