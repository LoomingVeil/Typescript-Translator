import { IObject } from "./../../../../../IObject";


export interface IProfileOptions extends IObject {
	hasProfileOptions(): boolean;

	setProfileOptions(enable: boolean): void;

	/**
	 * @param profileType 0:Individual, 1:Shared
	 */
	setCooldownControl(profileType: number): void;

	/**
	 * @return 0:Individual, 1:Shared
	 */
	getCooldownControl(): number;

	/**
	 * @param profileType 0:Individual, 1:Shared
	 */
	setCompleteControl(profileType: number): void;

	/**
	 * @return 0:Individual, 1:Shared
	 */
	getCompleteControl(): number;

}
}
