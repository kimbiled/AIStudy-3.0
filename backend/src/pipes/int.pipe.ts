import { Injectable, PipeTransform } from "@nestjs/common";

@Injectable()
export class IntPipe implements PipeTransform {
	public transform(object: object): object {
		for (const key in object) {
			const parsedValue = parseInt(object[key]);
			if (!isNaN(parsedValue)) object[key] = parsedValue;
		}

		return object;
	}
}
