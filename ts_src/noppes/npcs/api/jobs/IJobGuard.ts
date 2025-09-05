

export interface IJobGuard extends IJob {
	attackCreepers(): boolean;

	attackCreepers(value: boolean): void;

	attacksAnimals(): boolean;

	attacksAnimals(value: boolean): void;

	attackHostileMobs(): boolean;

	attackHostileMobs(value: boolean): void;

}
}
