import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
	@ApiProperty()
	username: string;

	@ApiProperty()
	password: string;

	@ApiProperty()
	email: string;
}

export class ValidateUserDto {
	@ApiProperty()
	username: string;

	@ApiProperty()
	password: string;
}

export class GetUserDto {
	@ApiProperty()
	username: string;
}

export class UpdateUserDto {
	@ApiProperty()
	userId: string;

	@ApiProperty()
	name: string;
}
