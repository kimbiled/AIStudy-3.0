import {
	ConflictException,
	Injectable,
	InternalServerErrorException,
	NotFoundException,
	UnauthorizedException,
} from "@nestjs/common";

import { PrismaService } from "@modules/prisma/prisma.service";

import { SessionService } from "@modules/session/session.service";

import { StringHelper } from "@helpers/string/string.helper";

import { CreateUserDto, GetUserDto, UpdateUserDto, ValidateUserDto } from "@modules/user/dto";
import { ValidateSessionDto } from "@modules/session/dto";
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

		const exist = await this.prismaService.user.findFirst({
			where: {
				OR: [{ username: dto.username }, { email: dto.email }],
			},
		});
		if (exist) throw new ConflictException("User already exist");

		dto.password = this.stringHelper.hash(dto.password);
		return this.prismaService.user
			.create({
				data: dto,
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
		if (dto.username) dto.username = this.stringHelper.normalizer(dto.username);

		return this.prismaService.user
			.findUnique({
				where: {
					username: dto.username,
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

		return this.prismaService.user
			.findUnique({
				where: {
					id: session.userId,
				},
				include: {
					progress: true,
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

	public async getAll(filter: FilterDto) {
		return this.prismaService.user
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

	public async update(dto: UpdateUserDto) {
		return this.prismaService.user
			.update({
				where: {
					id: dto.userId,
				},
				data: {
					name: dto.name,
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
}
