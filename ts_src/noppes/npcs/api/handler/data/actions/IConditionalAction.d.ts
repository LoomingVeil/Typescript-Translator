
export interface IConditionalAction extends IAction {
	/**
	 * @param condition checked every tick, if it returns true, task is fired
	 * @return this action
	 */
	setCondition(condition: Function): IConditionalAction;

	/**
	 * @param terminateWhen checked every tick, if it returns true, action is terminated (gets marked done)
	 * @return this action
	 */
	terminateWhen(terminateWhen: Function): IConditionalAction;

	/**
	 * @param onTermination code to run when the termination condition returns true
	 * @return this action
	 */
	onTermination(onTermination: Consumer): IConditionalAction;

	/**
	 * @return true if condition was satisfied and task ran  (i.e can be called in termination task to see if original task was executed
	 * then do code based on that, if not return early)
	 */
	wasTaskExecuted(): boolean;

	/**
	 * Note: Only for Conditional Actions
	 * 
	 * @return how many times this conditional action has tested its condition
	 */
	getCheckCount(): number;

	/**
	 * Note: Only for Conditional Actions
	 * 
	 * @return the maximum number of checks before auto-expiring, or -1 if unlimited
	 */
	getMaxChecks(): number;

	/**
	 * @return True if condition provided by {{@link #terminateWhen(Function)}} is satisfied
	 * Can be called directly in the IAction's task.
	 * Can only be true once, as action is marked done immediately after.
	 */
	isTerminated(): boolean;

	/**
	 * @param maxChecks maximum times to test condition before auto-cancelling
	 * @return this action
	 */
	setMaxChecks(maxChecks: number): IConditionalAction;
}

