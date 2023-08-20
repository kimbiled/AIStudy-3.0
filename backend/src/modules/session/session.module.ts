import { Module } from "@nestjs/common";

import { SessionService } from "@modules/session/session.service";

import { PrismaModule } from "@modules/prisma/prisma.module";

import { IpApiModule } from "@api/ip-api/ipApi.module";

@Module({
	imports: [PrismaModule, IpApiModule],
	providers: [SessionService],
	exports: [SessionService],
})
export class SessionModule {}
