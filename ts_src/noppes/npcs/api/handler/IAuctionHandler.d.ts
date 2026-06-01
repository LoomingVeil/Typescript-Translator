
/**
 * Handler for the Auction system.
 * Access via API.getAuctions()
 */
export interface IAuctionHandler extends IObject {
	/**
	 * Check if the auction system is enabled.
	 * 
	 * @return true if the auction system is enabled
	 */
	isEnabled(): boolean;

	/**
	 * Get all active listings.
	 * 
	 * @return array of all currently active auction listings
	 */
	getActiveListings(): IAuctionListing[];

	/**
	 * Get a specific listing by ID.
	 * 
	 * @param listingId The listing ID
	 * @return The listing, or null if not found
	 */
	getListing(listingId: string): IAuctionListing;

	/**
	 * Get all active listings by a specific seller.
	 * 
	 * @param sellerUUID The seller's UUID as a string
	 * @return array of listings created by this seller
	 */
	getListingsBySeller(sellerUUID: string): IAuctionListing[];

	/**
	 * Get all listings where a player is the current high bidder.
	 * 
	 * @param bidderUUID The bidder's UUID as a string
	 * @return array of listings this player has bid on
	 */
	getListingsByBidder(bidderUUID: string): IAuctionListing[];

	/**
	 * Get total count of active listings.
	 * 
	 * @return the number of currently active listings
	 */
	getActiveListingCount(): number;

	/**
	 * Create a new listing.
	 * 
	 * @param player The seller
	 * @param item The item to sell
	 * @param startingPrice The starting bid price
	 * @param buyoutPrice The buyout price (0 for no buyout)
	 * @return The created listing, or null if failed
	 */
	createListing(player: IPlayer, item: IItemStack, startingPrice: number, buyoutPrice: number): IAuctionListing;

	/**
	 * Place a bid on a listing.
	 * 
	 * @param listingId The listing ID
	 * @param player The bidder
	 * @param amount The bid amount
	 * @return null on success, error message on failure
	 */
	placeBid(listingId: string, player: IPlayer, amount: number): string;

	/**
	 * Buyout a listing instantly.
	 * 
	 * @param listingId The listing ID
	 * @param player The buyer
	 * @return null on success, error message on failure
	 */
	buyout(listingId: string, player: IPlayer): string;

	/**
	 * Cancel a listing (seller only, unless admin).
	 * 
	 * @param listingId The listing ID
	 * @param player The player cancelling
	 * @param isAdmin Whether to bypass ownership check
	 * @return null on success, error message on failure
	 */
	cancelListing(listingId: string, player: IPlayer, isAdmin: boolean): string;

	/**
	 * Get the listing fee amount.
	 * 
	 * @return the currency fee charged when creating a listing
	 */
	getListingFee(): number;

	/**
	 * Get the sales tax percentage (0.0 to 1.0).
	 * 
	 * @return the sales tax percentage applied to completed sales
	 */
	getSalesTaxPercent(): number;

	/**
	 * Get the minimum bid increment percentage (0.0 to 1.0).
	 * 
	 * @return the minimum bid increment as a percentage of current bid
	 */
	getMinBidIncrementPercent(): number;

	/**
	 * Get the auction duration in hours.
	 * 
	 * @return the default auction duration in hours
	 */
	getAuctionDurationHours(): number;

	/**
	 * Get the snipe protection time in minutes.
	 * 
	 * @return the snipe protection window in minutes
	 */
	getSnipeProtectionMinutes(): number;

	/**
	 * Get the currency name used by the auction system.
	 * 
	 * @return the display name of the auction currency
	 */
	getCurrencyName(): string;

	/**
	 * Get the minimum listing price.
	 * 
	 * @return the minimum starting price for new listings
	 */
	getMinimumListingPrice(): number;

	/**
	 * Search listings by item name or seller name.
	 * 
	 * @param searchText The search text
	 * @return Matching active listings
	 */
	searchListings(searchText: string): IAuctionListing[];

	/**
	 * Force save auction data.
	 */
	save(): void;
}

