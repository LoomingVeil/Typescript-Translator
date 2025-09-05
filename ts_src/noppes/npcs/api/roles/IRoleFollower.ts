import { IPlayer } from "./../entity/IPlayer";


export interface IRoleFollower extends IRole {
	/**
	 * @since 1.7.10c
	 * @param player Player who is set as the owner. If null given everything resets
	 */
	setOwner(player: IPlayer): void;

	/**
	 * @since 1.7.10c
	 * @return Returns the followers owner. Returns null if he has no owner or the owner is offline
	 */
	getOwner(): IPlayer;

	/**
	 * @since 1.7.10c
	 * @return Returns whether or not the follower has an owner
	 */
	hasOwner(): boolean;

	isFollowing(): boolean;

	setIsFollowing(following: boolean): void;

	/**
	 * @since 1.7.10c
	 * @return Returns days left
	 */
	getDaysLeft(): number;

	/**
	 * @since 1.7.10c
	 * @param days The days you want to add to the days remaining
	 */
	addDaysLeft(days: number): void;

	/**
	 * @since 1.7.10c
	 * @return Returns whether or not the follower is set to infinite days
	 */
	getInfiniteDays(): boolean;

	/**
	 * @since 1.7.10c
	 * @param infinite Sets whether the days hired are infinite
	 */
	setInfiniteDays(infinite: boolean): void;

	/**
	 * @since 1.7.10c
	 * @return Return whether the gui is disabled
	 */
	getGuiDisabled(): boolean;

	/**
	 * @since 1.7.10c
	 * @param disabled Set the gui to be disabled or not
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
}
