import { IObject } from "./../../../../IObject";
import { IAnimation } from "./data/IAnimation";


export interface IAnimationHandler extends IObject {
	saveAnimation(animation: IAnimation): IAnimation;

	delete(name: string): void;

	delete(id: number): void;

	has(name: string): boolean;

	get(name: string): IAnimation;

	get(id: number): IAnimation;

	getAnimations(): IAnimation[];

}
}
