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
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/user.dto';
// import { Response } from 'express';
import { User } from 'src/schemas/User.schema';
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
    // getAllUser(@Res() res: Response) {
    console.log(this.userService.getAllUser());
    // return res.status(HttpStatus.OK).json(this.userService.getAllUser());
    return this.userService.getAllUser();
  }

  @Get(':id')
  findUserById(@Param('id') id: string): Promise<User> {
    console.log(this.userService.getUserById(id));
    return this.userService.getUserById(id);
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
