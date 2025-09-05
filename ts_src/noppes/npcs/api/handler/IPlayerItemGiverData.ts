import { IJobItemGiver } from "./../jobs/IJobItemGiver";
import { IObject } from "./../../../../IObject";


export interface IPlayerItemGiverData extends IObject {
	getTime(jobItemGiver: IJobItemGiver): number;

	setTime(jobItemGiver: IJobItemGiver, day: number): void;

	hasInteractedBefore(jobItemGiver: IJobItemGiver): boolean;

}
}
