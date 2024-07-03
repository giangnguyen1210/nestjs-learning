import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Model } from 'mongoose';
import { Account } from 'src/schemas/Account.schema';
import { InjectModel } from '@nestjs/mongoose';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AccountService {
  constructor(
    @InjectModel(Account.name) private accountModel: Model<Account>,
    private userService: UserService,
  ) {}

  async createAccount(username: string, userId: string): Promise<Account> {
    const user = await this.userService.getUserById(userId);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    const newAccount = new this.accountModel({ username, userId: user._id });

    try {
      return await newAccount.save();
    } catch (error) {
      if (error.code === 11000) {
        // Duplicate key error
        throw new ConflictException('Username already exists');
      }
      throw error;
    }
  }
}
