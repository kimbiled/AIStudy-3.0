import { Injectable, InternalServerErrorException } from "@nestjs/common";
import axios, { type AxiosResponse } from "axios";

@Injectable()
export class IpApiService {
	public async location(ip: string) {
		return await axios({
			method: "GET",
			url: `http://ip-api.com/json/${ip}?`,
			params: {
				fields: ["country", "city"].toString(),
			},
		})
			.then((response: AxiosResponse<{ country: string; city: string }>) => {
				let location = "";

				for (const key in response.data) {
					location += response.data[key];
				}
				return location;
			})
			.catch((error) => {
				console.log(error);
				throw new InternalServerErrorException(error);
			});
	}
}
