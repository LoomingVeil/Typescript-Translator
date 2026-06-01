
export interface IAnimationHandler extends IObject {
	saveAnimation(animation: IAnimation): IAnimation;

	delete(name: string): void;

	delete(id: number): void;

	has(name: string): boolean;

	get(name: string): IAnimation;

	get(id: number): IAnimation;

	getAnimations(): IAnimation[];

	/**
	 * Get all built-in animations.
	 * Built-in animations are read-only and cannot be modified or deleted.
	 * 
	 * @return array of all built-in animations
	 */
	getBuiltInAnimations(): IAnimation[];

	/**
	 * Get all animations (both built-in and user-created).
	 * 
	 * @return array of all animations (built-in and custom)
	 */
	getAllAnimations(): IAnimation[];

	/**
	 * Check if an animation name is a built-in animation.
	 * 
	 * @param name The animation name to check
	 * @return true if this is a built-in animation
	 */
	isBuiltIn(name: string): boolean;

	/**
	 * Get names of all built-in animations.
	 * 
	 * @return array of all built-in animation names
	 */
	getBuiltInAnimationNames(): string[];
}

