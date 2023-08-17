import { Body, Controller, HttpCode, HttpStatus, Post, Req } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { Request } from "express";

import { AuthService } from "@modules/auth/auth.service";

import { CreateUserDto, ValidateUserDto } from "@modules/user/dto";
import { RevokeSessionDto } from "@modules/session/dto";

@ApiTags("/auth")
@Controller("/auth")
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@HttpCode(HttpStatus.CREATED)
	@Post("/local/sign-up")
	public async localSignUp(@Body() dto: CreateUserDto, @Req() req: Request) {
		return await this.authService.localSignUp(dto, req.ip, req.headers["user-agent"]);
	}

	@HttpCode(HttpStatus.OK)
	@Post("/local/sign-in")
	public async localSignIn(@Body() dto: ValidateUserDto, @Req() req: Request) {
		return await this.authService.localSignIn(dto, req.ip, req.headers["user-agent"]);
	}

	@HttpCode(HttpStatus.OK)
	@Post("/log-out")
	public async logOut(@Body() dto: RevokeSessionDto) {
		return await this.authService.logOut(dto);
	}
}
