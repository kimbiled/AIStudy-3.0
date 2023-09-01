import "dotenv/config";
import { NestFactory } from "@nestjs/core";
import { ValidationPipe } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { type NestExpressApplication } from "@nestjs/platform-express";

import { AppModule } from "@root/app.module";

import { MainConfig } from "@config/main";

async function bootstrap() {
	const app = await NestFactory.create<NestExpressApplication>(AppModule);
	app.setGlobalPrefix("/api/v2");
	app.useGlobalPipes(new ValidationPipe());
	app.enableCors({
		origin: true,
	});

	const config = new DocumentBuilder()
		.setTitle("AI Study")
		.setDescription("API documentation")
		.setVersion("2")
		.build();
	const document = SwaggerModule.createDocument(app, config);
	SwaggerModule.setup("/api/docs", app, document);

	await app.listen(MainConfig.PORT);
}
bootstrap().then(() => {
	console.log("Server is running on port:", MainConfig.PORT);
});
