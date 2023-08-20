import { Injectable, InternalServerErrorException } from "@nestjs/common";
import axios, { type AxiosResponse } from "axios";

@Injectable()
export class IpApiService {
	public async location(ip: string) {
		return await axios({
			method: "GET",
			url: `http://ip-api.com/json/${ip}?fields=country,city`,
		})
			.then((response: AxiosResponse<string>) => {
				return response.data;
			})
			.catch((error) => {
				console.log(error);
				throw new InternalServerErrorException(error);
			});
	}
}
