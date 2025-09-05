import { IPlayerMail } from "./data/IPlayerMail";
import { IObject } from "./../../../../IObject";


export interface IPlayerMailData extends IObject {
	hasMail(): boolean;

	addMail(mail: IPlayerMail): void;

	removeMail(mail: IPlayerMail): void;

	hasMail(mail: IPlayerMail): boolean;

	getAllMail(): IPlayerMail[];

	getUnreadMail(): IPlayerMail[];

	getReadMail(): IPlayerMail[];

	getMailFrom(sender: string): IPlayerMail[];

}

