
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

	/**
	 * Gets the width of the string in pixels. This can be useful for centering text.
	 * Having certain non-standard special characters may produce inaccurate results.
	 */
	getStringWidth(): number;
}

