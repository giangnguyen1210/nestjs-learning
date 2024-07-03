// import { Injectable } from '@nestjs/common';
// import { InjectModel } from '@nestjs/mongoose';
// import {
//   ValidationArguments,
//   ValidatorConstraint,
//   ValidatorConstraintInterface,
// } from 'class-validator';
// import { Model } from 'mongoose';
// import { User } from 'src/schemas/User.schema';

// @ValidatorConstraint({ name: 'IsUniqueConstraint', async: true })
// export class IsUnique implements ValidatorConstraintInterface {
//   constructor(@InjectModel(User.name) private userModal: Model<User>) {}
//   async validate(value: any, args?: ValidationArguments): Promise<boolean> {

//     const user = this.userModal.findOne()
//     return ;
//   }

//   defaultMessage(validationArguments: ValidationArguments): string {
//     const field = validationArguments.property;

//     return `${field} is already exist.`;
//   }
// }
