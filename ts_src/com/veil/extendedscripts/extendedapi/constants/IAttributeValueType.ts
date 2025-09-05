import { IObject } from "./../../../../../IObject";


export interface IAttributeValueType extends IObject {
	FLAT: number;
	PERCENT: number;
	MAGIC: number;
	getValue(value: string): number;

}


export const AttributeValueType: IAttributeValueType = {} as IAttributeValueType;
