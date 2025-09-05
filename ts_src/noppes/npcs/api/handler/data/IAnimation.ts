import { IAnimationData } from "./IAnimationData";
import { IObject } from "./../../../../../IObject";
import { IFrame } from "./IFrame";


export interface IAnimation extends IObject {
	getParent(): IAnimationData;

	currentFrame(): IFrame;

	getFrames(): IFrame[];

	setFrames(frames: IFrame[]): IAnimation;

	clearFrames(): IAnimation;

	addFrame(frame: IFrame): IAnimation;

	addFrame(index: number, frame: IFrame): IAnimation;

	removeFrame(frame: IFrame): IAnimation;

	setName(name: string): IAnimation;

	getName(): string;

	setSpeed(speed: number): IAnimation;

	getSpeed(): number;

	setSmooth(smooth: number): IAnimation;

	isSmooth(): number;

	doWhileStanding(whileStanding: boolean): IAnimation;

	doWhileStanding(): boolean;

	doWhileMoving(whileMoving: boolean): IAnimation;

	doWhileMoving(): boolean;

	doWhileAttacking(whileAttacking: boolean): IAnimation;

	doWhileAttacking(): boolean;

	setLoop(loopAtFrame: number): IAnimation;

	loop(): number;

	save(): IAnimation;

	getID(): number;

	/**
	 * Do not use this unless you know what you are changing. Dangerous to change.
	 */
	setID(id: number): void;

	getTotalTime(): number;

}

