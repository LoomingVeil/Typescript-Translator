
export interface IActionChain extends IObject {
	getName(): string;

	/**
	 * @param name of chain
	 * @return this IActionChain for method chaining
	 */
	setName(name: string): IActionChain;

	/**
	 * @return queue this chain is scheduled on
	 */
	getQueue(): IActionQueue;

	/**
	 * @param delay ticks between an IAction and another
	 * @param name name of IAction
	 * @param task task of IAction
	 * @return this IActionChain for method chaining
	 */
	after(delay: number, name: string, task: Consumer): IActionChain;

	after(delay: number, task: Consumer): IActionChain;

	/**
	 * Start IActionManager
	 * 
	 * @return this IActionChain for method chaining
	 */
	start(): IActionChain;
}

