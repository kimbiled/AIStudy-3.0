import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Post, Put, Query } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

import { SpeakingService } from "@modules/speaking/speaking.service";
import { CreateSpeakingDto, DeleteSpeakingDto, GetSpeakingDto, UpdateSpeakingDto } from "@modules/speaking/dto";

@ApiTags("/speaking")
@Controller("/speaking")
export class SpeakingController {
	constructor(private readonly speakingService: SpeakingService) {}

	@HttpCode(HttpStatus.CREATED)
	@Post("/create")
	public async create(@Body() dto: CreateSpeakingDto) {
		return await this.speakingService.create(dto);
	}

	@HttpCode(HttpStatus.OK)
	@Get("/get")
	public async get(@Query() dto: GetSpeakingDto) {
		return await this.speakingService.get(dto);
	}

	@HttpCode(HttpStatus.OK)
	@Put("/update")
	public async update(@Body() dto: UpdateSpeakingDto) {
		return await this.speakingService.update(dto);
	}

	@HttpCode(HttpStatus.OK)
	@Delete("/delete")
	public async delete(@Body() dto: DeleteSpeakingDto) {
		return await this.speakingService.delete(dto);
	}
}
