import { IObject } from "./../../../../IObject";
import { ISkinOverlay } from "./../ISkinOverlay";


export interface IOverlayHandler extends IObject {
	add(id: number, overlay: ISkinOverlay): void;

	get(id: number): ISkinOverlay;

	has(id: number): boolean;

	remove(id: number): boolean;

	size(): number;

	clear(): void;

}
}
