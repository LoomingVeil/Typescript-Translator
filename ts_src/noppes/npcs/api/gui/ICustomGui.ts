import { IPlayer } from "./../entity/IPlayer";
import { ITextField } from "./ITextField";
import { IObject } from "./../../../../IObject";
import { ICustomGuiComponent } from "./ICustomGuiComponent";
import { ILabel } from "./ILabel";
import { IScroll } from "./IScroll";
import { ITexturedRect } from "./ITexturedRect";
import { ILine } from "./../handler/data/ILine";
import { IButton } from "./IButton";
import { IItemStack } from "./../item/IItemStack";
import { IItemSlot } from "./IItemSlot";

import { NBTTagCompound } from "./../../../../missingTypes";
import { List } from "./../../../../missingTypes";

/**
 * Represents a custom graphical user interface (GUI) that can contain various components
 * such as buttons, labels, text fields, item slots, etc.
 */
export interface ICustomGui extends IObject {
	/**
	 * Returns the unique ID of the GUI.
	 * 
	 * @return the GUI ID.
	 */
	getID(): number;

	/**
	 * Returns the width of the GUI.
	 * 
	 * @return the width in pixels.
	 */
	getWidth(): number;

	/**
	 * Returns the height of the GUI.
	 * 
	 * @return the height in pixels.
	 */
	getHeight(): number;

	/**
	 * Returns a list of all components contained in this GUI.
	 * 
	 * @return the list of components.
	 */
	getComponents(): List;

	/**
	 * Clears all components from the GUI.
	 */
	clear(): void;

	/**
	 * Returns a list of item slot components in this GUI.
	 * 
	 * @return the list of item slots.
	 */
	getSlots(): List;

	/**
	 * Sets the size of the GUI.
	 * 
	 * @param width the new width.
	 * @param height the new height.
	 */
	setSize(width: number, height: number): void;

	/**
	 * Specifies whether the GUI pauses the game.
	 * 
	 * @param pauseGame true to pause the game.
	 */
	setDoesPauseGame(pauseGame: boolean): void;

	/**
	 * Checks if the GUI pauses the game.
	 * 
	 * @return true if it pauses the game; false otherwise.
	 */
	doesPauseGame(): boolean;

	/**
	 * Sets the background texture resource location for the GUI.
	 * 
	 * @param resourceLocation the texture resource location.
	 */
	setBackgroundTexture(resourceLocation: string): void;

	/**
	 * Returns the background texture resource location.
	 * 
	 * @return the texture as a string.
	 */
	getBackgroundTexture(): string;

	/**
	 * Adds a button to the GUI.
	 * 
	 * @param id the component ID.
	 * @param text the button label.
	 * @param x the x position.
	 * @param y the y position.
	 * @return the created button.
	 */
	addButton(id: number, text: string, x: number, y: number): IButton;

	/**
	 * Adds a button to the GUI with a specified size.
	 * 
	 * @param id the component ID.
	 * @param text the button label.
	 * @param x the x position.
	 * @param y the y position.
	 * @param width the button width.
	 * @param height the button height.
	 * @return the created button.
	 */
	addButton(id: number, text: string, x: number, y: number, width: number, height: number): IButton;

	/**
	 * Adds a textured button to the GUI.
	 * 
	 * @param id the component ID.
	 * @param text the button label.
	 * @param x the x position.
	 * @param y the y position.
	 * @param width the button width.
	 * @param height the button height.
	 * @param texture the texture resource location.
	 * @return the created button.
	 */
	addTexturedButton(id: number, text: string, x: number, y: number, width: number, height: number, texture: string): IButton;

	/**
	 * Adds a textured button with texture offset.
	 * 
	 * @param id the component ID.
	 * @param text the button label.
	 * @param x the x position.
	 * @param y the y position.
	 * @param width the button width.
	 * @param height the button height.
	 * @param texture the texture resource location.
	 * @param textureX the x offset in the texture.
	 * @param textureY the y offset in the texture.
	 * @return the created button.
	 */
	addTexturedButton(id: number, text: string, x: number, y: number, width: number, height: number, texture: string, textureX: number, textureY: number): IButton;

	/**
	 * Adds a label component to the GUI.
	 * 
	 * @param id the component ID.
	 * @param text the label text.
	 * @param x the x position.
	 * @param y the y position.
	 * @param width the width.
	 * @param height the height.
	 * @return the created label.
	 */
	addLabel(id: number, text: string, x: number, y: number, width: number, height: number): ILabel;

	/**
	 * Adds a label component with a specified text color.
	 * 
	 * @param id the component ID.
	 * @param text the label text.
	 * @param x the x position.
	 * @param y the y position.
	 * @param width the width.
	 * @param height the height.
	 * @param color the text color.
	 * @return the created label.
	 */
	addLabel(id: number, text: string, x: number, y: number, width: number, height: number, color: number): ILabel;

	/**
	 * Adds a text field component to the GUI.
	 * 
	 * @param id the component ID.
	 * @param x the x position.
	 * @param y the y position.
	 * @param width the width.
	 * @param height the height.
	 * @return the created text field.
	 */
	addTextField(id: number, x: number, y: number, width: number, height: number): ITextField;

	/**
	 * Adds a textured rectangle component to the GUI.
	 * 
	 * @param id the component ID.
	 * @param texture the texture resource location.
	 * @param x the x position.
	 * @param y the y position.
	 * @param width the width.
	 * @param height the height.
	 * @return the created textured rectangle.
	 */
	addTexturedRect(id: number, texture: string, x: number, y: number, width: number, height: number): ITexturedRect;

	/**
	 * Adds a textured rectangle component with texture offset.
	 * 
	 * @param id the component ID.
	 * @param texture the texture resource location.
	 * @param x the x position.
	 * @param y the y position.
	 * @param width the width.
	 * @param height the height.
	 * @param textureX the x offset within the texture.
	 * @param textureY the y offset within the texture.
	 * @return the created textured rectangle.
	 */
	addTexturedRect(id: number, texture: string, x: number, y: number, width: number, height: number, textureX: number, textureY: number): ITexturedRect;

	/**
	 * Adds an item slot component to the GUI.
	 * 
	 * @param id the component ID.
	 * @param x the x position.
	 * @param y the y position.
	 * @return the created item slot.
	 */
	addItemSlot(id: number, x: number, y: number): IItemSlot;

	/**
	 * Adds an item slot component with an initial item stack.
	 * 
	 * @param id the component ID.
	 * @param x the x position.
	 * @param y the y position.
	 * @param itemStack the initial item.
	 * @return the created item slot.
	 */
	addItemSlot(id: number, x: number, y: number, itemStack: IItemStack): IItemSlot;

	/**
	 * @deprecated Use addItemSlot(int, int, IItemStack) with an ID instead.
	 */
	addItemSlot(x: number, y: number): IItemSlot;

	/**
	 * @deprecated Use addItemSlot(int, int, IItemStack) with an ID instead.
	 */
	addItemSlot(x: number, y: number, itemStack: IItemStack): IItemSlot;

	/**
	 * Adds a scroll component to the GUI.
	 * 
	 * @param id the component ID.
	 * @param x the x position.
	 * @param y the y position.
	 * @param width the width.
	 * @param height the height.
	 * @param list the list of strings to display.
	 * @return the created scroll component.
	 */
	addScroll(id: number, x: number, y: number, width: number, height: number, list: string[]): IScroll;

	/**
	 * Adds a line component to the GUI.
	 * 
	 * @param id the component ID.
	 * @param x1 the start x position.
	 * @param y1 the start y position.
	 * @param x2 the end x position.
	 * @param y2 the end y position.
	 * @param color the line color.
	 * @param thickness the line thickness.
	 * @return the created line component.
	 */
	addLine(id: number, x1: number, y1: number, x2: number, y2: number, color: number, thickness: number): ILine;

	/**
	 * Adds a line component with default thickness.
	 * 
	 * @param id the component ID.
	 * @param x1 the start x position.
	 * @param y1 the start y position.
	 * @param x2 the end x position.
	 * @param y2 the end y position.
	 * @return the created line component.
	 */
	addLine(id: number, x1: number, y1: number, x2: number, y2: number): ILine;

	/**
	 * Displays the player's inventory at the specified position.
	 * 
	 * @param x the x position.
	 * @param y the y position.
	 */
	showPlayerInventory(x: number, y: number): void;

	/**
	 * Retrieves the GUI component with the given ID.
	 * 
	 * @param id the component ID.
	 * @return the component.
	 */
	getComponent(id: number): ICustomGuiComponent;

	/**
	 * Removes the GUI component with the specified ID.
	 * 
	 * @param id the component ID.
	 */
	removeComponent(id: number): void;

	/**
	 * Updates the specified GUI component.
	 * 
	 * @param component the component to update.
	 */
	updateComponent(component: ICustomGuiComponent): void;

	/**
	 * Sends an update of the GUI to the given player.
	 * 
	 * @param player the player to update.
	 */
	update(player: IPlayer): void;

	/**
	 * @return true if the player inventory is shown.
	 */
	getShowPlayerInv(): boolean;

	/**
	 * @return the x position where the player inventory is displayed.
	 */
	getPlayerInvX(): number;

	/**
	 * @return the y position where the player inventory is displayed.
	 */
	getPlayerInvY(): number;

	/**
	 * Recreates the GUI from NBT data.
	 * 
	 * @param tag the NBT tag.
	 * @return this GUI.
	 */
	fromNBT(tag: NBTTagCompound): ICustomGui;

	/**
	 * Serializes the GUI to an NBT tag.
	 * 
	 * @return the NBT data.
	 */
	toNBT(): NBTTagCompound;

}
}
