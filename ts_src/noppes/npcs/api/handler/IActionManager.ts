import { IObject } from "./../../../../IObject";
import { IAction } from "./data/IAction";
import { IActionChain } from "./data/IActionChain";
import { IConditionalAction } from "./data/actions/IConditionalAction";

import { Consumer } from "./../../../../missingTypes";
import { Supplier } from "./../../../../missingTypes";
import { List } from "./../../../../missingTypes";
import { Queue } from "./../../../../missingTypes";

/**
 * Manages a queue of {@link IAction} instances, allowing scheduling of delayed,
 * repeating, or conditional "tasks" for NPC scripting.
 */
export interface IActionManager extends IObject {
	/**
	 * Create a new action instance without immediately scheduling it.
	 * 
	 * @param name a unique name for this action
	 * @param maxDuration the maximum lifetime of the action in ticks
	 * @param startAfterTicks number of ticks to wait before the first run
	 * @param action code to execute each time the action "fires"
	 * @return a fresh {@link IAction} object
	 */
	create(name: string, maxDuration: number, startAfterTicks: number, action: Consumer): IAction;

	create(name: string, delay: number, t: Consumer): IAction;

	create(delay: number, t: Consumer): IAction;

	create(name: string, t: Consumer): IAction;

	create(name: string): IAction;

	create(t: Consumer): IAction;

	/**
	 * Schedule a conditional action that gives up after at most maxChecks attempts.
	 * 
	 * @param condition supplier checked every tick, if it returns true, task is fired
	 * @param task code to run once condition first becomes true
	 * @return the action scheduled
	 */
	create(condition: Supplier, task: Consumer): IConditionalAction;

	/**
	 * Schedule a conditional action that gives up after at most maxChecks attempts.
	 * 
	 * @param name unique name
	 * @param condition supplier checked every tick, if it returns true, task is fired
	 * @param task code to run once condition first becomes true
	 * @return the action scheduled
	 */
	create(name: string, condition: Supplier, task: Consumer): IConditionalAction;

	/**
	 * Schedule a conditional action that gives up after at most maxChecks attempts.
	 * 
	 * @param condition supplier checked every tick, if it returns true, task is fired
	 * @param task code to run once condition first becomes true
	 * @param terminateWhen supplier checked every tick, if it returns true, action is terminated (gets marked done)
	 * @return the action scheduled
	 */
	create(condition: Supplier, task: Consumer, terminateWhen: Supplier): IConditionalAction;

	/**
	 * Schedule a conditional action that gives up after at most maxChecks attempts.
	 * 
	 * @param name unique name
	 * @param condition supplier checked every tick, if it returns true, task is fired
	 * @param task code to run once condition first becomes true
	 * @param terminateWhen supplier checked every tick, if it returns true, action is terminated (gets marked done)
	 * @return the action scheduled
	 */
	create(name: string, condition: Supplier, task: Consumer, terminateWhen: Supplier): IConditionalAction;

	/**
	 * Schedule a conditional action that gives up after at most maxChecks attempts.
	 * 
	 * @param condition supplier checked every tick, if it returns true, task is fired
	 * @param task code to run once condition first becomes true
	 * @param terminateWhen supplier checked every tick, if it returns true, action is terminated (gets marked done)
	 * @param onTermination code to run when the termination condition returns true
	 * @return the action scheduled
	 */
	create(condition: Supplier, task: Consumer, terminateWhen: Supplier, onTermination: Consumer): IConditionalAction;

	/**
	 * Schedule a conditional action that gives up after at most maxChecks attempts.
	 * 
	 * @param name unique name
	 * @param condition supplier checked every tick, if it returns true, task is fired
	 * @param task code to run once condition first becomes true
	 * @param terminateWhen supplier checked every tick, if it returns true, action is terminated (gets marked done)
	 * @param onTermination code to run when the termination condition returns true
	 * @return the action scheduled
	 */
	create(name: string, condition: Supplier, task: Consumer, terminateWhen: Supplier, onTermination: Consumer): IConditionalAction;

	/**
	 * Begin processing scheduled actions.  Must be called once.
	 */
	start(): void;

	/**
	 * Halt processing of actions.  Queued actions remain but will not run until
	 * {@link #start()} is called again.
	 */
	stop(): void;

	/**
	 * Schedule an existing action for execution.
	 * 
	 * @param action the action to enqueue
	 * @return the action scheduled
	 */
	scheduleAction(action: IAction): IAction;

	/**
	 * Convenience for {@link #create(String, int, int, Consumer)} + enqueue.
	 * 
	 * @param name a unique name for this action
	 * @param maxDuration the maximum lifetime of the action in ticks
	 * @param startAfterTicks number of ticks to wait before the first run
	 * @param action code to execute each time the action "fires"
	 * @return the action scheduled
	 */
	scheduleAction(name: string, maxDuration: number, startAfterTicks: number, action: Consumer): IAction;

	/**
	 * Insert an action at a specific position in the queue.
	 * 
	 * @param index zero-based queue position to insert at
	 * @param action the action to insert
	 * @return the action scheduled
	 */
	scheduleActionAt(index: number, action: IAction): IAction;

	/**
	 * Get the zero-based position of an action in the queue.
	 * 
	 * @param action the action to look up
	 * @return its index, or -1 if not found
	 */
	getIndex(action: IAction): number;

	/**
	 * Peek at the next action to run (the head of the queue).
	 * 
	 * @return the current head action, or null if queue is empty
	 */
	getCurrentAction(): IAction;

	/**
	 * Retrieve the entire action queue.
	 * 
	 * @return live reference to the internal {@link Queue} of actions
	 */
	getActionQueue(): Queue;

	/**
	 * Schedule a conditional action that gives up after at most maxChecks attempts.
	 * 
	 * @param name unique name
	 * @param condition supplier checked every tick, if it returns true, task is fired
	 * @param task code to run once condition first becomes true
	 * @return the action scheduled
	 */
	scheduleAction(name: string, condition: Supplier, task: Consumer): IConditionalAction;

	/**
	 * Schedule a conditional action that gives up after at most maxChecks attempts.
	 * 
	 * @param name unique name
	 * @param condition supplier checked every tick, if it returns true, task is fired
	 * @param task code to run once condition first becomes true
	 * @param terminateWhen supplier checked every tick, if it returns true, action is terminated (gets marked done)
	 * @return the action scheduled
	 */
	scheduleAction(name: string, condition: Supplier, task: Consumer, terminateWhen: Supplier): IConditionalAction;

	/**
	 * Schedule a conditional action that gives up after at most maxChecks attempts.
	 * 
	 * @param name unique name
	 * @param condition supplier checked every tick, if it returns true, task is fired
	 * @param task code to run once condition first becomes true
	 * @param terminateWhen supplier checked every tick, if it returns true, action is terminated (gets marked done)
	 * @param onTermination code to run when the termination condition returns true
	 * @return the action scheduled
	 */
	scheduleAction(name: string, condition: Supplier, task: Consumer, terminateWhen: Supplier, onTermination: Consumer): IConditionalAction;

	scheduleAction(action: IConditionalAction): IConditionalAction;

	/**
	 * @return the list of all conditional actions
	 */
	getConditionalActions(): List;

	/**
	 * Cancel (remove) the first queued action with the given name.
	 * 
	 * @param name the name assigned when scheduling
	 * @return true if one was found and removed, false otherwise
	 */
	cancelAction(name: string): boolean;

	/**
	 * Remove every scheduled action immediately.
	 */
	clear(): void;

	/**
	 * Convenience: create and enqueue a normal repeating task.
	 */
	addTask(name: string, maxDuration: number, startAfterTicks: number, task: Consumer): void;

	/**
	 * Convenience: create & enqueue a task that will fire exactly once
	 * after the given delay, and then auto-complete.
	 * 
	 * @param name a unique name for this action
	 * @param startAfterTicks delay before it runs (in ticks)
	 * @param task code to execute once
	 */
	addSingleTask(name: string, startAfterTicks: number, task: Consumer): void;

	/**
	 * Same as above, but fires immediately (no delay).
	 */
	addSingleTask(name: string, task: Consumer): void;

	/**
	 * Convenience: create & enqueue a conditional task that re-checks forever.
	 */
	addConditionalTask(name: string, condition: Supplier, task: Consumer): void;

	/**
	 * Convenience: create & enqueue a conditional task that gives up after maxChecks.
	 */
	addConditionalTask(name: string, condition: Supplier, task: Consumer, terminateWhen: Supplier): void;

	scheduleParallelAction(action: IAction): IAction;

	chain(): IActionChain;

	parallelChain(): IActionChain;

}

