
/**
 * Events fired for scripted blocks, including interactions, redstone, and entity collisions.
 */
export interface IBlockEvent extends ICustomNPCsEvent {
	/**
	 * @return the scripted block associated with this event.
	 */
	getBlock(): IBlock;
}

/**
 * @hookName fallenUpon
 */
export interface EntityFallenUponEvent extends IBlockEvent {
	getEntity(): IEntity;

	getDistanceFallen(): number;

	/** Sets whether this event is canceled. */
	setCanceled(status: boolean): void;

	/** Sets whether this event is cancelled. */
	setCancelled(status: boolean): void;
}

export interface InteractEvent extends IBlockEvent {
	getPlayer(): IPlayer;

	getHitX(): number;

	getHitY(): number;

	getHitZ(): number;

	getSide(): number;

	/** Sets whether this event is canceled. */
	setCanceled(status: boolean): void;

	/** Sets whether this event is cancelled. */
	setCancelled(status: boolean): void;
}

export interface RedstoneEvent extends IBlockEvent {
	getPrevPower(): number;

	getPower(): number;
}

/**
 * @hookName broken
 */
export interface BreakEvent extends IBlockEvent {}

export interface ExplodedEvent extends IBlockEvent {
	/** Sets whether this event is canceled. */
	setCanceled(status: boolean): void;

	/** Sets whether this event is cancelled. */
	setCancelled(status: boolean): void;
}

/**
 * @hookName rainFilled
 */
export interface RainFillEvent extends IBlockEvent {}

export interface NeighborChangedEvent extends IBlockEvent {
	getChangedPos(): IPos;
}

export interface InitEvent extends IBlockEvent {}

/**
 * @hookName tick
 */
export interface UpdateEvent extends IBlockEvent {}

export interface ClickedEvent extends IBlockEvent {
	getPlayer(): IPlayer;
}

export interface HarvestedEvent extends IBlockEvent {
	getPlayer(): IPlayer;

	/** Sets whether this event is canceled. */
	setCanceled(status: boolean): void;

	/** Sets whether this event is cancelled. */
	setCancelled(status: boolean): void;
}

export interface CollidedEvent extends IBlockEvent {
	getEntity(): IEntity;
}

export interface TimerEvent extends IBlockEvent {
	getId(): number;
}

