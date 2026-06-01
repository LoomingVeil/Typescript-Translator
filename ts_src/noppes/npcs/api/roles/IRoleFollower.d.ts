
export interface IRoleFollower extends IRole {
	/**
	 * @param player Player who is set as the owner. If null given everything resets
	 * @since 1.7.10c
	 */
	setOwner(player: IPlayer): void;

	/**
	 * @return Returns the followers owner. Returns null if he has no owner or the owner is offline
	 * @since 1.7.10c
	 */
	getOwner(): IPlayer;

	/**
	 * @return Returns whether or not the follower has an owner
	 * @since 1.7.10c
	 */
	hasOwner(): boolean;

	/**
	 * @return true if the follower is currently following the owner.
	 */
	isFollowing(): boolean;

	/**
	 * @param following true to make the follower follow the owner.
	 */
	setIsFollowing(following: boolean): void;

	/**
	 * @return Returns days left
	 * @since 1.7.10c
	 */
	getDaysLeft(): number;

	/**
	 * @param days The days you want to add to the days remaining
	 * @since 1.7.10c
	 */
	addDaysLeft(days: number): void;

	/**
	 * @return Returns whether or not the follower is set to infinite days
	 * @since 1.7.10c
	 */
	getInfiniteDays(): boolean;

	/**
	 * @param infinite Sets whether the days hired are infinite
	 * @since 1.7.10c
	 */
	setInfiniteDays(infinite: boolean): void;

	/**
	 * @return Return whether the gui is disabled
	 * @since 1.7.10c
	 */
	getGuiDisabled(): boolean;

	/**
	 * @param disabled Set the gui to be disabled or not
	 * @since 1.7.10c
	 */
	setGuiDisabled(disabled: boolean): void;

	/**
	 * @param index Index of Rate [0 - 2]
	 * @param amount Amount hired for
	 */
	setRate(index: number, amount: number): void;

	/**
	 * @param index Index of Rate [0 - 2]
	 * @return amount fired for
	 */
	getRate(index: number): number;

	/**
	 * @param dialogHire New dialog hire string
	 */
	setDialogHire(dialogHire: string): void;

	/**
	 * @return dialog hire string
	 */
	getDialogHire(): string;

	/**
	 * @param dialogFarewell New dialog farewell string
	 */
	setDialogFarewell(dialogFarewell: string): void;

	/**
	 * @return dialog farewell string
	 */
	getDialogFarewell(): string;
}

