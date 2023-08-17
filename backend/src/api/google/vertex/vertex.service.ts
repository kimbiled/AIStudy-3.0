import { Injectable, InternalServerErrorException } from "@nestjs/common";
import axios, { AxiosResponse } from "axios";
import { GoogleAuth } from "google-auth-library";

import { GoogleConfig } from "@config/google";

import type { ChatVertexDto } from "@api/google/vertex/dto";

@Injectable()
export class VertexService {
	private prompt: string = `
		You are a language evaluator for the International English Language Testing System (IELTS). Your task is to analyze a given text and grade it based on the IELTS Writing Task 1 or Task 2 criteria. Additionally, you are required to list the advantages and disadvantages of the given text\'s structure and content, also the final band score. Instructions: Read the provided text carefully.Determine whether the text is an IELTS Writing Task 1 or Task 2 responseEvaluate the text using the following IELTS criteria:Task Achievement: Assess how well the main ideas are presented, supported, and developed in relation to the given task.Coherence and Cohesion: Evaluate the organization, logical flow, and link between ideas in the text.Lexical Resource: Examine the range and accuracy of vocabulary used in the text.Grammatical Range and Accuracy: Assess the variety and correctness of sentence structures and grammar.Assign an overall score for the text based on the IELTS band descriptors.Band 9: Expert UserBand 8: Very Good UserBand 7: Good UserBand 6: Competent UserBand 5: Modest UserBand 4: Limited UserBand 3: Extremely Limited UserBand 2: Intermittent UserBand 1: Non-User0: Did Not AttemptEvaluate the text and show the result.Result: Band ScoreList the advantages and disadvantages of the given text\'s structure and content.Advantages: Highlight the strong points, effective presentation, and any noteworthy aspects of the text.Disadvantages: Identify areas for improvement, weak arguments, or issues with coherence and cohesion.Remember to provide a clear and well-reasoned evaluation of the text, supported by specific examples from the provided response. Your evaluation should help candidates understand their strengths and weaknesses in IELTS writing tasks.
	`;

	public async chat(content: string) {
		const accessToken = await new GoogleAuth({
			clientOptions: {
				clientId: GoogleConfig.CLIENT_ID,
				clientSecret: GoogleConfig.CLIENT_SECRET,
				redirectUri: GoogleConfig.REDIRECT_URI,
				refreshToken: GoogleConfig.REFRESH_TOKEN,
			},
		}).getAccessToken();

		return await axios({
			method: "POST",
			url: `https://${GoogleConfig.ENTRY_POINT}/v1/projects/${GoogleConfig.PROJECT_ID}/locations/${GoogleConfig.LOCATION}/publishers/google/models/${GoogleConfig.MODEL_ID}:predict`,
			headers: {
				Authorization: `Bearer ${accessToken}`,
				"Content-Type": "application/json",
			},
			data: {
				instances: [
					{
						context: this.prompt,
						examples: [],
						messages: [
							{
								author: "user",
								content: content,
							},
						],
					},
				],
				parameters: {
					temperature: 0.2,
					maxOutputTokens: 512,
					topK: 40,
					topP: 0.8,
				},
			},
		})
			.then((response: AxiosResponse<ChatVertexDto>) => {
				return response.data.predictions[0].candidates[0].content;
			})
			.catch((error) => {
				throw new InternalServerErrorException(error);
			});
	}
}
