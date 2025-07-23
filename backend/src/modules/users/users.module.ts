import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { CreateUserUseCase } from './usecase/create-user.usecase';
import { UserRepository } from './repositories/user.repository';
import { PrismaService } from '../prisma/prisma.service';

const CreateUserUseCaseProvider = {
  provide: "CreateUserUseCase",
  useClass: CreateUserUseCase
}

@Module({
  controllers: [UsersController],
  providers: [UserRepository, PrismaService, CreateUserUseCaseProvider
],
  exports: [UserRepository, CreateUserUseCaseProvider]
})
export class UsersModule {}
