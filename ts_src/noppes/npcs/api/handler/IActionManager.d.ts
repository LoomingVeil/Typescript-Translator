
/**
 * Manages a queue of {@link IAction} instances, allowing scheduling of delayed,
 * repeating, or conditional "tasks" for NPC scripting.
 */
export interface IActionManager extends IObject {
	/**
	 * Begin processing scheduled actions.  Must be called once.
	 * 
	 * @return this action manager
	 */
	start(): IActionManager;

	/**
	 * Halt processing of actions.  Queued actions remain but will not run until
	 * {@link #start()} is called again.
	 * 
	 * @return this action manager
	 */
	stop(): IActionManager;

	/**
	 * Create a new action instance without immediately scheduling it.
	 * 
	 * @param name a unique name for this action
	 * @param maxDuration the maximum lifetime of the action in ticks
	 * @param delay number of ticks to wait before the first run
	 * @param action code to execute each time the action "fires"
	 * @return a fresh {@link IAction} object
	 */
	create(name: string, maxDuration: number, delay: number, action: Consumer): IAction;

	create(maxDuration: number, delay: number, task: Consumer): IAction;

	create(name: string, delay: number, t: Consumer): IAction;

	create(delay: number, t: Consumer): IAction;

	create(name: string, t: Consumer): IAction;

	getName(): string;

	setName(name: string): IActionManager;

	inDebugMode(): boolean;

	/**
	 * Enabling prints to the console the life cycle of IActionManager, it's IActionQueues and the scheduled IActions
	 * 
	 * @param debug whether to enable debug logging
	 * @return this action manager
	 */
	setDebugMode(debug: boolean): IActionManager;

	create(name: string): IAction;

	create(t: Consumer): IAction;

	/**
	 * Schedule a conditional action that gives up after at most maxChecks attempts.
	 * 
	 * @param condition checked every tick, if it returns true, task is fired
	 * @param task code to run once condition first becomes true
	 * @return the action scheduled
	 */
	create(condition: Function, task: Consumer): IConditionalAction;

	/**
	 * Schedule a conditional action that gives up after at most maxChecks attempts.
	 * 
	 * @param name unique name
	 * @param condition checked every tick, if it returns true, task is fired
	 * @param task code to run once condition first becomes true
	 * @return the action scheduled
	 */
	create(name: string, condition: Function, task: Consumer): IConditionalAction;

	/**
	 * Schedule a conditional action that gives up after at most maxChecks attempts.
	 * 
	 * @param condition checked every tick, if it returns true, task is fired
	 * @param task code to run once condition first becomes true
	 * @param terminateWhen checked every tick, if it returns true, action is terminated (gets marked done)
	 * @return the action scheduled
	 */
	create(condition: Function, task: Consumer, terminateWhen: Function): IConditionalAction;

	/**
	 * Schedule a conditional action that gives up after at most maxChecks attempts.
	 * 
	 * @param name unique name
	 * @param condition checked every tick, if it returns true, task is fired
	 * @param task code to run once condition first becomes true
	 * @param terminateWhen checked every tick, if it returns true, action is terminated (gets marked done)
	 * @return the action scheduled
	 */
	create(name: string, condition: Function, task: Consumer, terminateWhen: Function): IConditionalAction;

	/**
	 * Schedule a conditional action that gives up after at most maxChecks attempts.
	 * 
	 * @param condition checked every tick, if it returns true, task is fired
	 * @param task code to run once condition first becomes true
	 * @param terminateWhen checked every tick, if it returns true, action is terminated (gets marked done)
	 * @param onTermination code to run when the termination condition returns true
	 * @return the action scheduled
	 */
	create(condition: Function, task: Consumer, terminateWhen: Function, onTermination: Consumer): IConditionalAction;

	/**
	 * Schedule a conditional action that gives up after at most maxChecks attempts.
	 * 
	 * @param name unique name
	 * @param condition checked every tick, if it returns true, task is fired
	 * @param task code to run once condition first becomes true
	 * @param terminateWhen checked every tick, if it returns true, action is terminated (gets marked done)
	 * @param onTermination code to run when the termination condition returns true
	 * @return the action scheduled
	 */
	create(name: string, condition: Function, task: Consumer, terminateWhen: Function, onTermination: Consumer): IConditionalAction;

	createQueue(name: string): IActionQueue;

	createQueue(name: string, isParallel: boolean): IActionQueue;

	getOrCreateQueue(name: string): IActionQueue;

	getOrCreateQueue(name: string, isParallel: boolean): IActionQueue;

	getQueue(name: string): IActionQueue;

	hasQueue(name: string): boolean;

	/**
	 * @param name the name for the new action
	 * @return True if queue successfully removed from IActionManager and cleared
	 */
	removeQueue(name: string): boolean;

	/**
	 * Retrieve the entire action queue.
	 * 
	 * @return live reference to the internal {@link Queue} of actions
	 */
	getSequentialQueue(): IActionQueue;

	/**
	 * Schedule an existing action for execution.
	 * 
	 * @param action the action to enqueue
	 * @return the action scheduled
	 */
	schedule(action: IAction): IAction;

	/**
	 * Multiple actions chained one after another
	 * i.e schedule(act1,act2,act3,...)
	 * 
	 * @param actions the actions to schedule
	 */
	schedule(actions: IAction): void;

	/**
	 * Convenience for {@link #create(Consumer)} + enqueue.
	 * 
	 * @param task code to execute each time the task "fires"
	 * @return the task scheduled
	 */
	schedule(task: Consumer): IAction;

	/**
	 * Multiple tasks chained one after another
	 * i.e schedule(task1,task2,task3,...)
	 * 
	 * @param tasks the task consumers to schedule
	 */
	schedule(tasks: Consumer): void;

	/**
	 * Convenience for {@link #create(String, Consumer)} + enqueue.
	 * 
	 * @param delay number of ticks to wait before the first task run
	 * @param task code to execute each time the task "fires"
	 * @return the task scheduled
	 */
	schedule(delay: number, task: Consumer): IAction;

	/**
	 * Convenience for {@link #create(String, Consumer)} + enqueue.
	 * 
	 * @param name a unique name for this action
	 * @param task code to execute each time the task "fires"
	 * @return the task scheduled
	 */
	schedule(name: string, task: Consumer): IAction;

	/**
	 * Convenience for {@link #create(String, int, Consumer)} + enqueue.
	 * 
	 * @param name a unique name for this action
	 * @param delay number of ticks to wait before the first task run
	 * @param task code to execute each time the task "fires"
	 * @return the task scheduled
	 */
	schedule(name: string, delay: number, task: Consumer): IAction;

	/**
	 * Convenience for {@link #create(String, int, int, Consumer)} + enqueue.
	 * 
	 * @param name a unique name for this action
	 * @param maxDuration the maximum lifetime of the action in ticks
	 * @param delay number of ticks to wait before the first task run
	 * @param task code to execute each time the task "fires"
	 * @return the task scheduled
	 */
	schedule(name: string, maxDuration: number, delay: number, task: Consumer): IAction;

	schedule(maxDuration: number, delay: number, task: Consumer): IAction;

	/**
	 * Insert an action at a specific position in the queue.
	 * 
	 * @param index zero-based queue position to insert at
	 * @param action the action to insert
	 * @return the action scheduled
	 */
	scheduleActionAt(index: number, action: IAction): IAction;

	/**
	 * @return the list of all conditional actions scheduled
	 */
	getConditionalQueue(): IActionQueue;

	schedule(action: IConditionalAction): IConditionalAction;

	/**
	 * Multiple conditionals
	 * i.e schedule(act1,act2,act3,...)
	 * 
	 * @param actions the conditional actions to schedule
	 */
	schedule(actions: IConditionalAction): void;

	/**
	 * Schedule a conditional action that gives up after at most maxChecks attempts.
	 * 
	 * @param condition checked every tick, if it returns true, task is fired
	 * @param task code to run once condition first becomes true
	 * @return the action scheduled
	 */
	schedule(condition: Function, task: Consumer): IConditionalAction;

	/**
	 * Schedule a conditional action that gives up after at most maxChecks attempts.
	 * 
	 * @param condition checked every tick, if it returns true, task is fired
	 * @param task code to run once condition first becomes true
	 * @param terminateWhen checked every tick, if it returns true, action is terminated (gets marked done)
	 * @return the action scheduled
	 */
	schedule(condition: Function, task: Consumer, terminateWhen: Function): IConditionalAction;

	/**
	 * Schedule a conditional action that gives up after at most maxChecks attempts.
	 * 
	 * @param condition checked every tick, if it returns true, task is fired
	 * @param task code to run once condition first becomes true
	 * @param terminateWhen checked every tick, if it returns true, action is terminated (gets marked done)
	 * @param onTermination code to run when the termination condition returns true
	 * @return the action scheduled
	 */
	schedule(condition: Function, task: Consumer, terminateWhen: Function, onTermination: Consumer): IConditionalAction;

	/**
	 * Schedule a conditional action that gives up after at most maxChecks attempts.
	 * 
	 * @param name unique name
	 * @param condition checked every tick, if it returns true, task is fired
	 * @param task code to run once condition first becomes true
	 * @return the action scheduled
	 */
	schedule(name: string, condition: Function, task: Consumer): IConditionalAction;

	/**
	 * Schedule a conditional action that gives up after at most maxChecks attempts.
	 * 
	 * @param name unique name
	 * @param condition checked every tick, if it returns true, task is fired
	 * @param task code to run once condition first becomes true
	 * @param terminateWhen checked every tick, if it returns true, action is terminated (gets marked done)
	 * @return the action scheduled
	 */
	schedule(name: string, condition: Function, task: Consumer, terminateWhen: Function): IConditionalAction;

	/**
	 * Schedule a conditional action that gives up after at most maxChecks attempts.
	 * 
	 * @param name unique name
	 * @param condition checked every tick, if it returns true, task is fired
	 * @param task code to run once condition first becomes true
	 * @param terminateWhen checked every tick, if it returns true, action is terminated (gets marked done)
	 * @param onTermination code to run when the termination condition returns true
	 * @return the action scheduled
	 */
	schedule(name: string, condition: Function, task: Consumer, terminateWhen: Function, onTermination: Consumer): IConditionalAction;

	/**
	 * @return the list of all parallel actions scheduled
	 */
	getParallelQueue(): IActionQueue;

	scheduleParallel(action: IAction): IAction;

	/**
	 * Multiple actions in parallel
	 * i.e scheduleParallel(act1,act2,act3,...)
	 * 
	 * @param actions the actions to run in parallel
	 */
	scheduleParallel(actions: IAction): void;

	scheduleParallel(task: Consumer): IAction;

	scheduleParallel(tasks: Consumer): void;

	scheduleParallel(delay: number, task: Consumer): IAction;

	scheduleParallel(maxDuration: number, delay: number, task: Consumer): IAction;

	scheduleParallel(name: string, task: Consumer): IAction;

	scheduleParallel(name: string, delay: number, task: Consumer): IAction;

	scheduleParallel(name: string, maxDuration: number, delay: number, task: Consumer): IAction;

	/**
	 * @return All the IActionQueues within this Manager, including main sequential, parallel and conditional
	 */
	getAllQueues(): IActionQueue[];

	/**
	 * @param name action name to check for
	 * @return true if action is scheduled in any of the available  queues
	 */
	hasAny(name: string): boolean;

	/**
	 * @param name the name for the new parallel action
	 * @return Checks through all available queues and fetches the first IAction with given name
	 */
	getAny(name: string): IAction;

	/**
	 * Checks through all available queues and cancels (remove) the first action with the given name.
	 * 
	 * @param name the name assigned when scheduling
	 * @return true if one was found and removed, false otherwise
	 */
	cancelAny(name: string): boolean;

	/**
	 * Clears all available queues and kills all of their scheduled IActions.
	 */
	clear(): void;

	/**
	 * @return a chain that can be used to fire Actions sequentially based on sequentialQueue
	 */
	chain(): IActionChain;

	/**
	 * @return a chain that can be used to fire Actions in parallel based on parallelQueue
	 */
	parallelChain(): IActionChain;

	/**
	 * @return a string containing all the IActionQueues active within the manager
	 */
	printQueues(): string;
}

