import { IObject } from "./../../../../IObject";


export interface IItemArmor extends IObject {
	getArmorSlot(): number;

	getArmorMaterial(): string;

}
}
