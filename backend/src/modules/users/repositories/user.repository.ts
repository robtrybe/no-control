import { InputCreateUserDto } from '../dto/input/input-create-user.dto';
import { User } from '@prisma/client';
import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/modules/prisma/prisma.service';

@Injectable()
export class UserRepository {
  constructor(private prismaService: PrismaService) {}

  async createUser(data: InputCreateUserDto): Promise<User> {
    const alreadyExists = await this.prismaService.user.findUnique({
      where: {
        email: data.email,
      },
    });

    if (alreadyExists) {
      throw new ConflictException('Usuário já existe na base de dados');
    }

    return await this.prismaService.user.create({
      data,
    });
  }
}
