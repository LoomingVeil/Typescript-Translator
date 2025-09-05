import { IPlayer } from "./../../entity/IPlayer";
import { IObject } from "./../../../../../IObject";

import { NBTTagCompound } from "./../../../../../missingTypes";
import { Map } from "./../../../../../missingTypes";

export interface IProfile extends IObject {
	/**
	 * @return the IPlayer attached to the Profile
	 */
	getPlayer(): IPlayer;

	/**
	 * @return The profiles current Slot ID
	 */
	getCurrentSlotId(): number;

	/**
	 * @return Map of all Slot IDs
	 */
	getSlots(): Map;

	/**
	 * @return FULL NBT of the Profile
	 */
	writeToNBT(): NBTTagCompound;

}

