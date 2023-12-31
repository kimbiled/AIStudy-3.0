import { Injectable, InternalServerErrorException, NotFoundException, UnauthorizedException } from "@nestjs/common";

import { PrismaService } from "@modules/prisma/prisma.service";

import { IpApiService } from "@api/ip-api/ipApi.service";

import { CreateSessionDto, GetSessionDto, RevokeSessionDto, ValidateSessionDto } from "@modules/session/dto";

@Injectable()
export class SessionService {
	private readonly updateDate: Date = new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 7);

	constructor(private readonly prismaService: PrismaService, private readonly ipApiService: IpApiService) {}

	public async create(dto: CreateSessionDto) {
		dto.ip = dto.ip.replace(/[^\d.]/g, "");
		dto.location = await this.ipApiService.location(dto.ip);

		return await this.prismaService.session
			.create({
				data: {
					user: {
						connect: {
							id: dto.userId,
						},
					},
					ip: dto.ip,
					device: dto.device,
					location: dto.location,
					expirationDate: this.updateDate,
				},
			})
			.then((session) => {
				return session;
			})
			.catch((error) => {
				console.log(error);
				throw new InternalServerErrorException(error);
			});
	}

	public async get(dto: GetSessionDto) {
		return await this.prismaService.session
			.findUnique({
				where: {
					id: dto.sessionId,
				},
			})
			.then((session) => {
				return session;
			})
			.catch((error) => {
				console.log(error);
				throw new InternalServerErrorException(error);
			});
	}

	public async revoke(dto: RevokeSessionDto) {
		await this.prismaService.session
			.delete({
				where: {
					id: dto.sessionId,
				},
			})
			.catch((error) => {
				console.log(error);
				throw new InternalServerErrorException(error);
			});
	}

	public async validate(dto: ValidateSessionDto) {
		return await this.get({
			sessionId: dto.sessionId,
		})
			.then(async (session) => {
				if (!session) throw new NotFoundException("Session not found");
				if (session.device === dto.device) return session;

				await this.revoke({
					sessionId: dto.sessionId,
				});
				throw new UnauthorizedException("Devices are not matching");
			})
			.catch((error) => {
				console.log(error);
				throw new InternalServerErrorException(error);
			});
	}
}
