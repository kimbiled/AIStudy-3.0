import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	HttpStatus,
	Param,
	Post,
	Put,
	Query,
	UploadedFile,
	UseInterceptors,
} from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

import { SpeakingService } from "@modules/speaking/speaking.service";
import { CreateSpeakingDto, DeleteSpeakingDto, GetSpeakingDto, UpdateSpeakingDto } from "@modules/speaking/dto";
import { FileInterceptor } from "@nestjs/platform-express";
import { FilterDto } from "@root/dto";

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
	@Get("/get/:speakingId")
	public async get(@Param() dto: GetSpeakingDto) {
		console.log(dto);
		return await this.speakingService.get(dto);
	}

	@HttpCode(HttpStatus.OK)
	@Get("/get")
	public async getAll(@Query() filter: FilterDto) {
		return await this.speakingService.getAll(filter);
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

	@HttpCode(HttpStatus.OK)
	@Post("/check")
	@UseInterceptors(FileInterceptor("file"))
	public async check(@UploadedFile() file: Express.Multer.File) {
		return await this.speakingService.check(file);
	}
}
