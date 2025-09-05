import { IPlayer } from "./../entity/IPlayer";
import { IObject } from "./../../../../IObject";
import { IPlayerData } from "./IPlayerData";
import { IProfile } from "./data/IProfile";


export interface IProfileHandler extends IObject {
	getProfile(player: IPlayer): IProfile;

	changeSlot(player: IPlayer, slotID: number): boolean;

	hasSlot(player: IPlayer, slotID: number): boolean;

	removeSlot(player: IPlayer, slotID: number): boolean;

	getSlotPlayerData(player: IPlayer, slotID: number): IPlayerData;

	saveSlotData(player: IPlayer): void;

}
}
