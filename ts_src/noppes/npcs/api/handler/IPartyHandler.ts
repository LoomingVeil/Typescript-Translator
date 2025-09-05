import { IPlayer } from "./../entity/IPlayer";
import { IObject } from "./../../../../IObject";
import { IParty } from "./data/IParty";


export interface IPartyHandler extends IObject {
	/**
	 * @param player - The Leader of the Party
	 * @return IParty Object
	 */
	createParty(player: IPlayer): IParty;

	/**
	 * @param player - Gets the party of current player and disbands it
	 */
	disbandParty(player: IPlayer): void;

}
}
