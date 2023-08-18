export class CreateSpeakingDto {
	readonly part: number;
	readonly questions: string[];
	readonly topic?: string;
}

export class GetSpeakingDto {
	readonly speakingId: string;
}

export class UpdateSpeakingDto {
	readonly speakingId: string;
	readonly part: number;
	readonly questions: string[];
	readonly topic?: string;
}

export class DeleteSpeakingDto {
	readonly speakingId: string;
}
