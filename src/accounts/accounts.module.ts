import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Account } from "./account.entity";
import { AccountsPrivateController } from "./accounts.private.controller";
import { AccountsPublicController } from "./accounts.public.controller";
import { AccountsService } from "./accounts.service";

@Module({
  imports: [TypeOrmModule.forFeature([Account])],
  providers: [AccountsService],
  controllers: [AccountsPublicController, AccountsPrivateController],
})
export class AccountsModule {}
