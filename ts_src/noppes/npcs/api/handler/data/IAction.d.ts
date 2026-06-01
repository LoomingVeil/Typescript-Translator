
/**
 * Represents a single "task" that can be executed over multiple ticks,
 * supports delayed start, limited duration, repeating intervals, data storage,
 * and chaining to neighboring tasks.
 */
export interface IAction extends IObject {
	/**
	 * @return the queue this action is scheduled on. null if not scheduled
	 */
	getQueue(): IActionQueue;

	/**
	 * @param queue Schedules action on this queue. If action was scheduled on different queue, transfers it over from that to this.
	 * @return this action
	 */
	setQueue(queue: IActionQueue): IAction;

	/**
	 * @param task code to execute each time the action fires
	 * @return this action
	 */
	setTask(task: Consumer): IAction;

	/**
	 * @return action manager the action is scheduled on
	 */
	getManager(): IActionManager;

	/**
	 * @return True if was scheduled in the queues using any of the schedule methods, false if was only created.
	 */
	isScheduled(): boolean;

	/**
	 * @return how many times this action’s task has been executed
	 */
	getCount(): number;

	/**
	 * @param task Fires right after action gets scheduled at duration 0
	 * @return this action
	 */
	onStart(task: Consumer): IAction;

	/**
	 * @param task Fires right before a marked done action gets removed from it's IActionQueue
	 * @return this action
	 */
	onDone(task: Consumer): IAction;

	/**
	 * @return how many ticks have elapsed since this action actually began (excluding start delay)
	 */
	getDuration(): number;

	/**
	 * @return the name given at creation/scheduling time
	 */
	getName(): string;

	/**
	 * @return the maximum number of ticks this action is allowed to run before auto marking done
	 * <p>
	 * P.S: If max duration is reached and this IAction's thread (created using {@link #threadify()}) is paused by any of the pausing methods,
	 * the thread is forcibly resumed and finishes the task execution.
	 */
	getMaxDuration(): number;

	/**
	 * @param ticks max duration
	 *              default: -1,  infinite
	 * @return this action
	 */
	setMaxDuration(ticks: number): IAction;

	/**
	 * @return the maximum number of counts this action is allowed to run before auto marking done
	 */
	getMaxCount(): number;

	/**
	 * @param n max count, task auto marks done after running for n counts
	 *          default: -1, infinite
	 * @return this action
	 */
	times(n: number): IAction;

	/**
	 * Execute task only once, mark done
	 * equivalent to times(1)
	 * 
	 * @return this action
	 */
	once(): IAction;

	/**
	 * Mark this action as complete and de-schedules it from its queue.
	 * Forcibly resumes action if paused or had its thread slept with the IAction pausing methods.
	 */
	markDone(): void;

	/**
	 * @return true if {@link #markDone()} was called (or maxDuration reached)
	 */
	isDone(): boolean;

	/**
	 * marks done and safely dumps the action's data and thread
	 */
	kill(): void;

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
	 * @return this action
	 */
	setData(key: string, value: any): IAction;

	removeData(key: string): IAction;

	/**
	 * @param copyTo copies all of this IAction's data to copyTo
	 * @return this action
	 */
	copyDataTo(copyTo: IAction): IAction;

	/**
	 * @return a string containing all the stored data key/values of this IAction
	 */
	printData(): string;

	hasData(key: string): boolean;

	/**
	 * @return how many ticks between each execution of the action's task
	 * Default is 5 ticks (4 times per second)
	 */
	getUpdateEvery(): number;

	/**
	 * Set how many ticks between each execution of the action task.
	 * 
	 * @param ticks tick interval (e.g. 1 = every tick, 20 = once per second)
	 * @return this action
	 */
	updateEvery(ticks: number): IAction;

	/**
	 * Executes task every tick (Sets updateEvery to 1)
	 * 
	 * @return this action
	 */
	everyTick(): IAction;

	/**
	 * Executes task every second (Sets updateEvery to 20)
	 * 
	 * @return this action
	 */
	everySecond(): IAction;

	/**
	 * @return how many ticks remain before the action begins (initial delay)
	 */
	getStartAfterTicks(): number;

	/**
	 * @param ticks pauses action for this number of ticks (any subsequent action is paused too)
	 *              If action was threaded using {@link #threadify()}, sleeps the thread.
	 *              Can be forcibly resumed using {@link #resume()}
	 * @return this action
	 */
	pauseFor(ticks: number): IAction;

	pauseFor(millis: number): IAction;

	/**
	 * Must call {@link #threadify()} before using, else throws exception.
	 * Pauses IAction's thread until {@link #resume()} is called.
	 */
	pause(): void;

	/**
	 * Must call {@link #threadify()} before using, else throws exception.
	 * Pauses IAction's thread until the supplied condition is satisfied or {@link #resume()} is called.
	 * 
	 * @param until condition to check each tick
	 */
	pauseUntil(until: Function): void;

	/**
	 * Resumes thread that was previously paused by {@link #pause()},  {@link #pauseUntil(Function)}, {@link #pauseFor(int)} or {@link #pauseFor(long)}
	 * Must be called from a different thread than the IAction one, as that one is paused, so it won't reach this function if it comes after any of the pausing functions.
	 */
	resume(): void;

	/**
	 * @return checks if IAction's getStartAfterTicks &gt; 0, or if IAction's thread is paused if threaded
	 * Preferably called from a different thread than the IAction one if it's paused.
	 */
	isPaused(): boolean;

	/**
	 * @return "{Type} '{Name}'" of action i.e "Action 'one'" or "ConditionalAction 'two'"
	 */
	getIdentifier(): string;

	/**
	 * Creates a new thread for task to run into. Allows for pausing and sleeping just this IAction's thread.
	 * 
	 * @return this action
	 */
	threadify(): IAction;

	/**
	 * @return starts the IActionManager
	 */
	start(): IAction;

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
	 * @return the chained action
	 */
	after(after: IAction): IAction;

	/**
	 * Multiple actions chained one after another
	 * i.e after(act1,act2,act3,...)
	 * 
	 * @param actions the actions to chain
	 */
	after(actions: IAction): void;

	/**
	 * Multiple tasks chained one after another
	 * i.e after(task1,task2,task3,...)
	 * 
	 * @param tasks the tasks to chain
	 */
	after(tasks: Consumer): void;

	after(name: string, maxDuration: number, delay: number, t: Consumer): IAction;

	after(name: string, delay: number, t: Consumer): IAction;

	after(delay: number, t: Consumer): IAction;

	after(name: string, t: Consumer): IAction;

	after(t: Consumer): IAction;

	/**
	 * Enqueue another action immediately before this one (pausing this one until done).
	 * 
	 * @param before the action to run prior
	 * @return the chained action
	 */
	before(before: IAction): IAction;

	before(name: string, maxDuration: number, delay: number, t: Consumer): IAction;

	before(name: string, delay: number, t: Consumer): IAction;

	before(delay: number, t: Consumer): IAction;

	before(name: string, t: Consumer): IAction;

	before(t: Consumer): IAction;

	/**
	 * Enqueue an IConditionalAction on the conditional chain
	 * 
	 * @param after the scheduled IConditionalAction
	 * @return the conditional action
	 */
	conditional(after: IConditionalAction): IConditionalAction;

	conditional(actions: IConditionalAction): void;

	conditional(condition: Function, task: Consumer): IConditionalAction;

	conditional(name: string, condition: Function, task: Consumer): IConditionalAction;

	conditional(condition: Function, task: Consumer, terminate: Function): IConditionalAction;

	conditional(name: string, condition: Function, task: Consumer, terminate: Function): IConditionalAction;

	conditional(condition: Function, task: Consumer, terminateWhen: Function, onTermination: Consumer): IConditionalAction;

	conditional(name: string, condition: Function, task: Consumer, terminateWhen: Function, onTermination: Consumer): IConditionalAction;

	/**
	 * Enqueue another IAction on the parallel chain which starts firing simultaneously as this.
	 * 
	 * @param after the scheduled parallel action
	 * @return the parallel action
	 */
	parallel(after: IAction): IAction;

	parallel(actions: IAction): void;

	parallel(task: Consumer): IAction;

	parallel(tasks: Consumer): void;

	parallel(delay: number, task: Consumer): IAction;

	parallel(name: string, task: Consumer): IAction;

	parallel(name: string, startAfterTicks: number, task: Consumer): IAction;

	parallel(name: string, maxDuration: number, delay: number, t: Consumer): IAction;
}

