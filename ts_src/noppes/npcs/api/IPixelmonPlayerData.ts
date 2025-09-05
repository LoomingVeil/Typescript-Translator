import { IObject } from "./../../../IObject";
import { IPixelmon } from "./entity/IPixelmon";


export interface IPixelmonPlayerData extends IObject {
	getPartySlot(slot: number): IPixelmon;

	countPCPixelmon(): number;

}

