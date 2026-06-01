
/**
 * Interface for player trade data (currency and auction claims).
 * Note: If Vault integration is enabled in config, currency operations
 * will use the Vault economy instead of CNPC+ built-in currency.
 */
export interface IPlayerTradeData extends IObject {
	/**
	 * Get the current balance
	 * 
	 * @return the player's current currency balance
	 */
	getBalance(): number;

	/**
	 * Set the balance directly
	 * 
	 * @param balance The new balance
	 */
	setBalance(balance: number): void;

	/**
	 * Add currency to balance (deposit)
	 * 
	 * @param amount Amount to add
	 * @return true if successful, false if would exceed max balance
	 */
	deposit(amount: number): boolean;

	/**
	 * Remove currency from balance (withdraw)
	 * 
	 * @param amount Amount to remove
	 * @return true if successful, false if insufficient funds
	 */
	withdraw(amount: number): boolean;

	/**
	 * Check if player can afford an amount
	 * 
	 * @param amount Amount to check
	 * @return true if player has enough balance
	 */
	canAfford(amount: number): boolean;

	/**
	 * Get lifetime earned currency
	 * 
	 * @return the total currency earned over the player's lifetime
	 */
	getLifetimeEarned(): number;

	/**
	 * Get lifetime spent currency
	 * 
	 * @return the total currency spent over the player's lifetime
	 */
	getLifetimeSpent(): number;

	/**
	 * Format the balance for display
	 * 
	 * @return the balance formatted as a human-readable string
	 */
	formatBalance(): string;

	/**
	 * Check if Vault is being used for currency operations
	 * 
	 * @return true if Vault is handling currency, false if using CNPC+ built-in
	 */
	isUsingVault(): boolean;

	/**
	 * Get the number of pending auction claims
	 * 
	 * @return the number of pending auction claims
	 */
	getClaimCount(): number;

	/**
	 * Check if player has any pending auction claims
	 * 
	 * @return true if the player has pending auction claims
	 */
	hasClaims(): boolean;

	/**
	 * Get all pending auction claims for this player.
	 * 
	 * @return array of the player's pending auction claims
	 */
	getClaims(): IAuctionClaim[];

	/**
	 * Get a specific claim by ID.
	 * 
	 * @param claimId The claim ID
	 * @return The claim, or null if not found
	 */
	getClaim(claimId: string): IAuctionClaim;
}

