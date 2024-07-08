import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/schemas/User.schema';
import { CreateUserDto } from './dto/user.dto';
import { Profile } from 'src/schemas/Profile.schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    @InjectModel(Profile.name) private profileModel: Model<Profile>,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<Profile> {
    try {
      const createU = new this.userModel({
        username: createUserDto.username,
      });
      const savedUser = await createU.save();
      const createProfile = new this.profileModel({
        firstName: createUserDto.firstName,
        lastName: createUserDto.lastName,
        bio: createUserDto.bio,
        user: savedUser._id,
      });

      const savedProfile = await createProfile.save();
      return savedProfile;
    } catch (error) {
      console.log(error);
      if (error.code === 11000) {
        // Duplicate key error
        throw new ConflictException('Username already exists');
      }
      throw error;
    }
    // const createProfile = new this.profileModel({
    //   firstName: createUserDto.firstName,
    //   lastName: createUserDto.lastName,
    //   bio: createUserDto.bio,
    //   user: savedUser._id,
    // });

    // const savedProfile = await createProfile.save();
    // return savedProfile;
  }
  async getUserWithProfile(userId: string): Promise<Profile> {
    const user = (await this.profileModel.findById(userId)).populate('user');
    return user;
  }

  async getUserByUserId(userId: string): Promise<User> {
    const user = await this.userModel.findById(userId);
    return user;
  }

  // async getUserWithProfile(userId: string): Promise<User> {
  //   return this.userModel.findById(userId).populate({ path: 'profile' }).exec();
  // }

  getAllUserProfile(): Promise<Profile[]> {
    return this.profileModel.find().populate('user').exec();
  }

  getAllUser(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async getProfileByUsername(username: string): Promise<Profile> {
    const user = await this.userModel.findOne({ username }).exec();
    return await this.profileModel
      .findOne({ user: user._id })
      // .populate('user')
      .exec();
  }

  async findOne(username: string): Promise<User> {
    return await this.userModel.findOne({ username: username });
  }

  deleteUserById(id: string): Promise<User> {
    return this.userModel.findOneAndDelete({ _id: id });
  }

  updateUserById(id: string, user: CreateUserDto): Promise<User> {
    return this.userModel.findByIdAndUpdate(id, user, { new: true });
  }
}
