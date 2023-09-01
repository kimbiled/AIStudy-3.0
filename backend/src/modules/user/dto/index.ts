import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, MinLength } from "class-validator";

export class CreateUserDto {
	@IsNotEmpty()
	@MinLength(4)
	@ApiProperty()
	username: string;

	@IsNotEmpty()
	@ApiProperty()
	password: string;

	@IsNotEmpty()
	@ApiProperty()
	email: string;
}

export class ValidateUserDto {
	@IsNotEmpty()
	@ApiProperty()
	username: string;

	@IsNotEmpty()
	@ApiProperty()
	password: string;
}

export class GetUserDto {
	@IsNotEmpty()
	@ApiProperty()
	username: string;
}

export class UpdateUserDto {
	@IsNotEmpty()
	@ApiProperty()
	userId: string;

	@IsNotEmpty()
	@ApiProperty()
	name: string;
}
