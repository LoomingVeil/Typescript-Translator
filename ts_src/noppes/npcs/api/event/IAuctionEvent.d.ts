
/**
 * Events related to auction actions.
 * These events are fired when players interact with the auction system.
 */
export interface IAuctionEvent extends IPlayerEvent {}

/**
 * Fired before a player creates a new auction listing.
 * Cancel to prevent the listing from being created.
 * The listing fee has NOT yet been deducted when this fires.
 * 
 * @hookName auctionCreate
 */
export interface CreateEvent extends IAuctionEvent {
	getItem(): IItemStack;

	getStartingPrice(): number;

	getBuyoutPrice(): number;

	/** Sets whether this event is canceled. */
	setCanceled(status: boolean): void;

	/** Sets whether this event is cancelled. */
	setCancelled(status: boolean): void;
}

/**
 * Fired before a player places a bid on an auction.
 * Cancel to prevent the bid from being placed.
 * Currency has NOT yet been deducted when this fires.
 * 
 * @hookName auctionBid
 */
export interface BidEvent extends IAuctionEvent {
	getListing(): IAuctionListing;

	getBidAmount(): number;

	/** Sets whether this event is canceled. */
	setCanceled(status: boolean): void;

	/** Sets whether this event is cancelled. */
	setCancelled(status: boolean): void;
}

/**
 * Fired before a player buys out an auction.
 * Cancel to prevent the buyout.
 * Currency has NOT yet been deducted when this fires.
 * 
 * @hookName auctionBuyout
 */
export interface BuyoutEvent extends IAuctionEvent {
	getListing(): IAuctionListing;

	/** Sets whether this event is canceled. */
	setCanceled(status: boolean): void;

	/** Sets whether this event is cancelled. */
	setCancelled(status: boolean): void;
}

/**
 * Fired before a player cancels an auction listing.
 * Cancel to prevent the cancellation.
 * 
 * @hookName auctionCancel
 */
export interface CancelEvent extends IAuctionEvent {
	getListing(): IAuctionListing;

	isAdmin(): boolean;

	/** Sets whether this event is canceled. */
	setCanceled(status: boolean): void;

	/** Sets whether this event is cancelled. */
	setCancelled(status: boolean): void;
}

/**
 * Fired before a player claims an item or currency from an auction.
 * Cancel to prevent the claim.
 * 
 * @hookName auctionClaim
 */
export interface ClaimEvent extends IAuctionEvent {
	getClaim(): IAuctionClaim;

	/** Sets whether this event is canceled. */
	setCanceled(status: boolean): void;

	/** Sets whether this event is cancelled. */
	setCancelled(status: boolean): void;
}

