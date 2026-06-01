
/**
 * Base interface for all NPC roles (Trader, Follower, Bank, Mailman, Transporter).
 */
export interface IRole extends IObject {
	/**
	 * @return the NPC this role is assigned to.
	 */
	getNpc(): ICustomNpc;

	/**
	 * @return the role type ordinal.
	 *         0: None, 1: Trader, 2: Follower, 3: Bank, 4: Transporter, 5: Mailman.
	 */
	getType(): number;
}

