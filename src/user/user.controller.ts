import {
  Body,
  Controller,
  Get,
  //   HttpStatus,
  Post,
  //   Res,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/user.dto';
// import { Response } from 'express';
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}
  @Post()
  @UsePipes(new ValidationPipe())
  createUser(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto);
    // res.status(HttpStatus.CREATED).send();
    return this.userService.createUser(createUserDto);
  }

  @Get()
  getAllUser() {
    return this.userService.getAllUser();
  }
}
