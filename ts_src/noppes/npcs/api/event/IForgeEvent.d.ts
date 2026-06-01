
/**
 * Wrapper events for Forge events, allowing scripts to listen for native Forge events.
 */
export interface IForgeEvent extends ICustomNPCsEvent {
	/**
	 * @return the underlying Forge event.
	 */
	getEvent(): Event;
}

/**
 * Fired for Forge world events.
 * 
 * @hookName forgeWorld
 */
export interface WorldEvent extends IForgeEvent {
	/**
	 * @return the world associated with this event.
	 */
	getWorld(): IWorld;
}

/**
 * Fired for Forge entity events.
 * 
 * @hookName forgeEntity
 */
export interface EntityEvent extends IForgeEvent {
	/**
	 * @return the entity associated with this event.
	 */
	getEntity(): IEntity;
}

/**
 * Fired during Forge initialization.
 * 
 * @hookName forgeInit
 */
export interface InitEvent extends IForgeEvent {}

