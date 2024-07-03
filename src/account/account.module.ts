import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Account, AccountSchema } from 'src/schemas/Account.schema';
import { UserModule } from 'src/user/user.module';
import { AccountService } from './account.service';
import { AccountController } from './account.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Account.name,
        schema: AccountSchema,
      },
    ]),
    UserModule,
  ],
  providers: [AccountService],
  controllers: [AccountController],
})
export class AccountModule {}
