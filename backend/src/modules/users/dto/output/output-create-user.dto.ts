import { ApiProperty } from "@nestjs/swagger";

export class OutputCreateUserDto {
    @ApiProperty()
    id: string;

    @ApiProperty()
    firstName: string;

    @ApiProperty()
    lastName: string;
    
    @ApiProperty()
    email: string;
}