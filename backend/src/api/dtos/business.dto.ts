import { IsNotEmpty, IsOptional } from 'class-validator';
import { BusinessType } from '../../types';

export class CreateBusinessDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  location: string;

  @IsOptional()
  type: BusinessType;
}

export class UpdateBusinessDto {
  @IsOptional()
  name: string;

  @IsOptional()
  location: string;

  @IsOptional()
  type: BusinessType;
}
