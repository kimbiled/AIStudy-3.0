import {
	BadRequestException,
	ConflictException,
	Injectable,
	InternalServerErrorException,
	NotFoundException,
	UnauthorizedException,
} from "@nestjs/common";

import { PrismaService } from "@modules/prisma/prisma.service";

import { StringHelper } from "@helpers/string/string.helper";

import { CreateUserDto, GetUserDto, ValidateUserDto } from "@modules/user/dto";
import { ValidateSessionDto } from "@modules/session/dto";
import { SessionService } from "@modules/session/session.service";
import { FilterDto } from "@root/dto";

@Injectable()
export class UserService {
	constructor(
		private readonly prismaService: PrismaService,
		private readonly sessionService: SessionService,
		private readonly stringHelper: StringHelper
	) {}

	public async create(dto: CreateUserDto) {
		dto.username = this.stringHelper.normalizer(dto.username);
		dto.email = this.stringHelper.normalizer(dto.email);

		const exist = await this.prismaService.user.findMany({
			where: {
				username: dto.username,
				email: dto.email,
			},
		});
		if (exist.length > 0) throw new ConflictException("User already exist");

		dto.password = this.stringHelper.hash(dto.password);
		return await this.prismaService.user
			.create({
				data: dto,
			})
			.then((user) => {
				return user;
			})
			.catch((error) => {
				console.log(error);
				throw new InternalServerErrorException(error);
			});
	}

	public async validate(dto: ValidateUserDto) {
		dto.username = this.stringHelper.normalizer(dto.username);

		const user = await this.prismaService.user.findUnique({
			where: {
				username: dto.username,
			},
		});
		if (!user) throw new NotFoundException("User not found");

		const comparePassword: boolean = this.stringHelper.compare(dto.password, user.password);
		if (!comparePassword) throw new UnauthorizedException("Password is incorrect");

		delete user.password;
		return user;
	}

	public async get(dto: GetUserDto) {
		if (Object.keys(dto).length > 1) throw new BadRequestException("Only an username or an id is needed");
		if (Object.keys(dto).length < 1) throw new BadRequestException("Provide at least an username or an id");
		if (dto.username) dto.username = this.stringHelper.normalizer(dto.username);

		return await this.prismaService.user
			.findUnique({
				where: {
					username: dto.username,
					id: dto.id,
				},
			})
			.then((user) => {
				delete user.password;
				return user;
			})
			.catch((error) => {
				console.log(error);
				throw new InternalServerErrorException(error);
			});
	}

	public async getMe(dto: ValidateSessionDto) {
		const session = await this.sessionService.validate(dto);

		return await this.get({
			id: session.userId,
		});
	}

	public async getAll(filter: FilterDto) {
		return await this.prismaService.user
			.findMany(filter)
			.then((users) => {
				for (const user of users) {
					delete user.password;
				}
				return users;
			})
			.catch((error) => {
				console.log(error);
				throw new InternalServerErrorException(error);
			});
	}
}
