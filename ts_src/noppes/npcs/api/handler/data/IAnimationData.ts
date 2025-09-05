import { IObject } from "./../../../../../IObject";
import { IAnimation } from "./IAnimation";
import { IAnimatable } from "./../../entity/IAnimatable";


/**
 * Holds and manages animation data for an animatable entity.
 * This includes the current animation, its timing, and the ability to update
 * the animation state on clients.
 */
export interface IAnimationData extends IObject {
	/**
	 * Retrieves the animatable entity this data is associated with.
	 * 
	 * @return the animatable entity.
	 */
	getEntity(): IAnimatable;

	/**
	 * Updates the animation data on the client side.
	 */
	updateClient(): void;

	/**
	 * Checks whether the current animation is active.
	 * 
	 * @return true if an animation is active; false otherwise.
	 */
	isActive(): boolean;

	/**
	 * Checks whether the client is currently animating.
	 * 
	 * @return true if client animation is active; false otherwise.
	 */
	isClientAnimating(): boolean;

	/**
	 * Enables or disables animations for the entity.
	 * 
	 * @param enabled true to enable animations; false to disable.
	 */
	setEnabled(enabled: boolean): void;

	/**
	 * Checks if animations are enabled.
	 * 
	 * @return true if enabled; false otherwise.
	 */
	enabled(): boolean;

	/**
	 * Sets the current animation.
	 * 
	 * @param animation the animation to set.
	 */
	setAnimation(animation: IAnimation): void;

	/**
	 * Returns the current animation.
	 * 
	 * @return the animation, or null if none is set.
	 */
	getAnimation(): IAnimation;

	/**
	 * Returns the total time the current animation has been running.
	 * 
	 * @return the animating time in ticks.
	 */
	getAnimatingTime(): number;

}
}
