
import { Consumer } from "./../../../../../../missingTypes";
import { Supplier } from "./../../../../../../missingTypes";

export interface IConditionalAction extends IAction {
	/**
	 * @param condition supplier checked every tick, if it returns true, task is fired
	 * @return
	 */
	setCondition(condition: Supplier): IConditionalAction;

	/**
	 * @param terminateWhen supplier checked every tick, if it returns true, action is terminated (gets marked done)
	 * @return this action
	 */
	terminateWhen(terminateWhen: Supplier): IConditionalAction;

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
	 * @param maxChecks maximum times to test condition before auto-cancelling
	 * @return this action
	 */
	setMaxChecks(maxChecks: number): IConditionalAction;

	after(after: IConditionalAction): IConditionalAction;

	after(condition: Supplier, task: Consumer): IConditionalAction;

	after(name: string, condition: Supplier, task: Consumer): IConditionalAction;

	after(condition: Supplier, task: Consumer, terminate: Supplier): IConditionalAction;

	after(name: string, condition: Supplier, task: Consumer, terminate: Supplier): IConditionalAction;

	after(condition: Supplier, task: Consumer, terminateWhen: Supplier, onTermination: Consumer): IConditionalAction;

	after(name: string, condition: Supplier, task: Consumer, terminateWhen: Supplier, onTermination: Consumer): IConditionalAction;

}
}
