import { IWorld } from "./../IWorld";
import { IDBCPlayer } from "./IDBCPlayer";
import { ITimers } from "./../ITimers";
import { ISound } from "./../handler/data/ISound";
import { IScreenSize } from "./../IScreenSize";
import { IDialog } from "./../handler/data/IDialog";
import { IMagicData } from "./../handler/data/IMagicData";
import { INbt } from "./../INbt";
import { IPixelmonPlayerData } from "./../IPixelmonPlayerData";
import { IContainer } from "./../IContainer";
import { ICustomOverlay } from "./../overlay/ICustomOverlay";
import { IBlock } from "./../IBlock";
import { IAnimationData } from "./../handler/data/IAnimationData";
import { IQuest } from "./../handler/data/IQuest";
import { IEntity } from "./IEntity";
import { IPos } from "./../IPos";
import { ICustomGui } from "./../gui/ICustomGui";
import { IOverlayHandler } from "./../handler/IOverlayHandler";
import { IEntityLivingBase } from "./IEntityLivingBase";
import { IItemStack } from "./../item/IItemStack";
import { IPlayerData } from "./../handler/IPlayerData";
import { IAnimatable } from "./IAnimatable";
import { IPlayerAttributes } from "./../handler/data/IPlayerAttributes";

import { Entity } from "./../../../../missingTypes";
import { InventoryPlayer } from "./../../../../missingTypes";
import { InventoryEnderChest } from "./../../../../missingTypes";

/**
 * Represents a player in the game with methods for managing dialogs, quests,
 * inventory, sound, and more.
 */
export interface IPlayer extends IEntityLivingBase, IAnimatable {
	/**
	 * @return Returns the displayed name of the player
	 */
	getDisplayName(): string;

	/**
	 * @return Returns the player's name
	 */
	getName(): string;

	/**
	 * Kicks the player from the server with the specified reason.
	 * 
	 * @param reason The reason for kicking the player.
	 */
	kick(reason: string): void;

	/**
	 * Teleports the player to the specified coordinates in the current dimension.
	 * 
	 * @param x The x-coordinate.
	 * @param y The y-coordinate.
	 * @param z The z-coordinate.
	 */
	setPosition(x: number, y: number, z: number): void;

	/**
	 * Teleports the player to the coordinates specified by the given position.
	 * 
	 * @param pos The position object containing coordinates.
	 */
	setPosition(pos: IPos): void;

	/**
	 * Teleports the player to the specified coordinates in the given dimension.
	 * 
	 * @param x The x-coordinate.
	 * @param y The y-coordinate.
	 * @param z The z-coordinate.
	 * @param dimensionId The dimension ID.
	 */
	setPosition(x: number, y: number, z: number, dimensionId: number): void;

	/**
	 * Teleports the player to the position in the specified dimension.
	 * 
	 * @param pos The position object containing coordinates.
	 * @param dimensionId The dimension ID.
	 */
	setPosition(pos: IPos, dimensionId: number): void;

	/**
	 * Teleports the player to the specified coordinates in the dimension of the provided world.
	 * 
	 * @param x The x-coordinate.
	 * @param y The y-coordinate.
	 * @param z The z-coordinate.
	 * @param world The world whose dimension will be used.
	 */
	setPosition(x: number, y: number, z: number, world: IWorld): void;

	/**
	 * Teleports the player to the position specified by the given position in the dimension of the provided world.
	 * 
	 * @param pos The position object containing coordinates.
	 * @param world The world whose dimension will be used.
	 */
	setPosition(pos: IPos, world: IWorld): void;

	/**
	 * Changes the player's dimension by teleporting them to their current position in the specified dimension.
	 * 
	 * @param dimension The dimension ID to move the player to.
	 */
	setDimension(dimension: number): void;

	/**
	 * @return Returns the player's current hunger level.
	 */
	getHunger(): number;

	/**
	 * Sets the player's hunger level.
	 * 
	 * @param hunger The new hunger level.
	 */
	setHunger(hunger: number): void;

	/**
	 * @return Returns the player's current saturation level.
	 */
	getSaturation(): number;

	/**
	 * Sets the player's saturation level.
	 * 
	 * @param saturation The new saturation level.
	 */
	setSaturation(saturation: number): void;

	/**
	 * Displays the specified dialog to the player.
	 * 
	 * @param dialog The dialog to display.
	 */
	showDialog(dialog: IDialog): void;

	/**
	 * Checks whether the player has read the specified dialog.
	 * 
	 * @param dialog The dialog to check.
	 * @return True if the dialog has been read, false otherwise.
	 */
	hasReadDialog(dialog: IDialog): boolean;

	/**
	 * Marks the specified dialog as read for the player.
	 * 
	 * @param dialog The dialog to mark as read.
	 */
	readDialog(dialog: IDialog): void;

	/**
	 * Marks the specified dialog as unread for the player.
	 * 
	 * @param dialog The dialog to mark as unread.
	 */
	unreadDialog(dialog: IDialog): void;

	/**
	 * Displays the dialog with the specified ID to the player.
	 * 
	 * @param id The dialog ID.
	 */
	showDialog(id: number): void;

	/**
	 * Checks whether the player has read the dialog with the specified ID.
	 * 
	 * @param id The dialog ID.
	 * @return True if the dialog has been read, false otherwise.
	 */
	hasReadDialog(id: number): boolean;

	/**
	 * Marks the dialog with the specified ID as read for the player.
	 * 
	 * @param id The dialog ID.
	 */
	readDialog(id: number): void;

	/**
	 * Marks the dialog with the specified ID as unread for the player.
	 * 
	 * @param id The dialog ID.
	 */
	unreadDialog(id: number): void;

	/**
	 * Checks whether the player has finished the specified quest.
	 * 
	 * @param quest The quest to check.
	 * @return True if the quest has been finished, false otherwise.
	 */
	hasFinishedQuest(quest: IQuest): boolean;

	/**
	 * Checks whether the player has an active quest matching the specified quest.
	 * 
	 * @param quest The quest to check.
	 * @return True if the quest is active, false otherwise.
	 */
	hasActiveQuest(quest: IQuest): boolean;

	/**
	 * Add the quest from active quest list.
	 * 
	 * @param quest The quest.
	 */
	startQuest(quest: IQuest): void;

	/**
	 * Add the quest from finished quest list.
	 * 
	 * @param quest The quest.
	 */
	finishQuest(quest: IQuest): void;

	/**
	 * Removes the quest from active quest list.
	 * 
	 * @param quest The quest.
	 */
	stopQuest(quest: IQuest): void;

	/**
	 * Removes the quest from active and finished quest list.
	 * 
	 * @param quest The quest.
	 */
	removeQuest(quest: IQuest): void;

	/**
	 * Checks whether the player has finished the quest with the given ID.
	 * 
	 * @param id The quest ID.
	 * @return True if the quest has been finished, false otherwise.
	 */
	hasFinishedQuest(id: number): boolean;

	/**
	 * Checks whether the player has an active quest with the given ID.
	 * 
	 * @param id The quest ID.
	 * @return True if the quest is active, false otherwise.
	 */
	hasActiveQuest(id: number): boolean;

	/**
	 * @param id The quest ID.
	 */
	startQuest(id: number): void;

	/**
	 * @param id The quest ID.
	 */
	finishQuest(id: number): void;

	/**
	 * @param id The quest ID.
	 */
	stopQuest(id: number): void;

	/**
	 * @param id The quest ID.
	 */
	removeQuest(id: number): void;

	/**
	 * Returns an array of quests that the player has finished.
	 * 
	 * @return An array of finished quests.
	 */
	getFinishedQuests(): IQuest[];

	/**
	 * Returns the entity type identifier for the player.
	 * 
	 * @return The type as an integer.
	 */
	getType(): number;

	/**
	 * Checks if the player is of the specified entity type.
	 * 
	 * @param type The entity type to check.
	 * @return True if the player is of the specified type, false otherwise.
	 */
	typeOf(type: number): boolean;

	/**
	 * @param faction The faction id.
	 * @param points The points to increase. Use negative values to decrease.
	 */
	addFactionPoints(faction: number, points: number): void;

	/**
	 * @param faction The faction id.
	 * @param points The new point value for this faction.
	 */
	setFactionPoints(faction: number, points: number): void;

	/**
	 * @param faction The faction id.
	 * @return The current point total for the faction.
	 */
	getFactionPoints(faction: number): number;

	/**
	 * Sends a chat message to the player.
	 * 
	 * @param message The message you want to send. Compatible with formatting codes.
	 * @see <a href="https://static.wikia.nocookie.net/minecraft_gamepedia/images/7/7e/Minecraft_Formatting.gif/revision/latest/scale-to-width-down/200?cb=20200828001454">Minecraft formatting codes</a>
	 */
	sendMessage(message: string): void;

	/**
	 * @return Returns gamemode. 0: Survival, 1: Creative, 2: Adventure.
	 */
	getMode(): number;

	/**
	 * @param type The gamemode type. 0:SURVIVAL, 1:CREATIVE, 2:ADVENTURE.
	 */
	setMode(type: number): void;

	/**
	 * @since 1.7.10d
	 * @return Returns an IItemStack array of size 36 representing the player's inventory.
	 */
	getInventory(): IItemStack[];

	/**
	 * @param item The item to be checked.
	 * @param ignoreNBT Whether the item's NBT tags will be checked for equality.
	 * @param ignoreDamage Whether the item's damage will be checked for equality.
	 * @return The total count of the specified item in the player's inventory.
	 */
	inventoryItemCount(item: IItemStack, ignoreNBT: boolean, ignoreDamage: boolean): number;

	/**
	 * @since 1.7.10c
	 * @param id The item's name.
	 * @param damage The damage value.
	 * @param amount How many items will be removed.
	 * @return True if the items were removed successfully, false if the amount exceeds what the player has or the item doesn't exist.
	 */
	removeItem(id: string, damage: number, amount: number): boolean;

	/**
	 * @param item The item type to be removed.
	 * @param amount The number of items to remove.
	 * @param ignoreNBT Whether the item's NBT tags will be checked for equality.
	 * @param ignoreDamage Whether the item's damage will be checked for equality.
	 * @return True if the items were removed successfully, false if the removal amount exceeds the player's count.
	 */
	removeItem(item: IItemStack, amount: number, ignoreNBT: boolean, ignoreDamage: boolean): boolean;

	/**
	 * @param item The item to be removed from the player's inventory.
	 * @param ignoreNBT Whether the item's NBT tags will be checked for equality.
	 * @param ignoreDamage Whether the item's damage will be checked for equality.
	 * @return The number of item stacks that were removed.
	 */
	removeAllItems(item: IItemStack, ignoreNBT: boolean, ignoreDamage: boolean): number;

	/**
	 * @since 1.7.10c
	 * @param item The item to be added.
	 * @param amount The number of items to add.
	 * @return True if the item was given successfully, false otherwise.
	 */
	giveItem(item: IItemStack, amount: number): boolean;

	/**
	 * @since 1.7.10c
	 * @param id The item's name.
	 * @param damage The damage value.
	 * @param amount The number of items to add.
	 * @return True if the item was given successfully, false otherwise.
	 */
	giveItem(id: string, damage: number, amount: number): boolean;

	/**
	 * Same as the /spawnpoint command.
	 * 
	 * @param x The x-coordinate.
	 * @param y The y-coordinate.
	 * @param z The z-coordinate.
	 */
	setSpawnpoint(x: number, y: number, z: number): void;

	/**
	 * Sets the player's spawnpoint to the coordinates of the provided position.
	 * 
	 * @param pos The position containing the spawn coordinates.
	 */
	setSpawnpoint(pos: IPos): void;

	/**
	 * Resets the player's spawnpoint to the default spawn.
	 */
	resetSpawnpoint(): void;

	/**
	 * Sets the player's rotation.
	 * 
	 * @param rotationYaw The horizontal rotation (yaw).
	 * @param rotationPitch The vertical rotation (pitch).
	 */
	setRotation(rotationYaw: number, rotationPitch: number): void;

	/**
	 * Disables mouse input for the specified time and buttons for the player.
	 * 
	 * @param time The duration for which mouse input is disabled.
	 * @param buttonIds The IDs of the mouse buttons to disable.
	 */
	disableMouseInput(time: number, buttonIds: number): void;

	/**
	 * Stops the player from using the currently active item.
	 */
	stopUsingItem(): void;

	/**
	 * Clears the currently in-use item.
	 */
	clearItemInUse(): void;

	/**
	 * Clears the player's entire inventory, including main and armor slots.
	 */
	clearInventory(): void;

	/**
	 * Plays the specified sound at the given volume and pitch for the player.
	 * 
	 * @param name The sound name.
	 * @param volume The volume level.
	 * @param pitch The pitch level.
	 */
	playSound(name: string, volume: number, pitch: number): void;

	/**
	 * Plays the specified sound with an identifier for the player.
	 * 
	 * @param id The sound identifier.
	 * @param sound The sound to play.
	 */
	playSound(id: number, sound: ISound): void;

	/**
	 * Plays the specified sound for the player.
	 * 
	 * @param sound The sound to play.
	 */
	playSound(sound: ISound): void;

	/**
	 * Stops the sound with the given identifier for the player.
	 * 
	 * @param id The sound identifier.
	 */
	stopSound(id: number): void;

	/**
	 * Pauses all sounds currently playing for the player.
	 */
	pauseSounds(): void;

	/**
	 * Resumes paused sounds for the player.
	 */
	continueSounds(): void;

	/**
	 * Stops all sounds currently playing for the player.
	 */
	stopSounds(): void;

	/**
	 * Mounts the specified entity onto the player.
	 * 
	 * @param ridingEntity The entity to mount.
	 */
	mountEntity(ridingEntity: Entity): void;

	/**
	 * Drops one item from the player's inventory.
	 * 
	 * @param dropStack If true, drops the entire stack; otherwise, drops a single item.
	 * @return The dropped item as an IEntity.
	 */
	dropOneItem(dropStack: boolean): IEntity;

	/**
	 * Checks if the player can harvest the specified block.
	 * 
	 * @param block The block to check.
	 * @return True if the player can harvest the block, false otherwise.
	 */
	canHarvestBlock(block: IBlock): boolean;

	/**
	 * Interacts with the specified entity.
	 * 
	 * @param entity The entity to interact with.
	 * @return True if the interaction was successful, false otherwise.
	 */
	interactWith(entity: IEntity): boolean;

	/**
	 * @param achievement The achievement id. For a complete list see http://minecraft.wiki/w/Achievements
	 * @return Returns whether or not the player has this achievement.
	 */
	hasAchievement(achievement: string): boolean;

	/**
	 * @param permission Bukkit/Cauldron permission.
	 * @return Returns whether or not the player has the specified permission.
	 */
	hasBukkitPermission(permission: string): boolean;

	/**
	 * @since 1.7.10c
	 * @return Returns the player's experience level.
	 */
	getExpLevel(): number;

	/**
	 * @since 1.7.10c
	 * @param level The new experience level to set.
	 */
	setExpLevel(level: number): void;

	/**
	 * Requires Pixelmon to be installed.
	 * 
	 * @since 1.7.10d
	 * @return Returns the player's Pixelmon data, or null if Pixelmon is not enabled.
	 */
	getPixelmonData(): IPixelmonPlayerData;

	/**
	 * Returns the player's timers.
	 * 
	 * @return The timers associated with the player.
	 */
	getTimers(): ITimers;

	/**
	 * Updates the player's inventory on the client side.
	 */
	updatePlayerInventory(): void;

	/**
	 * Returns the player's DBC (database) data, if available.
	 * 
	 * @return The DBC data, or null if not applicable.
	 */
	getDBCPlayer(): IDBCPlayer;

	/**
	 * Checks if the player is currently blocking.
	 * 
	 * @return True if blocking, false otherwise.
	 */
	blocking(): boolean;

	/**
	 * Returns the player's associated data (quest, faction, timers, etc.).
	 * 
	 * @return The player's data.
	 */
	getData(): IPlayerData;

	/**
	 * Checks if the player is flagged as a scripting developer.
	 * 
	 * @return True if the player is a scripting developer, false otherwise.
	 */
	isScriptingDev(): boolean;

	/**
	 * Returns an array of quests that the player is actively undertaking.
	 * 
	 * @return An array of active quests.
	 */
	getActiveQuests(): IQuest[];

	/**
	 * Returns the container (GUI) that the player currently has open, if any.
	 * 
	 * @return The open container, or null if none is open.
	 */
	getOpenContainer(): IContainer;

	/**
	 * Displays a custom GUI to the player.
	 * 
	 * @param gui The custom GUI to show.
	 */
	showCustomGui(gui: ICustomGui): void;

	/**
	 * Returns the custom GUI currently open for the player.
	 * 
	 * @return The custom GUI, or null if none is open.
	 */
	getCustomGui(): ICustomGui;

	/**
	 * Closes the currently open GUI for the player.
	 */
	closeGui(): void;

	/**
	 * Displays a custom overlay on the player's screen.
	 * 
	 * @param overlay The custom overlay to display.
	 */
	showCustomOverlay(overlay: ICustomOverlay): void;

	/**
	 * Closes the custom overlay with the specified identifier.
	 * 
	 * @param id The overlay ID.
	 */
	closeOverlay(id: number): void;

	/**
	 * Returns the player's overlay handler which manages custom overlays.
	 * 
	 * @return The overlay handler.
	 */
	getOverlays(): IOverlayHandler;

	/**
	 * Returns the player's animation data.
	 * 
	 * @return The animation data.
	 */
	getAnimationData(): IAnimationData;

	/**
	 * Sets whether the player has conquered the End dimension.
	 * 
	 * @param conqueredEnd True if the End is conquered, false otherwise.
	 */
	setConqueredEnd(conqueredEnd: boolean): void;

	/**
	 * Checks whether the player has conquered the End dimension.
	 * 
	 * @return True if the End has been conquered, false otherwise.
	 */
	conqueredEnd(): boolean;

	/**
	 * Returns the player's screen size information.
	 * 
	 * @return The screen size.
	 */
	getScreenSize(): IScreenSize;

	/**
	 * Returns the player's magic-related data.
	 * 
	 * @return The magic data.
	 */
	getMagicData(): IMagicData;

	/**
	 * Returns the player's item attribute combination
	 * 
	 * @return Player Attributes Data
	 */
	getAttributes(): IPlayerAttributes;

	isOperator(): boolean;

	getSelectedHotbarSlot(): number;

	/**
	 * Returns the specified player's playerdata in NBT form. If you are looking for playerdata related to
	 * customNpcs+ then use {@link #getData()}
	 */
	getPlayerData(): INbt;

	/**
	 * Opens a furnace for the player
	 * 
	 * @param persistent When true the furnace will retain its items. Persistent and non-persistent furnaces are separate.
	 */
	openFurnace(persistent: boolean): void;

	/**
	 * Opens a crafting table. Any stored items are returned to the player when closed.
	 */
	openCraftingTable(): void;

	/**
	 * Opens a player's ender chest for a specified player
	 * 
	 * @param enderChestOwner The IPlayer whose ender chest is viewed
	 */
	openEnderChest(enderChestOwner: IPlayer): void;

	/**
	 * Opens the player's ender chest for themselves.
	 */
	openEnderChest(): void;

	/**
	 * @param slot The slot to get the item from (0 - 8) left to right are hotbar slots. (9 - 35) left - right, top - bottom, (36, 39) is armor
	 */
	setInventorySlot(slot: number, item: IItemStack): void;

	setInventory(items: IItemStack[]): void;

	setInventory(contents: IContainer): void;

	/**
	 * @param slot The slot to get the item from (0 - 8) left to right are hotbar slots. (9 - 35) left - right, top - bottom, (36, 39) is armor
	 */
	getInventorySlot(slot: number): IItemStack;

	/**
	 * @return A 40 slot container where (0 - 8) left to right are hotbar slots. (9 - 35) left - right, top - bottom, (36, 39) is armor
	 */
	getInventoryContainer(): IContainer;

	/**
	 * Only for those who know what they're doing
	 */
	getMCInventory(): InventoryPlayer;

	clearEnderChest(): void;

	setEnderChestSlot(slot: number, item: IItemStack): void;

	setEnderChest(items: IItemStack[]): void;

	setEnderChest(contents: IContainer): void;

	getEnderChestSlot(slot: number): IItemStack;

	getEnderChest(): IContainer;

	/**
	 * Only for those who know what they're doing
	 */
	getMCEnderChest(): InventoryEnderChest;

	setVerticalFlightSpeed(value: number): void;

	getVerticalFlightSpeed(): number;

	/**
	 * Sets the player's horizontal fly speed. Default is 1. See {@link #setVerticalFlightSpeed(float)} for vertical flight speed.
	 */
	setFlightSpeed(value: number): void;

	getFlightSpeed(): number;

	forceFlyState(value: boolean): void;

	/**
	 * Gives/Takes away the ability to fly. Doesn't impact those in creative mode.
	 */
	setCanFly(value: boolean): void;

	/**
	 * @return Whether the player can fly
	 */
	canFly(): boolean;

	/**
	 * @return Whether the player is currently flying
	 */
	isFlying(): boolean;

}

