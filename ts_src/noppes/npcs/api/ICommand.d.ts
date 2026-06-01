
/**
 * Represents a custom command that can be registered and executed.
 */
export interface ICommand extends IObject {
	/**
	 * Gets the name of this command.
	 * 
	 * @return the command name
	 */
	getCommandName(): string;

	/**
	 * Gets the usage string for this command.
	 * 
	 * @return the command usage description
	 */
	getCommandUsage(): string;

	/**
	 * Gets the permission level required to execute this command.
	 * 
	 * @return the permission level (0 = all, 1 = moderator, 2 = gamemaster, 3 = admin, 4 = owner)
	 */
	getPermissionLevel(): number;

	/**
	 * Sets the name of this command.
	 * 
	 * @param commandName the command name to set
	 */
	setCommandName(commandName: string): void;

	/**
	 * Sets the usage string for this command.
	 * 
	 * @param commandUsage the command usage description to set
	 */
	setCommandUsage(commandUsage: string): void;

	/**
	 * Sets the permission level required to execute this command.
	 * 
	 * @param permissionLevel the permission level (0 = all, 1 = moderator, 2 = gamemaster, 3 = admin, 4 = owner)
	 */
	setPermissionLevel(permissionLevel: number): void;

	/**
	 * Gets all aliases for this command.
	 * 
	 * @return an array of alias strings
	 */
	getAliases(): string[];

	/**
	 * Adds one or more aliases for this command.
	 * 
	 * @param aliases the alias(es) to add
	 */
	addAliases(aliases: string): void;

	/**
	 * Checks whether this command has a specific alias.
	 * 
	 * @param alias the alias to check for
	 * @return true if the alias exists
	 */
	hasAlias(alias: string): boolean;

	/**
	 * Removes an alias from this command.
	 * 
	 * @param alias the alias to remove
	 */
	removeAlias(alias: string): void;
}

