import { BadRequestException, Injectable, InternalServerErrorException } from "@nestjs/common";

import { PrismaService } from "@modules/prisma/prisma.service";

import { VertexService } from "@api/google/vertex/vertex.service";

import { CreateSpeakingDto, DeleteSpeakingDto, GetSpeakingDto, UpdateSpeakingDto } from "@modules/speaking/dto";
import { FilterDto } from "@root/dto";

@Injectable()
export class SpeakingService {
	constructor(private readonly prismaService: PrismaService, private readonly vertexService: VertexService) {}

	public async create(dto: CreateSpeakingDto) {
		if (dto.part === 2 && !dto.topic) throw new BadRequestException("Speaking part 2 needs topic key");

		return await this.prismaService.speaking
			.create({
				data: {
					part: dto.part,
					questions: dto.questions,
					topic: dto.part === 2 ? dto.topic : null,
				},
			})
			.then((speaking) => {
				return speaking;
			})
			.catch((error) => {
				console.log(error);
				throw new InternalServerErrorException(error);
			});
	}

	public async get(dto: GetSpeakingDto) {
		return await this.prismaService.speaking
			.findUnique({
				where: {
					id: dto.speakingId,
				},
			})
			.then((speaking) => {
				return speaking;
			})
			.catch((error) => {
				console.log(error);
				throw new InternalServerErrorException(error);
			});
	}

	public async getAll(filter: FilterDto) {
		return await this.prismaService.speaking
			.findMany(filter)
			.then((speakings) => {
				return speakings;
			})
			.catch((error) => {
				console.log(error);
				throw new InternalServerErrorException(error);
			});
	}

	public async update(dto: UpdateSpeakingDto) {
		const speaking = await this.get({
			speakingId: dto.speakingId,
		});
		for (const question of dto.questions) {
			speaking.questions.push(question);
		}

		return await this.prismaService.speaking
			.update({
				where: {
					id: dto.speakingId,
				},
				data: {
					part: dto.part,
					topic: dto.topic,
					questions: speaking.questions,
				},
			})
			.then((speaking) => {
				return speaking;
			})
			.catch((error) => {
				console.log(error);
				throw new InternalServerErrorException(error);
			});
	}

	public async delete(dto: DeleteSpeakingDto) {
		await this.prismaService.speaking
			.delete({
				where: {
					id: dto.speakingId,
				},
			})
			.catch((error) => {
				console.log(error);
				throw new InternalServerErrorException(error);
			});
	}

	public async check(file: Express.Multer.File) {
		return await this.vertexService.speechToText(file);
	}
}
