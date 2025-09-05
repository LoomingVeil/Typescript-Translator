

export interface IOverlayLabel extends ICustomOverlayComponent {
	getText(): string;

	setText(var1: string): IOverlayLabel;

	getWidth(): number;

	getHeight(): number;

	setSize(var1: number, var2: number): IOverlayLabel;

	getScale(): number;

	setScale(var1: number): IOverlayLabel;

	getShadow(): boolean;

	setShadow(shadow: boolean): void;

}
}
