import { IsEmail, IsNotEmpty, IsOptional } from 'class-validator';
import { StaffPosition } from '../../types';

export class CreateStaffDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  @IsNotEmpty()
  type: StaffPosition;

  @IsOptional()
  phoneNumber: string;
}

export class UpdateStaffDto {
  @IsOptional()
  @IsEmail()
  email: string;

  @IsOptional()
  firstName: string;

  @IsOptional()
  lastName: string;

  @IsOptional()
  position: StaffPosition;

  @IsOptional()
  phoneNumber: string;
}
