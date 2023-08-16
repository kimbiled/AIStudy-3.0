import { Module } from "@nestjs/common";

import { UserController } from "@modules/user/user.controller";
import { UserService } from "@modules/user/user.service";

import { PrismaModule } from "@modules/prisma/prisma.module";
import { SessionModule } from "@modules/session/session.module";

import { HelperModule } from "@helpers/helper.module";

@Module({
	imports: [PrismaModule, SessionModule, HelperModule],
	controllers: [UserController],
	providers: [UserService],
	exports: [UserService],
})
export class UserModule {}
