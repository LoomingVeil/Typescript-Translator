import { IFaction } from "./../handler/data/IFaction";


export interface IFactionEvent extends IPlayerEvent {
	getFaction(): IFaction;

	export interface FactionPoints extends IFactionEvent {
		decreased(): boolean;

		getPoints(): number;

	}
}
}
