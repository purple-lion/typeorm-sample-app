import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateAccountDto } from "./dto/create-account.dto";
import { Account } from "./account.entity";

@Injectable()
export class AccountsService {
  constructor(
    @InjectRepository(Account)
    private readonly accountsRepository: Repository<Account>
  ) {}

  create(createUserDto: CreateAccountDto): Promise<Account> {
    const user = new Account();
    user.firstName = createUserDto.firstName;
    user.lastName = createUserDto.lastName;

    return this.accountsRepository.save(user);
  }

  async findAll(): Promise<Account[]> {
    return this.accountsRepository.find();
  }

  findOne(id: number): Promise<Account> {
    return this.accountsRepository.findOneBy({ id: id });
  }

  async remove(id: string): Promise<void> {
    await this.accountsRepository.delete(id);
  }
}
