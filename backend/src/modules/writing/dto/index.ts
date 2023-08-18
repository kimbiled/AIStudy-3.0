import { ApiProperty } from "@nestjs/swagger";

export class CreateWritingDto {
	@ApiProperty()
	readonly type: number;

	@ApiProperty()
	readonly topic: string;

	@ApiProperty({ required: false })
	path?: string;
}

export class CheckWritingDto {
	@ApiProperty()
	readonly writingId: string;

	@ApiProperty()
	readonly content: string;
}

export class GetWritingDto {
	@ApiProperty()
	readonly writingId: string;
}
