import { ApiProperty } from "@nestjs/swagger";

export class CreateSessionDto {
	readonly userId: string;
	ip: string;
	device: string;
}

export class GetSessionDto {
	@ApiProperty()
	readonly sessionId: string;
}

export class RevokeSessionDto {
	@ApiProperty()
	readonly sessionId: string;
}

export class ValidateSessionDto {
	readonly sessionId: string;
	readonly device: string;
}
