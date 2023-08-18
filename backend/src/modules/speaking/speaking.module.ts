import { Module } from "@nestjs/common";

import { SpeakingController } from "@modules/speaking/speaking.controller";
import { SpeakingService } from "@modules/speaking/speaking.service";

import { PrismaModule } from "@modules/prisma/prisma.module";

import { VertexModule } from "@api/google/vertex/vertex.module";

@Module({
	imports: [PrismaModule, VertexModule],
	controllers: [SpeakingController],
	providers: [SpeakingService],
})
export class SpeakingModule {}
