import { IObject } from "./../../../../../IObject";


export interface IMagicData extends IObject {
	/**
	 * @param id The ID of the Magic
	 */
	removeMagic(id: number): void;

	/**
	 * @param id The ID of the Magic
	 * @return If the Magic exists
	 */
	hasMagic(id: number): boolean;

	/**
	 * Clears the Magics
	 */
	clear(): void;

	/**
	 * @return If the Magics are empty
	 */
	isEmpty(): boolean;

	/**
	 * @param id The ID of the Magic
	 * @param damage The bonus damage for the Magic
	 * @param split The split of the Magic
	 */
	addMagic(id: number, damage: number, split: number): void;

	/**
	 * @param id The ID of the Magic
	 * @return The bonus damage for the Magic
	 */
	getMagicDamage(id: number): number;

	/**
	 * @param id The ID of the Magic
	 * @return The split of the Magic
	 */
	getMagicSplit(id: number): number;

}
}
