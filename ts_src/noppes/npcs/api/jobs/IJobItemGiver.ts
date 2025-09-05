import { IPlayer } from "./../entity/IPlayer";
import { IJob } from "./IJob";
import { IItemStack } from "./../item/IItemStack";
import { IAvailability } from "./../handler/data/IAvailability";


export interface IJobItemGiver extends IJob {
	setCooldown(cooldown: number): void;

	setCooldownType(type: number): void;

	getCooldownType(): number;

	setGivingMethod(method: number): void;

	getGivingMethod(): number;

	setLines(lines: string[]): void;

	getLines(): string[];

	setAvailability(availability: IAvailability): void;

	getAvailability(): IAvailability;

	setItem(slot: number, item: IItemStack): void;

	getItems(): IItemStack[];

	giveItems(player: IPlayer): boolean;

	canPlayerInteract(player: IPlayer): boolean;

}

