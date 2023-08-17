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
	@ApiProperty({ required: false })
	id?: string;

	@ApiProperty({ required: false })
	username?: string;
}
