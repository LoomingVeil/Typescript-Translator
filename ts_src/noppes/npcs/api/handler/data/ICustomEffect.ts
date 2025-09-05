import { IObject } from "./../../../../../IObject";


export interface ICustomEffect extends IObject {
	getID(): number;

	getName(): string;

	setMenuName(name: string): void;

	getMenuName(): string;

	setName(name: string): void;

	getIcon(): string;

	setIcon(icon: string): void;

	getEveryXTick(): number;

	setEveryXTick(everyXTick: number): void;

	getIconX(): number;

	setIconX(iconX: number): void;

	getIconY(): number;

	setIconY(iconY: number): void;

	getWidth(): number;

	setWidth(width: number): void;

	getHeight(): number;

	setHeight(height: number): void;

	isLossOnDeath(): boolean;

	setLossOnDeath(lossOnDeath: boolean): void;

	save(): ICustomEffect;

	setID(id: number): void;

	/**
	 * Utilized by DBC Addon or other Addons to tell
	 * which map of Effects to Match to.
	 * Index: 0 - CNPC+
	 * Index: 1 - DBC Addon
	 */
	getIndex(): number;

}
}
