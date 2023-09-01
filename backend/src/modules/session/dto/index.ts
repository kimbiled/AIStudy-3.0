import { ApiProperty } from "@nestjs/swagger";

export class CreateSessionDto {
	readonly userId: string;
	ip: string;
	device: string;
	location?: string;
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
	@ApiProperty()
	readonly sessionId: string;

	@ApiProperty({ required: false })
	readonly device?: string;
}
