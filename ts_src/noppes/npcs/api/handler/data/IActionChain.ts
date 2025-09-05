import { IObject } from "./../../../../../IObject";

import { Consumer } from "./../../../../../missingTypes";

export interface IActionChain extends IObject {
	after(delay: number, name: string, task: Consumer): IActionChain;

	after(delay: number, task: Consumer): IActionChain;

}
}
