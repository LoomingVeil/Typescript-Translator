import { IEntityType } from "./constants/IEntityType";
import { IRoleType } from "./constants/IRoleType";
import { IObject } from "./../../../../IObject";
import { IEntity } from "./../../../../noppes/npcs/api/entity/IEntity";
import { IWorld } from "./../../../../noppes/npcs/api/IWorld";
import { IAttributeSection } from "./constants/IAttributeSection";
import { IShapeMaker } from "./IShapeMaker";
import { IKeys } from "./constants/IKeys";
import { IColorCodes } from "./constants/IColorCodes";
import { IJobType } from "./constants/IJobType";
import { IAttributeValueType } from "./constants/IAttributeValueType";
import { IAnimationType } from "./constants/IAnimationType";


/**
 * This object stores functions available to all scripting handlers through the "extAPI" keyword.
 */
export interface AbstractExtendedAPI extends IObject {
	getShapeMaker(): IShapeMaker;

	getKeysCodes(): IKeys;

	getAnimationTypes(): IAnimationType;

	getEntityTypes(): IEntityType;

	getJobTypes(): IJobType;

	getRoleTypes(): IRoleType;

	getAttributeValueTypes(): IAttributeValueType;

	getArributeSections(): IAttributeSection;

	getColorCodes(): IColorCodes;

	/**
	 * Gets an array of the names of the registered entities in the game.
	 * These names can be used in functions like {@link #createIEntity(String, IWorld)}.
	 */
	getEntityNameList(): string[];

	/**
	 * Creates an instance of an IEntity that can be spawned in the world with {@link IWorld#spawnEntityInWorld(noppes.npcs.api.entity.IEntity)}
	 * 
	 * @param entityName To see all valid names, call {@link #getEntityNameList()}
	 * @return An IEntity or null if entityName is invalid
	 */
	createIEntity(entityName: string, world: IWorld): IEntity;

	/**
	 * Converts a hex code to an integer color that can be used for ScriptedItem's setColor {@link noppes.npcs.api.item.IItemCustomizable#setColor(Integer)} method.
	 * 
	 * @param hex A length six hex code (#'s are removed automatically)
	 * @return An integer color or -1 if wrong length and -2 if string is not a hex code.
	 */
	hexToNpcColor(hex: string): number;

	npcColorToHex(npcColor: number): string;

	/**
	 * Registers a custom attribute that can both be applied via script or /kam attribute. Attributes are registered per world.
	 * 
	 * @param key This, by convention, is always lowercase and words are separated by _'s. This name is used within your scripts to denote your attribute.
	 * @param displayName This name will show up on your item.
	 * @param colorCode Takes one of Minecraft's 16 colors 0-9 and a-f. See {@link IColorCodes}.
	 * @param attributeType 0. Flat, 1. Percent, 2. Magic. See {@link IAttributeValueType}
	 * @param section 0. Base, 1. Modifier, 2. Stats, 3. Info, 4. Extra. The higher the number, the further down the section is. See {@link IAttributeSection}
	 */
	registerAttribute(key: string, displayName: string, colorCode: string, attributeType: number, section: number): void;

	/**
	 * Unregisters a custom attribute. Unregistering an attribute also removes it from all items.
	 */
	unregisterAttribute(key: string): boolean;

	/**
	 * Gets a list of all the custom attributes' keys currently registered in your world.
	 */
	getAttributeKeyList(): string[];

	/**
	 * Gets a list of only the custom attributes' keys that do not come natively with CustomNpcs+.
	 */
	getCustomAttributeKeyList(): string[];

}
}

export const extAPI: AbstractExtendedAPI = {} as AbstractExtendedAPI;
