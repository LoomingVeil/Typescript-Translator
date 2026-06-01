
/**
 * Events fired when a player interacts with a custom GUI.
 */
export interface ICustomGuiEvent extends IPlayerEvent {
	/**
	 * @return the custom GUI associated with this event.
	 */
	getGui(): ICustomGui;

	/**
	 * @return the component ID that triggered this event.
	 */
	getId(): number;
}

/**
 * @hookName customGuiButton
 */
export interface ButtonEvent extends ICustomGuiEvent {}

/**
 * @hookName customGuiTextfield
 */
export interface UnfocusedEvent extends ICustomGuiEvent {}

/**
 * @hookName customGuiClosed
 */
export interface CloseEvent extends ICustomGuiEvent {}

/**
 * @hookName customGuiScroll
 */
export interface ScrollEvent extends ICustomGuiEvent {
	getSelection(): string[];

	doubleClick(): boolean;

	getScrollIndex(): number;
}

/**
 * @hookName customGuiSlot
 */
export interface SlotEvent extends ICustomGuiEvent {
	getStack(): IItemStack;
}

/**
 * @hookName customGuiSlotClicked
 */
export interface SlotClickEvent extends ICustomGuiEvent {
	getStack(): IItemStack;

	getDragType(): number;

	/** Sets whether this event is canceled. */
	setCanceled(status: boolean): void;

	/** Sets whether this event is cancelled. */
	setCancelled(status: boolean): void;
}

