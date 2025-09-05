import { IEntityLiving } from "./IEntityLiving";
import { IEntityLivingBase } from "./IEntityLivingBase";


/**
 * Represents a villager entity with additional trading-related methods.
 * 
 * @param <T> The underlying Minecraft EntityVillager type.
 */
export interface IVillager extends IEntityLiving {
	/**
	 * @return The profession of the villager.
	 */
	getProfession(): number;

	/**
	 * @return true if the villager is currently trading.
	 */
	getIsTrading(): boolean;

	/**
	 * Returns the customer (player) who is currently trading with the villager.
	 * 
	 * @return the customer as an IEntityLivingBase.
	 */
	getCustomer(): IEntityLivingBase;

}

