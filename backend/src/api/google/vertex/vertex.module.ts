import { Module } from "@nestjs/common";

import { VertexService } from "@api/google/vertex/vertex.service";

@Module({
	providers: [VertexService],
	exports: [VertexService],
})
export class VertexModule {}
