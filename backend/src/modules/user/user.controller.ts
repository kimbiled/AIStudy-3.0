import { Body, Controller, Get, HttpCode, HttpStatus, Param, Put, Query, Req, UsePipes } from "@nestjs/common";
import { Request } from "express";
import { ApiTags } from "@nestjs/swagger";

import { UserService } from "@modules/user/user.service";

import { IntPipe } from "@pipes/int.pipe";

import { ValidateSessionDto } from "@modules/session/dto";
import { GetUserDto, UpdateUserDto } from "@modules/user/dto";
import { FilterDto } from "@root/dto";

@ApiTags("/user")
@Controller("/user")
export class UserController {
	constructor(private readonly userService: UserService) {}

	@HttpCode(HttpStatus.OK)
	@Get("/get-me")
	public async getMe(@Query() dto: ValidateSessionDto, @Req() req: Request) {
		return await this.userService.getMe({
			sessionId: dto.sessionId,
			device: dto.device ?? req.headers["user-agent"],
		});
	}

	@HttpCode(HttpStatus.OK)
	@Get("/get/:username")
	public async get(@Param() dto: GetUserDto) {
		return await this.userService.get(dto);
	}

	@HttpCode(HttpStatus.OK)
	@Get("/get-all")
	@UsePipes(IntPipe)
	public async getAll(@Query() filter: FilterDto) {
		return await this.userService.getAll(filter);
	}

	@HttpCode(HttpStatus.OK)
	@Put("/update")
	public async update(@Body() dto: UpdateUserDto) {
		return await this.userService.update(dto);
	}
}
