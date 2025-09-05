import { IObject } from "./../../../../IObject";
import { ICustomNpc } from "./../entity/ICustomNpc";


export interface IRole extends IObject {
	getNpc(): ICustomNpc;

	getType(): number;

}

