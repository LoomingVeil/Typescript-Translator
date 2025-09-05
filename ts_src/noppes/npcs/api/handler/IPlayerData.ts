import { IPlayerFactionData } from "./IPlayerFactionData";
import { IPlayerMailData } from "./IPlayerMailData";
import { IObject } from "./../../../../IObject";
import { IPlayerDialogData } from "./IPlayerDialogData";
import { IPlayerBankData } from "./IPlayerBankData";
import { ICustomNpc } from "./../entity/ICustomNpc";
import { IPlayerItemGiverData } from "./IPlayerItemGiverData";
import { IPlayerTransportData } from "./IPlayerTransportData";
import { IPlayerQuestData } from "./IPlayerQuestData";


export interface IPlayerData extends IObject {
	setCompanion(npc: ICustomNpc): void;

	getCompanion(): ICustomNpc;

	hasCompanion(): boolean;

	getCompanionID(): number;

	getDialogData(): IPlayerDialogData;

	getBankData(): IPlayerBankData;

	getQuestData(): IPlayerQuestData;

	getTransportData(): IPlayerTransportData;

	getFactionData(): IPlayerFactionData;

	getItemGiverData(): IPlayerItemGiverData;

	getMailData(): IPlayerMailData;

	save(): void;

}

