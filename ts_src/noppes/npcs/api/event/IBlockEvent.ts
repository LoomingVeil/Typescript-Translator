import { IPlayer } from "./../entity/IPlayer";
import { IBlock } from "./../IBlock";
import { IEntity } from "./../entity/IEntity";
import { IPos } from "./../IPos";


export interface IBlockEvent extends ICustomNPCsEvent {
	getBlock(): IBlock;

	export interface EntityFallenUponEvent extends IBlockEvent {
		getEntity(): IEntity;

		getDistanceFallen(): number;

	}
	export interface InteractEvent extends IBlockEvent {
		getPlayer(): IPlayer;

		getHitX(): number;

		getHitY(): number;

		getHitZ(): number;

		getSide(): number;

	}
	export interface RedstoneEvent extends IBlockEvent {
		getPrevPower(): number;

		getPower(): number;

	}
	export interface BreakEvent extends IBlockEvent {
	}
	export interface ExplodedEvent extends IBlockEvent {
	}
	export interface RainFillEvent extends IBlockEvent {
	}
	export interface NeighborChangedEvent extends IBlockEvent {
		getChangedPos(): IPos;

	}
	export interface InitEvent extends IBlockEvent {
	}
	export interface UpdateEvent extends IBlockEvent {
	}
	export interface ClickedEvent extends IBlockEvent {
		getPlayer(): IPlayer;

	}
	export interface HarvestedEvent extends IBlockEvent {
		getPlayer(): IPlayer;

	}
	export interface CollidedEvent extends IBlockEvent {
		getEntity(): IEntity;

	}
	export interface TimerEvent extends IBlockEvent {
		getId(): number;

	}
}
}
