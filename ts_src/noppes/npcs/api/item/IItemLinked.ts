import { IItemCustomizable } from "./IItemCustomizable";
import { ILinkedItem } from "./../handler/data/ILinkedItem";


export interface IItemLinked extends IItemCustomizable {
	getLinkedItem(): ILinkedItem;

}

