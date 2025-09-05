import { IPlayer } from "./../entity/IPlayer";
import { IObject } from "./../../../../IObject";
import { IQuest } from "./../handler/data/IQuest";
import { IParty } from "./../handler/data/IParty";


export interface IPartyEvent extends IObject {
	getParty(): IParty;

	getQuest(): IQuest;

}

export interface PartyQuestCompletedEvent extends IPartyEvent {
}

export interface PartyQuestSetEvent extends IPartyEvent {
}

export interface PartyQuestTurnedInEvent extends IPartyEvent {
}

export interface PartyInviteEvent extends IPartyEvent {
	getPlayer(): IPlayer;

	getPlayerName(): string;

}

export interface PartyKickEvent extends IPartyEvent {
	getPlayer(): IPlayer;

	getPlayerName(): string;

}

export interface PartyLeaveEvent extends IPartyEvent {
	getPlayer(): IPlayer;

	getPlayerName(): string;

}

export interface PartyDisbandEvent extends IPartyEvent {
}

