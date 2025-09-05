import { IObject } from "./../../../../../IObject";


export interface IJobType extends IObject {
	NONE: number;
	BARD: number;
	HEALER: number;
	GUARD: number;
	ITEM_GIVER: number;
	FOLLOWER: number;
	SPAWNER: number;
	CONVERSATION: number;
	CHUNK_LOADER: number;
}


export const Job: IJobType = {} as IJobType;
