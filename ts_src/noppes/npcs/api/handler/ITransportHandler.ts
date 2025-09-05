import { ITransportCategory } from "./data/ITransportCategory";
import { IObject } from "./../../../../IObject";


export interface ITransportHandler extends IObject {
	categories(): ITransportCategory[];

	createCategory(title: string): void;

	getCategory(title: string): ITransportCategory;

	removeCategory(title: string): void;

}
}
