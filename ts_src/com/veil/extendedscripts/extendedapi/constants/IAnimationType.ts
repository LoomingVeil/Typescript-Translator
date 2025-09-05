import { IObject } from "./../../../../../IObject";


export interface IAnimationType extends IObject {
	NONE: number;
	SITTING: number;
	LYING: number;
	SNEAKING: number;
	DANCING: number;
	AIMING: number;
	CRAWLING: number;
	HUGGING: number;
}
}

export const AnimationType: IAnimationType = {} as IAnimationType;
