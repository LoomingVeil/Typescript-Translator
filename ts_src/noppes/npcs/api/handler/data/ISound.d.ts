
/**
 * Represents a sound that can be played at a position or attached to an entity,
 * with configurable volume, pitch, repeat behavior, and position.
 */
export interface ISound extends IObject {
	/**
	 * Attaches this sound to an entity. The sound follows the entity.
	 * 
	 * @param entity the entity to attach to, or null to detach.
	 */
	setEntity(entity: IEntity): void;

	/**
	 * @return the entity this sound is attached to, or null.
	 */
	getEntity(): IEntity;

	/**
	 * @param repeat true to loop this sound.
	 */
	setRepeat(repeat: boolean): void;

	/**
	 * @return true if this sound loops.
	 */
	repeats(): boolean;

	/**
	 * @param delay the delay in ticks between repeats.
	 */
	setRepeatDelay(delay: number): void;

	/**
	 * @return the delay in ticks between repeats.
	 */
	getRepeatDelay(): number;

	/**
	 * @param volume the playback volume (1.0 = normal).
	 */
	setVolume(volume: number): void;

	/**
	 * @return the playback volume.
	 */
	getVolume(): number;

	/**
	 * @param pitch the playback pitch (1.0 = normal).
	 */
	setPitch(pitch: number): void;

	/**
	 * @return the playback pitch.
	 */
	getPitch(): number;

	/**
	 * Sets the position where this sound plays.
	 * 
	 * @param pos the position.
	 */
	setPosition(pos: IPos): void;

	/**
	 * Sets the position where this sound plays.
	 * 
	 * @param x the x coordinate.
	 * @param y the y coordinate.
	 * @param z the z coordinate.
	 */
	setPosition(x: number, y: number, z: number): void;

	/**
	 * @return the x coordinate of the sound position.
	 */
	getX(): number;

	/**
	 * @return the y coordinate of the sound position.
	 */
	getY(): number;

	/**
	 * @return the z coordinate of the sound position.
	 */
	getZ(): number;
}

