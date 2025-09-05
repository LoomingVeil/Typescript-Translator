import { IObject } from "./../../../../../IObject";
import { IActionManager } from "./../IActionManager";

import { Consumer } from "./../../../../../missingTypes";

/**
 * Represents a single "task" that can be executed over multiple ticks,
 * supports delayed start, limited duration, repeating intervals, data storage,
 * and chaining to neighboring tasks.
 */
export interface IAction extends IObject {
	/**
	 * @param task code to execute each time the action fires
	 * @return
	 */
	setTask(task: Consumer): IAction;

	/**
	 * @return action manager the action is scheduled on
	 */
	getManager(): IActionManager;

	/**
	 * @return how many times this action’s {@code action.accept(this)} callback has run (or how many times task ran)
	 */
	getCount(): number;

	/**
	 * @return how many ticks have elapsed since this action actually began (excluding start delay)
	 */
	getDuration(): number;

	/**
	 * @return the name given at creation/scheduling time
	 */
	getName(): string;

	/**
	 * @return the maximum number of ticks this action is allowed to run before auto-terminating
	 */
	getMaxDuration(): number;

	setMaxDuration(x: number): IAction;

	/**
	 * Mark this action as complete.  Once done, it will be removed on the next tick.
	 */
	markDone(): void;

	/**
	 * @return true if {@link #markDone()} was called (or maxDuration reached)
	 */
	isDone(): boolean;

	/**
	 * Retrieve arbitrary per-action data.
	 * 
	 * @param key a string key
	 * @return the stored value, or null if not set
	 */
	getData(key: string): any;

	/**
	 * Store arbitrary per-action data.
	 * 
	 * @param key a string key
	 * @param value any object to associate with this action
	 */
	setData(key: string, value: any): IAction;

	removeData(key: string): IAction;

	hasData(key: string): boolean;

	/**
	 * @return how many ticks between each invocation of the action callback
	 */
	getUpdateEveryXTick(): number;

	/**
	 * Set how many ticks between each invocation of the action callback.
	 * 
	 * @param X tick interval (e.g. 1 = every tick, 20 = once per second)
	 */
	setUpdateEveryXTick(X: number): IAction;

	/**
	 * @return how many ticks remain before the action begins (initial delay)
	 */
	getStartAfterTicks(): number;

	/**
	 * @param ticks pauses action for this number of ticks (any subsequent action is paused too)
	 * @return
	 */
	pauseFor(ticks: number): IAction;

	/**
	 * @return the next action in the queue (or null if none or at end)
	 */
	getNext(): IAction;

	/**
	 * @return the previous action in the queue (or null if none or at front)
	 */
	getPrevious(): IAction;

	/**
	 * Enqueue another action immediately after this one.
	 * 
	 * @param after the action to run next
	 */
	after(after: IAction): IAction;

	after(name: string, maxDuration: number, delay: number, t: Consumer): IAction;

	after(name: string, delay: number, t: Consumer): IAction;

	after(delay: number, t: Consumer): IAction;

	after(name: string, t: Consumer): IAction;

	after(t: Consumer): IAction;

	/**
	 * Enqueue another action immediately before this one (pausing this one until done).
	 * 
	 * @param before the action to run prior
	 */
	before(before: IAction): IAction;

	before(name: string, maxDuration: number, delay: number, t: Consumer): IAction;

	before(name: string, delay: number, t: Consumer): IAction;

	before(delay: number, t: Consumer): IAction;

	before(name: string, t: Consumer): IAction;

	before(t: Consumer): IAction;

}
}
