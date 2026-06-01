
export interface IRoleTrader extends IRole {
	/**
	 * @param slot Slot number 0-17
	 * @param currency Currency item
	 * @param currency2 Currency item number two
	 * @param sold Item to be sold by this npc
	 */
	setSellOption(slot: number, currency: IItemStack, currency2: IItemStack, sold: IItemStack): void;

	/**
	 * @param slot Slot number 0-17
	 * @param currency Currency item
	 * @param sold Item to be sold by this npc
	 */
	setSellOption(slot: number, currency: IItemStack, sold: IItemStack): void;

	/**
	 * @param slot
	 * @return The item being sold in this slot.
	 */
	getSellOption(slot: number): IItemStack;

	/**
	 * @param slot
	 * @return a ScriptItemStack array of size 2 which contains the currency of this trade
	 */
	getCurrency(slot: number): IItemStack[];

	/**
	 * @param slot Slot number 0-17
	 */
	removeSellOption(slot: number): void;

	/**
	 * @param name The trader Linked Market name
	 */
	setMarket(name: string): void;

	/**
	 * @return Get the currently set Linked Market name
	 */
	getMarket(): string;

	/**
	 * @param slot
	 * @return the number of times an item has been sold on that slot
	 */
	getPurchaseNum(slot: number): number;

	/**
	 * @param slot
	 * @param player
	 * @return the number of times this player has purchased from this trader
	 */
	getPurchaseNum(slot: number, player: IPlayer): number;

	/**
	 * Sets the purchase count of all slots to 0
	 */
	resetPurchaseNum(): void;

	/**
	 * sets the purchase num for that slot to 0
	 * 
	 * @param slot
	 */
	resetPurchaseNum(slot: number): void;

	/**
	 * sets the purchase num for that slot and player to 0
	 * 
	 * @param slot
	 * @param player
	 */
	resetPurchaseNum(slot: number, player: IPlayer): void;

	/**
	 * @param slot
	 * @return if this slot is enabled
	 */
	isSlotEnabled(slot: number): boolean;

	/**
	 * @param slot
	 * @param player
	 * @return if this slot is enabled for this player
	 */
	isSlotEnabled(slot: number, player: IPlayer): boolean;

	/**
	 * prevent an item from being sold on that slot
	 * 
	 * @param slot
	 */
	disableSlot(slot: number): void;

	/**
	 * disables the slot for this player
	 * 
	 * @param slot
	 * @param player
	 */
	disableSlot(slot: number, player: IPlayer): void;

	/**
	 * allow an item to be sold on that slot
	 * 
	 * @param slot
	 */
	enableSlot(slot: number): void;

	/**
	 * enables the slot for this player
	 * 
	 * @param slot
	 * @param player
	 */
	enableSlot(slot: number, player: IPlayer): void;

	/**
	 * @return Whether stock system is enabled
	 */
	isStockEnabled(): boolean;

	/**
	 * Enable or disable stock system
	 */
	setStockEnabled(enabled: boolean): void;

	/**
	 * @return Whether stock is tracked per-player (true) or globally (false)
	 */
	isPerPlayerStock(): boolean;

	/**
	 * Set whether stock is per-player or global
	 */
	setPerPlayerStock(perPlayer: boolean): void;

	/**
	 * Get the stock reset type
	 * 
	 * @return 0=NONE, 1=MCDAILY, 2=MCWEEKLY, 3=MCCUSTOM, 4=RLDAILY, 5=RLWEEKLY, 6=RLCUSTOM
	 */
	getStockResetType(): number;

	/**
	 * Set stock reset type
	 * 
	 * @param type 0=NONE, 1=MCDAILY, 2=MCWEEKLY, 3=MCCUSTOM, 4=RLDAILY, 5=RLWEEKLY, 6=RLCUSTOM
	 */
	setStockResetType(type: number): void;

	/**
	 * Get custom reset time (only used for MCCUSTOM/RLCUSTOM)
	 * 
	 * @return Custom time in ticks (MC) or milliseconds (RL)
	 */
	getCustomResetTime(): number;

	/**
	 * Set custom reset time
	 * 
	 * @param time Time in ticks (MC) or milliseconds (RL)
	 */
	setCustomResetTime(time: number): void;

	/**
	 * Get max stock for a slot
	 * 
	 * @param slot Slot number 0-17
	 * @return Max stock, -1 = unlimited
	 */
	getMaxStock(slot: number): number;

	/**
	 * Set max stock for a slot
	 * 
	 * @param slot Slot number 0-17
	 * @param amount Max stock, -1 = unlimited
	 */
	setMaxStock(slot: number, amount: number): void;

	/**
	 * Get available stock for a slot (global mode)
	 * 
	 * @param slot Slot number 0-17
	 * @return Available stock, Integer.MAX_VALUE if unlimited
	 */
	getAvailableStock(slot: number): number;

	/**
	 * Get available stock for a slot for a specific player (per-player mode)
	 * 
	 * @param slot Slot number 0-17
	 * @param player The player
	 * @return Available stock, Integer.MAX_VALUE if unlimited
	 */
	getAvailableStock(slot: number, player: IPlayer): number;

	/**
	 * Reset all stock to max values
	 */
	resetStock(): void;

	/**
	 * Reset the cooldown timer without resetting stock values
	 * Stock will reset on next trigger after this is called
	 */
	resetCooldown(): void;

	/**
	 * Get current stock for a slot (global mode)
	 * 
	 * @param slot Slot number 0-17
	 * @return Current stock, -1 if not initialized
	 */
	getCurrentStock(slot: number): number;

	/**
	 * Set current stock for a slot (global mode only)
	 * 
	 * @param slot Slot number 0-17
	 * @param amount Current stock amount
	 */
	setCurrentStock(slot: number, amount: number): void;

	/**
	 * Get purchased amount for a player in a slot (per-player mode)
	 * 
	 * @param slot Slot number 0-17
	 * @param player The player
	 * @return Purchased amount (stock available = maxStock - purchasedAmount)
	 */
	getPlayerPurchased(slot: number, player: IPlayer): number;

	/**
	 * Set purchased amount for a player in a slot (per-player mode)
	 * 
	 * @param slot Slot number 0-17
	 * @param player The player
	 * @param amount Purchased amount
	 */
	setPlayerPurchased(slot: number, player: IPlayer, amount: number): void;

	/**
	 * Get the timestamp of the last stock reset
	 * 
	 * @return Time in ticks (MC) or milliseconds (RL), depending on reset type
	 */
	getLastResetTime(): number;

	/**
	 * Get time remaining until next stock reset
	 * 
	 * @return Time remaining in ticks (MC) or milliseconds (RL), -1 if no reset scheduled
	 */
	getTimeUntilReset(): number;

	/**
	 * Get the currency cost for a slot (additive to item costs)
	 * 
	 * @param slot Slot number 0-17
	 * @return Currency cost, 0 = no cost
	 */
	getCurrencyCost(slot: number): number;

	/**
	 * Set the currency cost for a slot (additive to item costs)
	 * 
	 * @param slot Slot number 0-17
	 * @param cost Currency cost, 0 = no cost
	 */
	setCurrencyCost(slot: number, cost: number): void;

	/**
	 * @param slot Slot number 0-17
	 * @return Whether this slot has a currency cost &gt; 0
	 */
	hasCurrencyCost(slot: number): boolean;
}

