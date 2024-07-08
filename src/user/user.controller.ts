import {
  Body,
  Controller,
  Delete,
  Get,
  // HttpStatus,
  Param,
  //   HttpStatus,
  Post,
  Put,
  // Res,
  // UsePipes,
  // ValidationPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/user.dto';
// import { Response } from 'express';
import { User } from 'src/schemas/User.schema';
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}
  @Post()
  // @UsePipes(new ValidationPipe())
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  @Get()
  async getAllUser() {
    // getAllUser(@Res() res: Response) {
    console.log(this.userService.getAllUser());
    // return res.status(HttpStatus.OK).json(this.userService.getAllUser());
    return this.userService.getAllUser();
  }

  @Get('profile/:username')
  async getProfileByUsername(@Param('username') username: string) {
    return this.userService.getProfileByUsername(username);
  }

  @Get(':id')
  async getUserWithProfile(@Param('id') userId: string) {
    return this.userService.getUserWithProfile(userId);
  }

  @Get('user/:id')
  async getUserByUserId(@Param('id') userId: string) {
    return this.userService.getUserByUserId(userId);
  }

  @Delete(':id')
  deleteByUserId(@Param('id') id: string): Promise<User> {
    return this.userService.deleteUserById(id);
  }

  @Put(':id')
  updateUserById(
    @Param('id') id: string,
    @Body() user: CreateUserDto,
  ): Promise<User> {
    return this.userService.updateUserById(id, user);
  }
}
