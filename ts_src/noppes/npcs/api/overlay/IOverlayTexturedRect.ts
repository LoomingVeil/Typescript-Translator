

export interface IOverlayTexturedRect extends ICustomOverlayComponent {
	getTexture(): string;

	setTexture(var1: string): IOverlayTexturedRect;

	getWidth(): number;

	getHeight(): number;

	setSize(var1: number, var2: number): IOverlayTexturedRect;

	getScale(): number;

	setScale(var1: number): IOverlayTexturedRect;

	getTextureX(): number;

	getTextureY(): number;

	setTextureOffset(var1: number, var2: number): IOverlayTexturedRect;

}
}
