import { IObject } from "./../../../../IObject";
import { ICustomNpc } from "./../entity/ICustomNpc";


export interface IJob extends IObject {
	getType(): number;

	getNpc(): ICustomNpc;

}

