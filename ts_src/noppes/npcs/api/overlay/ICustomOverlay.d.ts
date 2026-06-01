
export interface ICustomOverlay extends IObject {
	getID(): number;

	getComponents(): List;

	getDefaultAlignment(): number;

	setDefaultAlignment(defaultAlignment: number): void;

	addTexturedRect(id: number, texture: string, x: number, y: number, width: number, height: number): IOverlayTexturedRect;

	addTexturedRect(id: number, texture: string, x: number, y: number, width: number, height: number, textureX: number, textureY: number): IOverlayTexturedRect;

	addLabel(id: number, label: string, x: number, y: number, width: number, height: number): IOverlayLabel;

	addLabel(id: number, label: string, x: number, y: number, width: number, height: number, color: number): IOverlayLabel;

	addLine(id: number, x1: number, y1: number, x2: number, y2: number, color: number, thickness: number): IOverlayLine;

	addLine(id: number, x1: number, y1: number, x2: number, y2: number): IOverlayLine;

	getComponent(componentID: number): ICustomOverlayComponent;

	removeComponent(componentID: number): void;

	updateComponent(component: ICustomOverlayComponent): void;

	update(player: IPlayer): void;

	fromNBT(tag: NBTTagCompound): ICustomOverlay;

	toNBT(): NBTTagCompound;

	nextComponentId(): number;
}

