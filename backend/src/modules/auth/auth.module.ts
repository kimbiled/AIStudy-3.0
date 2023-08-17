import { Module } from "@nestjs/common";

import { AuthController } from "@modules/auth/auth.controller";
import { AuthService } from "@modules/auth/auth.service";

import { UserModule } from "@modules/user/user.module";
import { SessionModule } from "@modules/session/session.module";

@Module({
	imports: [UserModule, SessionModule],
	controllers: [AuthController],
	providers: [AuthService],
})
export class AuthModule {}
