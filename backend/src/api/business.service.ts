import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Business } from '../database/business.entity';
import { CreateBusinessDto, UpdateBusinessDto } from './dtos/business.dto';

@Injectable()
export class BusinessService {
  constructor(
    @InjectRepository(Business)
    private businessRepository: Repository<Business>,
  ) {}

  async findAll(): Promise<Business[]> {
    return this.businessRepository.find();
  }

  async findOne(id: number): Promise<Business> {
    const business = await this.businessRepository.findOne({
      where: { id },
    });
    if (!business) {
      throw new NotFoundException('Business not found');
    }
    return business;
  }

  async create(createBusinessDto: CreateBusinessDto): Promise<Business> {
    const { name, location, type } = createBusinessDto;
    const business = this.businessRepository.create({ name, location, type });
    return this.businessRepository.save(business);
  }

  async update(
    id: number,
    updateBusinessDto: UpdateBusinessDto,
  ): Promise<Business> {
    const business = await this.businessRepository.findOne({
      where: { id },
    });
    if (!business) {
      throw new NotFoundException('Business not found');
    }
    Object.assign(business, updateBusinessDto);
    return this.businessRepository.save(business);
  }

  async remove(id: number): Promise<void> {
    const business = await this.businessRepository.findOne({
      where: { id },
    });
    if (!business) {
      throw new NotFoundException('Business not found');
    }
    await this.businessRepository.remove(business);
  }
}
