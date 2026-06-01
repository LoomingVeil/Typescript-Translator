
/**
 * Manages skin overlays applied to an entity or player.
 * Overlays are indexed by ID and rendered on top of the base skin.
 */
export interface IOverlayHandler extends IObject {
	/**
	 * Adds or replaces an overlay at the given ID.
	 * 
	 * @param id the overlay ID.
	 * @param overlay the skin overlay to add.
	 */
	add(id: number, overlay: ISkinOverlay): void;

	/**
	 * Returns the overlay at the given ID.
	 * 
	 * @param id the overlay ID.
	 * @return the skin overlay, or null if not found.
	 */
	get(id: number): ISkinOverlay;

	/**
	 * Checks whether an overlay exists at the given ID.
	 * 
	 * @param id the overlay ID.
	 * @return true if an overlay exists; false otherwise.
	 */
	has(id: number): boolean;

	/**
	 * Removes the overlay at the given ID.
	 * 
	 * @param id the overlay ID.
	 * @return true if an overlay was removed; false otherwise.
	 */
	remove(id: number): boolean;

	/**
	 * Returns the number of active overlays.
	 * 
	 * @return the overlay count.
	 */
	size(): number;

	/**
	 * Removes all overlays.
	 */
	clear(): void;
}

