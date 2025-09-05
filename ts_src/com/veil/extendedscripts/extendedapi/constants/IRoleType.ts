import { IObject } from "./../../../../../IObject";


export interface IRoleType extends IObject {
	NONE: number;
	TRADER: number;
	FOLLOWER: number;
	BANK: number;
	TRANSPORTER: number;
	MAILMAN: number;
	COMPANION: number;
}
}

export const Role: IRoleType = {} as IRoleType;
