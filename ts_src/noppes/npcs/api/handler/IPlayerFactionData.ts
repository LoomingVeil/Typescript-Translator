import { IObject } from "./../../../../IObject";


export interface IPlayerFactionData extends IObject {
	getPoints(id: number): number;

	addPoints(id: number, points: number): void;

	setPoints(id: number, points: number): void;

}
}
