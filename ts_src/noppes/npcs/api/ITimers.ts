import { IObject } from "./../../../IObject";


export interface ITimers extends IObject {
	timerIds(): number[];

	/**
	 * Adds a timer to the NPC or player with the given attributes. If this function is used and there is already a
	 * timer with the given ID, an exception will be thrown.
	 * 
	 * @param id The id of the timer.
	 * @param ticks The amount of ticks before the timer ends.
	 * @param repeat Whether this timer repeats when it reaches its maximum amount of ticks.
	 */
	start(id: number, ticks: number, repeat: boolean): void;

	/**
	 * Adds a timer to the NPC or player with the given attributes. No exception will be thrown if there is already a
	 * timer with the given ID when using this function.
	 * 
	 * @param id The id of the timer.
	 * @param ticks The amount of ticks before the timer ends.
	 * @param repeat Whether this timer repeats when it reaches its maximum amount of ticks.
	 */
	forceStart(id: number, ticks: number, repeat: boolean): void;

	/**
	 * @return True if the set of timers contains a timer with the given id, false otherwise.
	 */
	has(id: number): boolean;

	/**
	 * Stops the timer with the given id
	 * 
	 * @return True if there was a timer with the given id.
	 */
	stop(id: number): boolean;

	/**
	 * Resets the ticks elapsed in the timer with the given id to 0.
	 */
	reset(id: number): void;

	/**
	 * Removes all timers.
	 */
	clear(): void;

	/**
	 * @return The amount of ticks elapsed in the timer.
	 */
	ticks(id: number): number;

	/**
	 * Sets the amount of ticks elapsed in the timer with the given id to a different value.
	 * 
	 * @param ticks The new ticks elapsed by the timer.
	 */
	setTicks(id: number, ticks: number): void;

	/**
	 * @return The maximum amount of ticks the timer with the given id runs for before it stops.
	 */
	maxTicks(id: number): number;

	/**
	 * Sets the maximum amount of ticks the timer with the given id can run for before it stops.
	 */
	setMaxTicks(id: number, maxTicks: number): void;

	/**
	 * @return True if the timer with the given id repeats, false otherwise.
	 */
	repeats(id: number): boolean;

	/**
	 * Sets whether the timer with the given id repeats or not.
	 */
	setRepeats(id: number, repeat: boolean): void;

	/**
	 * @return The amount of timers in the set of timers.
	 */
	size(): number;

}

