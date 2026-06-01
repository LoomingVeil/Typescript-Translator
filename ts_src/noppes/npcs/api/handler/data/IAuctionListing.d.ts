
/**
 * Represents an auction listing.
 */
export interface IAuctionListing extends IObject {
	/**
	 * Get the unique listing ID.
	 * 
	 * @return the unique listing ID
	 */
	getId(): string;

	/**
	 * Get the seller's UUID as a string.
	 * 
	 * @return the seller's UUID
	 */
	getSellerUUID(): string;

	/**
	 * Get the seller's display name.
	 * 
	 * @return the seller's display name
	 */
	getSellerName(): string;

	/**
	 * Get the item being sold.
	 * 
	 * @return the item being auctioned
	 */
	getItem(): IItemStack;

	/**
	 * Get the starting price.
	 * 
	 * @return the starting bid price in currency
	 */
	getStartingPrice(): number;

	/**
	 * Get the buyout price (0 if no buyout).
	 * 
	 * @return the instant buyout price in currency
	 */
	getBuyoutPrice(): number;

	/**
	 * Check if this listing has a buyout option.
	 * 
	 * @return true if this listing has a buyout option
	 */
	hasBuyout(): boolean;

	/**
	 * Get the current highest bid.
	 * 
	 * @return the current highest bid amount
	 */
	getCurrentBid(): number;

	/**
	 * Get the high bidder's UUID as a string (null if no bids).
	 * 
	 * @return the UUID of the current highest bidder
	 */
	getHighBidderUUID(): string;

	/**
	 * Get the high bidder's display name (null if no bids).
	 * 
	 * @return the name of the current highest bidder
	 */
	getHighBidderName(): string;

	/**
	 * Check if there are any bids on this listing.
	 * 
	 * @return true if any bids have been placed
	 */
	hasBids(): boolean;

	/**
	 * Get the total number of bids placed.
	 * 
	 * @return the total number of bids placed
	 */
	getBidCount(): number;

	/**
	 * Get when the listing was created (Unix timestamp in ms).
	 * 
	 * @return the timestamp when this listing was created
	 */
	getCreatedTime(): number;

	/**
	 * Get when the auction ends (Unix timestamp in ms).
	 * 
	 * @return the timestamp when this listing ends
	 */
	getEndTime(): number;

	/**
	 * Get the remaining time in milliseconds.
	 * 
	 * @return the remaining time in milliseconds
	 */
	getRemainingTime(): number;

	/**
	 * Check if the auction has expired.
	 * 
	 * @return true if the listing has ended
	 */
	isExpired(): boolean;

	/**
	 * Check if the auction is still active (can be bid on).
	 * 
	 * @return true if the listing is still accepting bids
	 */
	isActive(): boolean;

	/**
	 * Get the auction status.
	 * 
	 * @return 0 = Active, 1 = Ended, 2 = Cancelled, 3 = Claimed
	 */
	getStatus(): number;

	/**
	 * Get the minimum bid amount (current bid + increment).
	 * 
	 * @return the minimum bid amount required
	 */
	getMinimumBid(): number;

	/**
	 * Check if a player UUID is the seller.
	 * 
	 * @param playerUUID the player UUID to check
	 * @return true if this player is the seller
	 */
	isSeller(playerUUID: string): boolean;

	/**
	 * Check if a player UUID is the current high bidder.
	 * 
	 * @param playerUUID the player UUID to check
	 * @return true if this player is the current highest bidder
	 */
	isHighBidder(playerUUID: string): boolean;

	/**
	 * Get the remaining time formatted as a string (e.g., "2h 30m").
	 * 
	 * @return the remaining time as a human-readable string
	 */
	getRemainingTimeFormatted(): string;
}

