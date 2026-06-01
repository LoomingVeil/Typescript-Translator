
/**
 * Events fired for linked items when their version changes or when they are being built.
 */
export interface ILinkedItemEvent extends IItemEvent {}

/**
 * Fired when the linked item's version changes.
 * 
 * @hookName versionChanged
 */
export interface VersionChangeEvent extends IItemEvent {
	/**
	 * @return the new version number.
	 */
	getVersion(): number;

	/**
	 * @return the previous version number.
	 */
	getPreviousVersion(): number;
}

/**
 * Fired when the linked item is being built/constructed.
 * 
 * @hookName buildingItem
 */
export interface BuildEvent extends IItemEvent {}

