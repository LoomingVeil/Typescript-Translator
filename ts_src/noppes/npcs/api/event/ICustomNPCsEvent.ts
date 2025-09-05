import { IObject } from "./../../../../IObject";
import { IWorld } from "./../IWorld";
import { IPos } from "./../IPos";
import { INaturalSpawn } from "./../handler/data/INaturalSpawn";


export interface ICustomNPCsEvent extends IObject {
	getHookName(): string;

	export interface CNPCNaturalSpawnEvent extends ICustomNPCsEvent {
		getNaturalSpawn(): INaturalSpawn;

		setAttemptPosition(attemptPosition: IPos): void;

		getAttemptPosition(): IPos;

		animalSpawnPassed(): boolean;

		monsterSpawnPassed(): boolean;

		liquidSpawnPassed(): boolean;

		airSpawnPassed(): boolean;

	}
	export interface ScriptedCommandEvent extends ICustomNPCsEvent {
		getSenderWorld(): IWorld;

		getSenderPosition(): IPos;

		getSenderName(): string;

		setReplyMessage(message: string): void;

		getId(): string;

		getArgs(): string[];

	}
}
}
