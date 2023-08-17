import { Injectable } from "@nestjs/common";
import { hashSync, compareSync } from "bcrypt";

@Injectable()
export class StringHelper {
	public normalizer(value: string): string {
		return value.toLowerCase().replace(/ /g, "");
	}

	public hash(value: string): string {
		return hashSync(value, 8);
	}
	public compare(value: string, encrypted: string): boolean {
		return compareSync(value, encrypted);
	}
}
