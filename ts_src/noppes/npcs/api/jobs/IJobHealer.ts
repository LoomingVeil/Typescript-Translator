import { IEntityLivingBase } from "./../entity/IEntityLivingBase";


export interface IJobHealer extends IJob {
	heal(entity: IEntityLivingBase, amount: number): void;

	setRange(range: number): void;

	getRange(): number;

	setSpeed(speed: number): void;

	getSpeed(): number;

}
}
