import { IAnimationData } from "./../handler/data/IAnimationData";
import { IObject } from "./../../../../IObject";


/**
 * Represents an entity capable of playing animations.
 * Provides access to its animation data.
 */
export interface IAnimatable extends IObject {
	/**
	 * Returns the animation data associated with this entity.
	 * 
	 * @return the animation data.
	 */
	getAnimationData(): IAnimationData;

}
}
