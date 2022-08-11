import { Body, Controller, Get, Post, Put } from "@nestjs/common";
import { CreateAccountDto } from "./dto/create-account.dto";
import { Account } from "./account.entity";
import { AccountsService } from "./accounts.service";

@Controller("private/acounts")
export class AccountsPrivateController {
  constructor(private readonly accountsService: AccountsService) {}

  @Post()
  create(@Body() createAccountDto: CreateAccountDto): Promise<Account> {
    return this.accountsService.create(createAccountDto);
  }

  @Get("current-address")
  findOne(): Promise<Account> {
    // sample
    return this.accountsService.findAll()[0];
  }

  @Put("current-address")
  update(): Promise<void> {
    return null;
  }
}
