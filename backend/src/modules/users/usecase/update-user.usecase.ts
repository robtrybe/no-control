import { Inject, Injectable } from "@nestjs/common";
import { UseCase } from "./usecase";
import { UserRepository } from "../repositories/user.repository";
import { OutputUpdateUserDto } from "../dto/output/output-update-user.dto";
import { InputUpdateUserDto } from "../dto/input/input-update-user.dto";

@Injectable()
export class UpdateUserUseCase implements UseCase {

    @Inject(UserRepository)
    private readonly userRepository: UserRepository;

    async execute(data: InputUpdateUserDto): Promise<OutputUpdateUserDto> {
        const { id, ...dto } = data;

        const updatedUser = await this.userRepository.updateUser(dto, id); 

        return {
            id: updatedUser.id,
            email: updatedUser.email,
            firstName: updatedUser.firstName,
            lastName: updatedUser.lastName,
        } as OutputUpdateUserDto
    }
}