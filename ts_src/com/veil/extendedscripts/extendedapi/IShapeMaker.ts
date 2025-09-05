import { IObject } from "./../../../../IObject";
import { IPos } from "./../../../../noppes/npcs/api/IPos";


/**
 * Provides a variant of methods for creating shapes.
 * TAKE NOTE: This class is a work in progress. Pyramid and cone shapes are known to have issues.
 */
export interface IShapeMaker extends IObject {
	getBox(center: IPos, width: number, length: number, height: number): IPos[];

	getBox(pos1: IPos, pos2: IPos): IPos[];

	getHollowBox(center: IPos, width: number, length: number, height: number, thickness: number): IPos[];

	getHollowBox(center: IPos, width: number, length: number, height: number): IPos[];

	getHollowBox(pos1: IPos, pos2: IPos, thickness: number): IPos[];

	getHollowBox(pos1: IPos, pos2: IPos): IPos[];

	getEllipsoid(center: IPos, radius: number): IPos[];

	getEllipsoid(center: IPos, sizeX: number, sizeY: number, sizeZ: number): IPos[];

	getHollowEllipsoid(center: IPos, radius: number): IPos[];

	getHollowEllipsoid(center: IPos, radius: number, thickness: number): IPos[];

	getHollowEllipsoid(center: IPos, sizeX: number, sizeY: number, sizeZ: number, thickness: number): IPos[];

	getHollowEllipsoid(center: IPos, sizeX: number, sizeY: number, sizeZ: number): IPos[];

	getCylinder(center: IPos, radius: number, height: number): IPos[];

	getCylinder(pos1: IPos, pos2: IPos): IPos[];

	getHollowCylinder(center: IPos, radius: number, height: number): IPos[];

	getHollowCylinder(center: IPos, radius: number, height: number, thickness: number): IPos[];

	getHollowCylinder(pos1: IPos, pos2: IPos): IPos[];

	getHollowCylinder(pos1: IPos, pos2: IPos, thickness: number): IPos[];

	getPyramid(center: IPos, baseWidth: number, baseLength: number, height: number): IPos[];

	getPyramid(pos1: IPos, pos2: IPos): IPos[];

	getHollowPyramid(center: IPos, baseWidth: number, baseLength: number, height: number, thickness: number): IPos[];

	getHollowPyramid(center: IPos, baseWidth: number, baseLength: number, height: number): IPos[];

	getCone(center: IPos, baseRadius: number, height: number): IPos[];

	getCone(pos1: IPos, pos2: IPos): IPos[];

	getHollowCone(center: IPos, baseRadius: number, height: number, thickness: number): IPos[];

	getHollowCone(center: IPos, baseRadius: number, height: number): IPos[];

}

