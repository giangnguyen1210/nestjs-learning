import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  username: string;
  @IsString()
  @IsOptional()
  name: string;
  avatarUrl: string;
}
