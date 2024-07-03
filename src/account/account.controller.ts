import { Account } from 'src/schemas/Account.schema';
import { AccountService } from './account.service';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('account')
export class AccountController {
  constructor(private accountService: AccountService) {}

  @Post()
  async createAccount(
    @Body() createAccountDto: { username: string; userId: string },
  ): Promise<Account> {
    return this.accountService.createAccount(
      createAccountDto.username,
      createAccountDto.userId,
    );
  }
}
