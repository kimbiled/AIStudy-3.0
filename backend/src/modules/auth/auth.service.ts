import { Injectable } from "@nestjs/common";

import { UserService } from "@modules/user/user.service";
import { SessionService } from "@modules/session/session.service";

import type { CreateUserDto, ValidateUserDto } from "@modules/user/dto";
import type { RevokeSessionDto } from "@modules/session/dto";

@Injectable()
export class AuthService {
	constructor(private readonly userService: UserService, private readonly sessionService: SessionService) {}

	public async localSignUp(dto: CreateUserDto, ip: string, device: string) {
		const user = await this.userService.create(dto);

		const session = await this.sessionService.create({
			userId: user.id,
			ip,
			device,
		});

		return session.id;
	}
	public async localSignIn(dto: ValidateUserDto, ip: string, device: string) {
		const user = await this.userService.validate(dto);

		const session = await this.sessionService.create({
			userId: user.id,
			ip,
			device,
		});

		return session.id;
	}
	public async logOut(dto: RevokeSessionDto) {
		await this.sessionService.revoke(dto);
	}
}
