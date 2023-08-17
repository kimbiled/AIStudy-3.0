import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { Storage } from "@google-cloud/storage";

import { GoogleConfig } from "@config/google";

@Injectable()
export class StorageService {
	private readonly bucket = new Storage({
		keyFilename: GoogleConfig.KEY_FILE,
		projectId: GoogleConfig.PROJECT_ID,
	}).bucket(GoogleConfig.BUCKET_NAME);

	public async upload(file: Express.Multer.File, path: string) {
		const fileStream = this.bucket.file(`${path}/${file.originalname}`).createWriteStream({
			metadata: {
				contentType: file.mimetype,
			},
		});

		fileStream.on("error", (error) => {
			throw new InternalServerErrorException(error);
		});

		fileStream.end(file.buffer);
		return `${path}/${file.originalname}`;
	}

	public async delete(fileName: string) {
		await this.bucket
			.file(fileName)
			.delete()
			.then((res) => {
				console.log(res);
			})
			.catch((error) => {
				console.log(error);
				throw new InternalServerErrorException(error);
			});
	}
}
