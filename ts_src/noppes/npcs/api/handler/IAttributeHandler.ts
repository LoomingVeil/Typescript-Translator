import { IPlayer } from "./../entity/IPlayer";
import { IObject } from "./../../../../IObject";
import { IPlayerAttributes } from "./data/IPlayerAttributes";
import { IAttributeDefinition } from "./data/IAttributeDefinition";


/**
 * Handles registration and lookup of attribute definitions as well as
 * retrieval of player attributes.
 * <p>
 * Maintain a unique registry of attribute definitions and provide methods to
 * retrieve a player's aggregated attributes.
 * </p>
 */
export interface IAttributeHandler extends IObject {
	/**
	 * Returns the aggregated attributes for a given player.
	 * 
	 * @param player the player whose attributes are requested
	 * @return an {@link IPlayerAttributes} instance containing all custom attributes for the player,
	 *         or null if the player is invalid
	 */
	getPlayerAttributes(player: IPlayer): IPlayerAttributes;

	/**
	 * Returns the attribute definition corresponding to the given key.
	 * 
	 * @param key the unique key identifying the attribute (e.g., "health", "movement_speed")
	 * @return the {@link IAttributeDefinition} instance for the specified key, or null if not found
	 */
	getAttributeDefinition(key: string): IAttributeDefinition;

	/**
	 * Returns an array of all registered attribute definitions.
	 * 
	 * @return an array of {@link IAttributeDefinition} objects representing all attributes
	 */
	getAllAttributesArray(): IAttributeDefinition[];

}
}
