
/**
 * Events fired for scripted/customizable items during their lifecycle and interactions.
 */
export interface IItemEvent extends ICustomNPCsEvent {
	/**
	 * @return the customizable item associated with this event.
	 */
	getItem(): IItemCustom;
}

/**
 * Fired when the item is initialized.
 * 
 * @hookName init
 */
export interface InitEvent extends IItemEvent {}

/**
 * Fired each tick while the item exists in an entity's inventory.
 * 
 * @hookName tick
 */
export interface UpdateEvent extends IItemEvent {
	/**
	 * @return the entity holding the item.
	 */
	getEntity(): IEntity;
}

/**
 * Fired when the item is tossed/dropped. Cancelable.
 * 
 * @hookName tossed
 */
export interface TossedEvent extends IItemEvent {
	/**
	 * @return the dropped item entity.
	 */
	getEntity(): IEntity;

	/**
	 * @return the player who dropped the item.
	 */
	getPlayer(): IPlayer;

	/** Sets whether this event is canceled. */
	setCanceled(status: boolean): void;

	/** Sets whether this event is cancelled. */
	setCancelled(status: boolean): void;
}

/**
 * Fired when the item is picked up.
 * 
 * @hookName pickedUp
 */
export interface PickedUpEvent extends IItemEvent {
	/**
	 * @return the player who picked up the item.
	 */
	getPlayer(): IPlayer;
}

/**
 * Fired when the item entity spawns in the world. Cancelable.
 * 
 * @hookName spawn
 */
export interface SpawnEvent extends IItemEvent {
	/**
	 * @return the spawned item entity.
	 */
	getEntity(): IEntity;

	/** Sets whether this event is canceled. */
	setCanceled(status: boolean): void;

	/** Sets whether this event is cancelled. */
	setCancelled(status: boolean): void;
}

/**
 * Fired when the item is used to interact with an entity. Cancelable.
 * 
 * @hookName interact
 */
export interface InteractEvent extends IItemEvent {
	/**
	 * @return the interaction type.
	 */
	getType(): number;

	/**
	 * @return the target entity.
	 */
	getTarget(): IEntity;

	/**
	 * @return the player performing the interaction.
	 */
	getPlayer(): IPlayer;

	/** Sets whether this event is canceled. */
	setCanceled(status: boolean): void;

	/** Sets whether this event is cancelled. */
	setCancelled(status: boolean): void;
}

/**
 * Fired when the item is right-clicked. Cancelable.
 * 
 * @hookName rightClick
 */
export interface RightClickEvent extends IItemEvent {
	/**
	 * @return the click type.
	 */
	getType(): number;

	/**
	 * @return the target (entity or block).
	 */
	getTarget(): any;

	/**
	 * @return the player who right-clicked.
	 */
	getPlayer(): IPlayer;

	/** Sets whether this event is canceled. */
	setCanceled(status: boolean): void;

	/** Sets whether this event is cancelled. */
	setCancelled(status: boolean): void;
}

/**
 * Fired when the item is used to attack an entity. Cancelable.
 * 
 * @hookName attack
 */
export interface AttackEvent extends IItemEvent {
	/**
	 * @return the attack type.
	 */
	getType(): number;

	/**
	 * @return the entity being attacked.
	 */
	getTarget(): IEntity;

	/**
	 * @return the entity swinging the item.
	 */
	getSwingingEntity(): IEntity;

	/** Sets whether this event is canceled. */
	setCanceled(status: boolean): void;

	/** Sets whether this event is cancelled. */
	setCancelled(status: boolean): void;
}

/**
 * Fired when the player starts using the item (e.g., drawing a bow).
 * 
 * @hookName startItem
 */
export interface StartUsingItem extends IItemEvent {
	/**
	 * @return the player using the item.
	 */
	getPlayer(): IPlayer;

	/**
	 * @return the use duration in ticks.
	 */
	getDuration(): number;
}

/**
 * Fired each tick while the player is using the item.
 * 
 * @hookName usingItem
 */
export interface UsingItem extends IItemEvent {
	/**
	 * @return the player using the item.
	 */
	getPlayer(): IPlayer;

	/**
	 * @return the remaining use duration in ticks.
	 */
	getDuration(): number;
}

/**
 * Fired when the player stops using the item before completion.
 * 
 * @hookName stopItem
 */
export interface StopUsingItem extends IItemEvent {
	/**
	 * @return the player who stopped using the item.
	 */
	getPlayer(): IPlayer;

	/**
	 * @return the remaining use duration in ticks.
	 */
	getDuration(): number;
}

/**
 * Fired when the player finishes using the item (full duration).
 * 
 * @hookName finishItem
 */
export interface FinishUsingItem extends IItemEvent {
	/**
	 * @return the player who finished using the item.
	 */
	getPlayer(): IPlayer;

	/**
	 * @return the total use duration in ticks.
	 */
	getDuration(): number;
}

/**
 * Fired when the item breaks due to durability loss or consumption.
 * 
 * @hookName breakItem
 */
export interface BreakItem extends IItemEvent {
	/**
	 * @return the item stack that broke.
	 */
	getBrokenStack(): IItemStack;

	/**
	 * @return the player whose item broke.
	 */
	getPlayer(): IPlayer;
}

/**
 * Fired when the item is repaired on an anvil.
 * 
 * @hookName repairItem
 */
export interface RepairItem extends IItemEvent {
	/**
	 * @return the left input item.
	 */
	getLeft(): IItemStack;

	/**
	 * @return the right input item (repair material).
	 */
	getRight(): IItemStack;

	/**
	 * @return the resulting output item.
	 */
	getOutput(): IItemStack;

	/**
	 * @return the chance the anvil breaks after this repair.
	 */
	getAnvilBreakChance(): number;
}

