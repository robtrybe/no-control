import { Body, Controller, Inject, Patch, Post } from '@nestjs/common';
import { InputCreateUserDto } from './dto/input/input-create-user.dto';
import { UpdateUserDto } from './dto/input/update-user.dto';
import { ApiOkResponse, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { UseCase } from './usecase/usecase';
import { OutputCreateUserDto } from './dto/output/output-create-user.dto';

@Controller('users')
export class UsersController {

  @Inject("CreateUserUseCase")
  private createUserUseCase: UseCase

  @Post()
  @ApiOperation({ summary: "Cria um novo usuário" })
  @ApiOkResponse({ type: OutputCreateUserDto})
  @ApiResponse({ status: 400, description: 'Dados incorretos'})
  @ApiResponse({ status: 500, description: 'Erro interno no servidor'})
  async createUser(@Body() createUserDto: InputCreateUserDto): Promise<any> {
    return await this.createUserUseCase.execute(createUserDto)
  }

  @Patch()
  async updateUser(@Body() createUserDto: UpdateUserDto): Promise<any> {
    return await this.createUserUseCase.execute(createUserDto)
  }
}
