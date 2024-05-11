import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BusinessController } from './business.controller';
import { StaffController } from './staff.controller';
import { BusinessService } from './business.service';
import { StaffService } from './staff.service';
import { Staff } from '../database/staff.entity';
import { Business } from '../database/business.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Business, Staff])],
  controllers: [BusinessController, StaffController],
  providers: [BusinessService, StaffService],
})
export class ApiModule {}
