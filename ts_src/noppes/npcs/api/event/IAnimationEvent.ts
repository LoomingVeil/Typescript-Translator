import { IAnimationData } from "./../handler/data/IAnimationData";
import { IAnimation } from "./../handler/data/IAnimation";
import { IFrame } from "./../handler/data/IFrame";
import { IAnimatable } from "./../entity/IAnimatable";
import { ICustomNPCsEvent } from "./ICustomNPCsEvent";

import { IFrameEvent } from "./../../../../missingTypes";

export interface IAnimationEvent extends ICustomNPCsEvent {
	getAnimation(): IAnimation;

	getAnimationData(): IAnimationData;

	getEntity(): IAnimatable;

}

export interface Started extends IAnimationEvent {
}

export interface Ended extends IAnimationEvent {
}

export interface IFrameEvent extends IAnimationEvent {
	getIndex(): number;

	getFrame(): IFrame;

}

export interface Entered extends IFrameEvent {
}

export interface Exited extends IFrameEvent {
}

