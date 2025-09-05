import { IObject } from "./../../../../IObject";
import { INaturalSpawn } from "./data/INaturalSpawn";


export interface INaturalSpawnsHandler extends IObject {
	save(): void;

	getSpawns(): INaturalSpawn[];

	getSpawns(biome: string): INaturalSpawn[];

	addSpawn(spawn: INaturalSpawn): void;

	removeSpawn(spawn: INaturalSpawn): void;

	createSpawn(): INaturalSpawn;

}
}
