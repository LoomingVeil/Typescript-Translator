
/**
 * Base interface for all CustomNPC+ script events.
 */
export interface ICustomNPCsEvent extends IObject {
	/**
	 * @return the script hook name that triggered this event.
	 */
	getHookName(): string;
}

/**
 * @hookName onCNPCNaturalSpawn
 */
export interface CNPCNaturalSpawnEvent extends ICustomNPCsEvent {
	getNaturalSpawn(): INaturalSpawn;

	setAttemptPosition(attemptPosition: IPos): void;

	getAttemptPosition(): IPos;

	animalSpawnPassed(): boolean;

	monsterSpawnPassed(): boolean;

	liquidSpawnPassed(): boolean;

	airSpawnPassed(): boolean;

	/** Sets whether this event is canceled. */
	setCanceled(status: boolean): void;

	/** Sets whether this event is cancelled. */
	setCancelled(status: boolean): void;
}

export interface ScriptedCommandEvent extends ICustomNPCsEvent {
	getSenderWorld(): IWorld;

	getSenderPosition(): IPos;

	getSenderName(): string;

	setReplyMessage(message: string): void;

	getId(): string;

	getArgs(): string[];
}

