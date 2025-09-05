import { ICustomGui } from "./../gui/ICustomGui";
import { IItemStack } from "./../item/IItemStack";


export interface ICustomGuiEvent extends IPlayerEvent {
	getGui(): ICustomGui;

	getId(): number;

	export interface ButtonEvent extends ICustomGuiEvent {
	}
	export interface UnfocusedEvent extends ICustomGuiEvent {
	}
	export interface CloseEvent extends ICustomGuiEvent {
	}
	export interface ScrollEvent extends ICustomGuiEvent {
		getSelection(): string[];

		doubleClick(): boolean;

		getScrollIndex(): number;

	}
	export interface SlotEvent extends ICustomGuiEvent {
		getStack(): IItemStack;

	}
	export interface SlotClickEvent extends ICustomGuiEvent {
		getStack(): IItemStack;

		getDragType(): number;

	}
}
}
