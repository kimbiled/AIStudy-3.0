import { Module } from "@nestjs/common";

import { UserModule } from "@modules/user/user.module";
import { AuthModule } from "@modules/auth/auth.module";
import { WritingModule } from "@modules/writing/writing.module";

@Module({
	imports: [UserModule, AuthModule, WritingModule],
})
export class AppModule {}
