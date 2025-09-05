import { IPlayer } from "./../entity/IPlayer";
import { IObject } from "./../../../../IObject";
import { IScoreboardTeam } from "./IScoreboardTeam";
import { IScoreboardObjective } from "./IScoreboardObjective";


export interface IScoreboard extends IObject {
	getObjectives(): IScoreboardObjective[];

	getObjective(name: string): IScoreboardObjective;

	hasObjective(objective: string): boolean;

	removeObjective(objective: string): void;

	addObjective(objective: string, criteria: string): IScoreboardObjective;

	setPlayerScore(player: string, objective: string, score: number, datatag: string): void;

	setPlayerScore(player: IPlayer, objective: string, score: number, datatag: string): void;

	getPlayerScore(player: string, objective: string, datatag: string): number;

	getPlayerScore(player: IPlayer, objective: string, datatag: string): number;

	hasPlayerObjective(player: string, objective: string, datatag: string): boolean;

	hasPlayerObjective(player: IPlayer, objective: string, datatag: string): boolean;

	deletePlayerScore(player: string, objective: string, datatag: string): void;

	deletePlayerScore(player: IPlayer, objective: string, datatag: string): void;

	getTeams(): IScoreboardTeam[];

	getTeamByName(name: string): IScoreboardTeam;

	hasTeam(name: string): boolean;

	addTeam(name: string): IScoreboardTeam;

	getTeam(name: string): IScoreboardTeam;

	removeTeam(name: string): void;

}

