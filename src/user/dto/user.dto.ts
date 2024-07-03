import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
// import { IsUnique } from 'src/commons/decorators/is-unique.decorator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  // @IsUnique('username', { message: 'Username already exists' })
  username: string;
  @IsString()
  @IsOptional()
  name: string;
  avatarUrl: string;
}
