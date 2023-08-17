import {
	Body,
	Controller,
	Get,
	HttpCode,
	HttpStatus,
	Post,
	Query,
	UploadedFile,
	UseInterceptors,
	UsePipes,
} from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { ApiTags } from "@nestjs/swagger";

import { WritingService } from "@modules/writing/writing.service";

import { IntPipe } from "@pipes/int.pipe";

import { CheckWritingDto, CreateWritingDto, GetWritingDto } from "@modules/writing/dto";
import { FilterDto } from "@root/dto";

@ApiTags("/writing")
@Controller("/writing")
export class WritingController {
	constructor(private readonly writingService: WritingService) {}

	@HttpCode(HttpStatus.CREATED)
	@Post("/create")
	@UsePipes(IntPipe)
	@UseInterceptors(FileInterceptor("file"))
	public async create(@Body() dto: CreateWritingDto, @UploadedFile() file?: Express.Multer.File) {
		return await this.writingService.create(dto, file);
	}

	@HttpCode(HttpStatus.OK)
	@Post("/check")
	public async check(@Body() dto: CheckWritingDto) {
		return await this.writingService.check(dto);
	}

	@HttpCode(HttpStatus.OK)
	@Get("/get")
	public async get(@Query() dto: GetWritingDto) {
		return await this.writingService.get(dto);
	}

	@HttpCode(HttpStatus.OK)
	@Get("/get-all")
	@UsePipes(IntPipe)
	public async getAll(@Query() filter: FilterDto) {
		return await this.writingService.getAll(filter);
	}
}
