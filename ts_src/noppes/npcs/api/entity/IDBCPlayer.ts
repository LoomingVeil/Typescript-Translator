import { IPlayer } from "./IPlayer";
import { IItemStack } from "./../item/IItemStack";


/**
 * Extends IPlayer with additional methods specific to DBC (Dragon Ball C) players.
 * These methods manage stats, bonus attributes, form configurations, inventory, and more.
 */
export interface IDBCPlayer extends IPlayer {
	/**
	 * Sets the specified stat to the given value.
	 * 
	 * @param stat the stat name (e.g. "str", "dex", "con", "wil", "mnd", "spi").
	 * @param value the new value.
	 */
	setStat(stat: string, value: number): void;

	/**
	 * Retrieves the value of the specified stat.
	 * 
	 * @param stat the stat name.
	 * @return the stat value.
	 */
	getStat(stat: string): number;

	/**
	 * Adds a bonus attribute for the specified stat.
	 * 
	 * @param stat the stat name.
	 * @param bonusID the identifier for the bonus.
	 * @param operation the arithmetic operation to apply.
	 * @param attributeValue the attribute value.
	 */
	addBonusAttribute(stat: string, bonusID: string, operation: string, attributeValue: number): void;

	/**
	 * Adds a bonus attribute for the specified stat.
	 * 
	 * @param stat the stat name.
	 * @param bonusID the identifier for the bonus.
	 * @param operation the arithmetic operation to apply.
	 * @param attributeValue the attribute value.
	 * @param endOfTheList whether to add the bonus at the end of the list.
	 */
	addBonusAttribute(stat: string, bonusID: string, operation: string, attributeValue: number, endOfTheList: boolean): void;

	/**
	 * Increases an existing bonus attribute for the specified stat.
	 * 
	 * @param stat the stat name.
	 * @param bonusID the identifier for the bonus.
	 * @param operation the arithmetic operation.
	 * @param attributeValue the value to add.
	 */
	addToBonusAttribute(stat: string, bonusID: string, operation: string, attributeValue: number): void;

	/**
	 * Sets a bonus attribute for the specified stat.
	 * 
	 * @param stat the stat name.
	 * @param bonusID the identifier for the bonus.
	 * @param operation the arithmetic operation.
	 * @param attributeValue the value to set.
	 */
	setBonusAttribute(stat: string, bonusID: string, operation: string, attributeValue: number): void;

	/**
	 * Retrieves a bonus attribute for the specified stat.
	 * 
	 * @param stat the stat name.
	 * @param bonusID the identifier for the bonus.
	 */
	getBonusAttribute(stat: string, bonusID: string): void;

	/**
	 * Removes the bonus attribute with the given identifier for the specified stat.
	 * 
	 * @param stat the stat name.
	 * @param bonusID the bonus identifier.
	 */
	removeBonusAttribute(stat: string, bonusID: string): void;

	/**
	 * Clears all bonus attributes for the specified stat.
	 * 
	 * @param stat the stat name.
	 */
	clearBonusAttribute(stat: string): void;

	/**
	 * Retrieves a bonus attribute string based on an action.
	 * 
	 * @param action the action (get, remove, or clear).
	 * @param stat the stat name.
	 * @param bonusID the bonus identifier.
	 * @return the bonus attribute string.
	 */
	bonusAttribute(action: string, stat: string, bonusID: string): string;

	/**
	 * Retrieves a bonus attribute string with full parameters.
	 * 
	 * @param action the action (add, addto, set, get, remove, or clear).
	 * @param stat the stat name.
	 * @param bonusID the bonus identifier.
	 * @param operation the arithmetic operation.
	 * @param attributeValue the attribute value.
	 * @param endOfTheList whether to add at the end of the list.
	 * @return the bonus attribute string.
	 */
	bonusAttribute(action: string, stat: string, bonusID: string, operation: string, attributeValue: number, endOfTheList: boolean): string;

	/**
	 * Sets the release state.
	 * 
	 * @param release the release value.
	 */
	setRelease(release: number): void;

	/**
	 * Returns the current release state.
	 * 
	 * @return the release value.
	 */
	getRelease(): number;

	/**
	 * Sets the body value. Also HP.
	 * 
	 * @param body the body value.
	 */
	setBody(body: number): void;

	/**
	 * Returns the body value. Also HP.
	 * 
	 * @return the body.
	 */
	getBody(): number;

	/**
	 * Sets the HP value.
	 * 
	 * @param hp the HP value.
	 */
	setHP(hp: number): void;

	/**
	 * Returns the HP value.
	 * 
	 * @return the HP.
	 */
	getHP(): number;

	/**
	 * Sets the stamina value.
	 * 
	 * @param stamina the stamina value.
	 */
	setStamina(stamina: number): void;

	/**
	 * Returns the stamina value.
	 * 
	 * @return the stamina.
	 */
	getStamina(): number;

	/**
	 * Sets the Ki value.
	 * 
	 * @param ki Ki value.
	 */
	setKi(ki: number): void;

	/**
	 * Returns the Ki value.
	 * 
	 * @return Ki of Player.
	 */
	getKi(): number;

	/**
	 * Sets the TP value.
	 * 
	 * @param tp Set TP Amount
	 */
	setTP(tp: number): void;

	/**
	 * Returns the TP value.
	 * 
	 * @return Player TP Amount
	 */
	getTP(): number;

	/**
	 * Sets the gravity for the player.
	 * 
	 * @param gravity the gravity value.
	 */
	setGravity(gravity: number): void;

	/**
	 * Returns the current gravity value.
	 * 
	 * @return the gravity.
	 */
	getGravity(): number;

	/**
	 * Checks if the player is blocking.
	 * 
	 * @return true if blocking; false otherwise.
	 */
	isBlocking(): boolean;

	/**
	 * Sets the hair code used to define the player's hairstyle.
	 * 
	 * @param hairCode the hair code string.
	 */
	setHairCode(hairCode: string): void;

	/**
	 * Returns the player's hair code.
	 * 
	 * @return the hair code string.
	 */
	getHairCode(): string;

	/**
	 * Sets the extra code used for additional customization.
	 * 
	 * @param extraCode the extra code string.
	 */
	setExtraCode(extraCode: string): void;

	/**
	 * Returns the player's extra code.
	 * 
	 * @return the extra code string.
	 */
	getExtraCode(): string;

	/**
	 * Sets an item in the DBC extra inventory slot.
	 * <p>
	 * Slot definitions:
	 * <ul>
	 *   <li>0 - Weight</li>
	 *   <li>1 - Body</li>
	 *   <li>2 - Head</li>
	 *   <li>3 - 4th Vanity Slot Down to the left</li>
	 *   <li>4 - 3rd Vanity Slot Down to the left</li>
	 *   <li>5 - 2nd Vanity Slot Down to the left</li>
	 *   <li>6 - 1st Vanity Slot Down to the left</li>
	 *   <li>7 - 4th Vanity Slot Down to the right</li>
	 *   <li>8 - 3rd Vanity Slot Down to the right</li>
	 *   <li>9 - 2nd Vanity Slot Down to the right</li>
	 *   <li>10 - 1st Vanity Slot Down to the right</li>
	 * </ul>
	 * 
	 * @param itemStack the item to set (or null to remove).
	 * @param slot the slot index.
	 * @param vanity whether the slot is in the vanity inventory.
	 */
	setItem(itemStack: IItemStack, slot: number, vanity: boolean): void;

	/**
	 * Retrieves the item from the specified DBC inventory slot.
	 * 
	 * @param slot the slot index.
	 * @param vanity whether the slot is in the vanity inventory.
	 * @return the item stack, or null if empty.
	 */
	getItem(slot: number, vanity: boolean): IItemStack;

	/**
	 * Returns the entire DBC extra inventory.
	 * 
	 * @return an array of item stacks.
	 */
	getInventory(): IItemStack[];

	/**
	 * Sets the player's form.
	 * 
	 * @param form the form value.
	 */
	setForm(form: number): void;

	/**
	 * Returns the player's current form.
	 * 
	 * @return the form value.
	 */
	getForm(): number;

	/**
	 * Sets the player's secondary form.
	 * 
	 * @param form2 the secondary form value.
	 */
	setForm2(form2: number): void;

	/**
	 * Returns the player's secondary form.
	 * 
	 * @return the secondary form value.
	 */
	getForm2(): number;

	/**
	 * Returns the mastery value for a specific racial form.
	 * 
	 * @param form the form index.
	 * @return the mastery value.
	 */
	getRacialFormMastery(form: number): number;

	/**
	 * Sets the mastery value for a specific racial form.
	 * 
	 * @param form the form index.
	 * @param value the new mastery value.
	 */
	setRacialFormMastery(form: number, value: number): void;

	/**
	 * Adds to the mastery value for a specific racial form.
	 * 
	 * @param form the form index.
	 * @param value the value to add.
	 */
	addRacialFormMastery(form: number, value: number): void;

	/**
	 * Returns the mastery value for a non-racial (other) form.
	 * 
	 * @param formName the name of the form.
	 * @return the mastery value.
	 */
	getOtherFormMastery(formName: string): number;

	/**
	 * Sets the mastery value for a non-racial (other) form.
	 * 
	 * @param formName the name of the form.
	 * @param value the new mastery value.
	 */
	setOtherFormMastery(formName: string, value: number): void;

	/**
	 * Adds to the mastery value for a non-racial (other) form.
	 * 
	 * @param formName the name of the form.
	 * @param value the value to add.
	 */
	addOtherFormMastery(formName: string, value: number): void;

	/**
	 * Sets the player's power points.
	 * 
	 * @param points the power points.
	 */
	setPowerPoints(points: number): void;

	/**
	 * Returns the player's power points.
	 * 
	 * @return the power points.
	 */
	getPowerPoints(): number;

	/**
	 * Sets the player's aura color.
	 * 
	 * @param color the aura color.
	 */
	setAuraColor(color: number): void;

	/**
	 * Returns the player's aura color.
	 * 
	 * @return the aura color.
	 */
	getAuraColor(): number;

	/**
	 * Sets the player's form level.
	 * 
	 * @param level the form level.
	 */
	setFormLevel(level: number): void;

	/**
	 * Returns the player's form level.
	 * 
	 * @return the form level.
	 */
	getFormLevel(): number;

	/**
	 * Sets the player's skills.
	 * 
	 * @param skills a string representing the player's skills.
	 */
	setSkills(skills: string): void;

	/**
	 * Returns the player's skills.
	 * 
	 * @return a string representing the player's skills.
	 */
	getSkills(): string;

	/**
	 * Sets the player's status effects.
	 * 
	 * @param statusEffects a string representing status effects.
	 */
	setJRMCSE(statusEffects: string): void;

	/**
	 * Returns the player's status effects.
	 * 
	 * @return a string representing the player's status effects.
	 */
	getJRMCSE(): string;

	/**
	 * Sets the player's race.
	 * 
	 * @param race the race value.
	 */
	setRace(race: number): void;

	/**
	 * Returns the player's race.
	 * 
	 * @return the race value.
	 */
	getRace(): number;

	/**
	 * Sets the player's DBC class.
	 * 
	 * @param dbcClass the DBC class value.
	 */
	setDBCClass(dbcClass: number): void;

	/**
	 * Returns the player's DBC class.
	 * 
	 * @return the DBC class.
	 */
	getDBCClass(): number;

	/**
	 * Sets the player's power type.
	 * 
	 * @param powerType the power type.
	 */
	setPowerType(powerType: number): void;

	/**
	 * Returns the player's power type.
	 * 
	 * @return the power type.
	 */
	getPowerType(): number;

	/**
	 * Returns the player's kill count for a given type.
	 * 
	 * @param type the kill count type ("evil", "good", "neutral", or "all").
	 * @return the kill count.
	 */
	getKillCount(type: string): number;

	/**
	 * Returns the fusion string for the player.
	 * 
	 * @return the fusion string.
	 */
	getFusionString(): string;

}

