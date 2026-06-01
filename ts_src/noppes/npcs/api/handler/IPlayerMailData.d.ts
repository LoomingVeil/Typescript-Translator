
/**
 * Manages a player's mail inbox, including sending, removing, and querying mail.
 */
export interface IPlayerMailData extends IObject {
	/**
	 * @return true if the player has any mail.
	 */
	hasMail(): boolean;

	/**
	 * Adds mail to the player's inbox.
	 * 
	 * @param mail the mail to add.
	 */
	addMail(mail: IPlayerMail): void;

	/**
	 * Removes specific mail from the player's inbox.
	 * 
	 * @param mail the mail to remove.
	 */
	removeMail(mail: IPlayerMail): void;

	/**
	 * Checks if the player has the specified mail.
	 * 
	 * @param mail the mail to check.
	 * @return true if the mail exists in the inbox.
	 */
	hasMail(mail: IPlayerMail): boolean;

	/**
	 * @return all mail in the player's inbox.
	 */
	getAllMail(): IPlayerMail[];

	/**
	 * @return all unread mail in the player's inbox.
	 */
	getUnreadMail(): IPlayerMail[];

	/**
	 * @return all read mail in the player's inbox.
	 */
	getReadMail(): IPlayerMail[];

	/**
	 * Returns all mail from the given sender.
	 * 
	 * @param sender the sender name.
	 * @return an array of matching mail.
	 */
	getMailFrom(sender: string): IPlayerMail[];
}

