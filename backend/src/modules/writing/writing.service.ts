import { Injectable, InternalServerErrorException } from "@nestjs/common";

import { PrismaService } from "@modules/prisma/prisma.service";

import { StorageService } from "@api/google/storage/storage.service";
import { VertexService } from "@api/google/vertex/vertex.service";

import { CheckWritingDto, CreateWritingDto, GetWritingDto } from "@modules/writing/dto";
import { FilterDto } from "@root/dto";

@Injectable()
export class WritingService {
	constructor(
		private readonly prismaService: PrismaService,
		private readonly vertexService: VertexService,
		private readonly storageService: StorageService
	) {}

	public async create(dto: CreateWritingDto, file?: Express.Multer.File) {
		if (dto.type === 1) {
			dto.path = await this.storageService.upload(file, "writing");
		}

		return await this.prismaService.writing
			.create({
				data: dto,
			})
			.then((writing) => {
				return writing;
			})
			.catch((error) => {
				console.log(error);
				throw new InternalServerErrorException(error);
			});
	}

	public async check(dto: CheckWritingDto) {
		const writing = await this.get({
			writingId: dto.writingId,
		});

		return await this.vertexService.chat(dto.content);
	}

	public async get(dto: GetWritingDto) {
		return await this.prismaService.writing
			.findUnique({
				where: {
					id: dto.writingId,
				},
			})
			.then((writing) => {
				return writing;
			})
			.catch((error) => {
				console.log(error);
				throw new InternalServerErrorException(error);
			});
	}

	public async getAll(filter: FilterDto) {
		return await this.prismaService.writing
			.findMany(filter)
			.then((writings) => {
				return writings;
			})
			.catch((error) => {
				console.log(error);
				throw new InternalServerErrorException(error);
			});
	}
}
