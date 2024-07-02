import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/schemas/User.schema';
import { CreateUserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModal: Model<User>) {}

  createUser(createUserDto: CreateUserDto) {
    const createU = new this.userModal(createUserDto);
    return createU.save();
  }

  getAllUser(): Promise<User[]> {
    return this.userModal.find().exec();
  }
}
