import { Module } from "@nestjs/common";

import { UserModule } from "@modules/user/user.module";
import { AuthModule } from "@modules/auth/auth.module";
import { WritingModule } from "@modules/writing/writing.module";
import { SpeakingModule } from "@modules/speaking/speaking.module";

@Module({
	imports: [UserModule, AuthModule, 
		//WritingModule, SpeakingModule
	],
})
export class AppModule {}
