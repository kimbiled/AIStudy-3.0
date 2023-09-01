import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional } from "class-validator";

export class CreateSessionDto {
	readonly userId: string;
	ip: string;
	device: string;
	location?: string;
}

export class GetSessionDto {
	@IsNotEmpty()
	@ApiProperty()
	readonly sessionId: string;
}

export class RevokeSessionDto {
	@IsNotEmpty()
	@ApiProperty()
	readonly sessionId: string;
}

export class ValidateSessionDto {
	@IsNotEmpty()
	@ApiProperty()
	readonly sessionId: string;

	@IsOptional()
	@ApiProperty({ required: false })
	readonly device?: string;
}
