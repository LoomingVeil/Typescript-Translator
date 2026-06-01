
export interface IActionQueue extends IObject {
	/**
	 * @return starts the processing of scheduled IActions in queue.
	 * Queue is on by default
	 */
	start(): IActionQueue;

	/**
	 * @return pauses the processing of scheduled IActions
	 */
	stop(): IActionQueue;

	getManager(): IActionManager;

	getName(): string;

	/**
	 * @return True if parallel, else is sequential
	 */
	isParallel(): boolean;

	/**
	 * @return actual java queue which stores all scheduled IActions
	 */
	getQueue(): Queue;

	/**
	 * @param parallel True to turn queue into parallel, false for sequential
	 * @return this IActionQueue for method chaining
	 */
	setParallel(parallel: boolean): IActionQueue;

	/**
	 * @return If true, auto-stops queue when empty/no active Actions scheduled using {{@link #stop()}}
	 */
	isStoppedWhenEmpty(): boolean;

	/**
	 * @param stopWhenEmpty to auto-stop queue when empty/no active Actions scheduled using {{@link #stop()}}
	 * @return this IActionQueue for method chaining
	 */
	stopWhenEmpty(stopWhenEmpty: boolean): IActionQueue;

	/**
	 * @return True to auto-remove this queue from the IActionManager when no IActions are scheduled or queue is empty
	 * Default: true
	 */
	isKilledWhenEmpty(): boolean;

	/**
	 * @return ticks it takes to remove this queue from IActionManager after {{@link #isKilledWhenEmpty()}} is satisfied
	 * If an IAction is scheduled after it's satisfied, the kill process is aborted.
	 * Default: 100 ticks
	 */
	getKillWhenEmptyAfter(): number;

	killWhenEmpty(killWhenEmpty: boolean): IActionQueue;

	/**
	 * @param ticks to kill queue after when killWhenEmpty and queue has no active tasks
	 *              If an IAction is scheduled during the kill process, process is aborted
	 * @return this IActionQueue for method chaining
	 */
	killWhenEmptyAfter(ticks: number): IActionQueue;

	/**
	 * @return True if queue was removed from IActionManager or killed
	 */
	isDead(): boolean;

	/**
	 * @return kills queue and removes it from IActionManager immediately
	 */
	kill(): IActionQueue;

	schedule(action: IAction): IAction;

	schedule(actions: IAction): void;

	schedule(tasks: Consumer): void;

	schedule(task: Consumer): IAction;

	schedule(delay: number, task: Consumer): IAction;

	schedule(maxDuration: number, delay: number, task: Consumer): IAction;

	schedule(name: string, task: Consumer): IAction;

	schedule(name: string, delay: number, task: Consumer): IAction;

	schedule(name: string, maxDuration: number, delay: number, task: Consumer): IAction;

	scheduleActionAt(index: number, action: IAction): IAction;

	hasActiveTasks(): boolean;

	/**
	 * @param action the action to find in the queue
	 * @return index of action in {{@link #getQueue()}}
	 * -1 if not in queue.
	 */
	getIndex(action: IAction): number;

	/**
	 * @return current IAction the queue is at. For sequential use.
	 */
	getCurrentAction(): IAction;

	has(action: IAction): boolean;

	has(actionName: string): boolean;

	get(actionName: string): IAction;

	cancel(action: IAction): boolean;

	cancel(actionName: string): boolean;

	/**
	 * Kills all IActions in {{@link #getQueue()}} and empties it
	 */
	clear(): void;

	chain(): IActionChain;

	/**
	 * @return a string containing all the scheduled actions within this queue
	 */
	printQueue(): string;
}

