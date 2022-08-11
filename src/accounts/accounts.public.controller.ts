import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  ParseIntPipe,
} from "@nestjs/common";
import { Account } from "./account.entity";
import { AccountsService } from "./accounts.service";

@Controller("public/acounts")
export class AccountsPublicController {
  constructor(private readonly accountsService: AccountsService) {}

  @Get(":id")
  findOne(@Param("id", ParseIntPipe) id: number): Promise<Account> {
    return this.accountsService.findOne(id);
  }
}
