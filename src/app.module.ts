import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AccountsModule } from "./accounts/accounts.module";
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "root",
      database: "test",
      autoLoadEntities: true,
      synchronize: true,
    }),
    AccountsModule,
    CatsModule,
  ],
})
export class AppModule {}
