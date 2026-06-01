
/**
 * Events fired during entity animation playback.
 */
export interface IAnimationEvent extends ICustomNPCsEvent {
	/**
	 * @return the animation being played.
	 */
	getAnimation(): IAnimation;

	/**
	 * @return the animation data managing the playback.
	 */
	getAnimationData(): IAnimationData;

	/**
	 * @return the animatable entity playing the animation.
	 */
	getEntity(): IAnimatable;
}

/**
 * Fired when an animation starts playing. Cancelable.
 * 
 * @hookName animationStart
 */
export interface Started extends IAnimationEvent {
	/** Sets whether this event is canceled. */
	setCanceled(status: boolean): void;

	/** Sets whether this event is cancelled. */
	setCancelled(status: boolean): void;
}

/**
 * Fired when an animation finishes playing.
 * 
 * @hookName animationEnd
 */
export interface Ended extends IAnimationEvent {}

/**
 * Events fired when animation frames are entered or exited.
 */
export interface IFrameEvent extends IAnimationEvent {
	/**
	 * @return the frame index.
	 */
	getIndex(): number;

	/**
	 * @return the frame data.
	 */
	getFrame(): IFrame;
}

/**
 * @hookName frameEnter
 */
export interface Entered extends IFrameEvent {}

/**
 * @hookName frameExit
 */
export interface Exited extends IFrameEvent {}

