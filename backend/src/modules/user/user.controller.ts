import { Controller, Get, HttpCode, HttpStatus, Query, Req, UsePipes } from "@nestjs/common";
import { Request } from "express";
import { ApiTags } from "@nestjs/swagger";

import { UserService } from "@modules/user/user.service";

import { IntPipe } from "@pipes/int.pipe";

import { GetSessionDto } from "@modules/session/dto";
import { GetUserDto } from "@modules/user/dto";
import { FilterDto } from "@root/dto";

@ApiTags("/user")
@Controller("/user")
export class UserController {
	constructor(private readonly userService: UserService) {}

	@HttpCode(HttpStatus.OK)
	@Get("/get")
	public async get(@Query() dto: GetUserDto) {
		return await this.userService.get(dto);
	}

	@HttpCode(HttpStatus.OK)
	@Get("/get-me")
	public async getMe(@Query() dto: GetSessionDto, @Req() req: Request) {
		return await this.userService.getMe({
			sessionId: dto.sessionId,
			device: req.headers["user-agent"],
		});
	}

	@HttpCode(HttpStatus.OK)
	@Get("/get-all")
	@UsePipes(IntPipe)
	public async getAll(@Query() dto: FilterDto) {
		return await this.userService.getAll(dto);
	}
}
