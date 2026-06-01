
/**
 * Represents a mail message sent to a player, containing pages of text,
 * sender info, optional quest, and item attachments.
 */
export interface IPlayerMail extends IObject {
	/**
	 * Sets the page text content.
	 * 
	 * @param pages an array of strings, one per page.
	 */
	setPageText(pages: string[]): void;

	/**
	 * @return the page text as an array of strings.
	 */
	getPageText(): string[];

	/**
	 * @return the number of pages.
	 */
	getPageCount(): number;

	/**
	 * @param sender the sender name.
	 */
	setSender(sender: string): void;

	/**
	 * @return the sender name.
	 */
	getSender(): string;

	/**
	 * @param subject the mail subject line.
	 */
	setSubject(subject: string): void;

	/**
	 * @return the mail subject line.
	 */
	getSubject(): string;

	/**
	 * @return milliseconds since the mail was sent.
	 */
	getTimePast(): number;

	/**
	 * @return the timestamp when the mail was sent.
	 */
	getTimeSent(): number;

	/**
	 * @return true if this mail has an associated quest.
	 */
	hasQuest(): boolean;

	/**
	 * @return the quest attached to this mail, or null if none.
	 */
	getQuest(): IQuest;

	/**
	 * @return the item attachments.
	 */
	getItems(): IItemStack[];

	/**
	 * @param items the item attachments.
	 */
	setItems(items: IItemStack[]): void;
}

