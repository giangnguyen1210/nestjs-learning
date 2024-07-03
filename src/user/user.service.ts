import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/schemas/User.schema';
import { CreateUserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModal: Model<User>) {}

  createUser(createUserDto: CreateUserDto): Promise<User> {
    const createU = new this.userModal(createUserDto);
    return createU.save();
  }

  getAllUser(): Promise<User[]> {
    return this.userModal.find().exec();
  }

  async getUserById(id: string): Promise<User> {
    return await this.userModal.findOne({ _id: id });
  }

  deleteUserById(id: string): Promise<User> {
    return this.userModal.findOneAndDelete({ _id: id });
  }

  updateUserById(id: string, user: CreateUserDto): Promise<User> {
    return this.userModal.findByIdAndUpdate(id, user, { new: true });
  }
}
