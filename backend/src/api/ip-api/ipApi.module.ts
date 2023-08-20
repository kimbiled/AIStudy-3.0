import { Module } from "@nestjs/common";

import { IpApiService } from "@api/ip-api/ipApi.service";

@Module({
	providers: [IpApiService],
	exports: [IpApiService],
})
export class IpApiModule {}
