export class ChatVertexDto {
	predictions: {
		candidates: [
			{
				author: string;
				content: string;
			}
		];
		citationMetadata: {
			citations: [];
		}[];

		safetyAttributes: {
			categories: [];
			scores: [];
			blocked: boolean;
		}[];
	}[];

	metadata: {
		tokenMetadata: {
			inputTokenCount: {
				totalTokens: number;
				totalBillableCharacters: number;
			};
			outputTokenCount: {
				totalBillableCharacters: number;
				totalTokens: number;
			};
		};
	};
}
