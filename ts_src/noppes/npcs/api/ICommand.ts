import { IObject } from "./../../../IObject";


export interface ICommand extends IObject {
	getCommandName(): string;

	getCommandUsage(): string;

	getPermissionLevel(): number;

	setCommandName(commandName: string): void;

	setCommandUsage(commandUsage: string): void;

	setPermissionLevel(permissionLevel: number): void;

	getAliases(): string[];

	addAliases(aliases: string): void;

	hasAlias(alias: string): boolean;

	removeAlias(alias: string): void;

}

