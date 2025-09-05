import { IObject } from "./../../../../../IObject";


export interface IDialogImage extends IObject {
	getId(): number;

	setTexture(texture: string): void;

	getTexture(): string;

	setPosition(x: number, y: number): void;

	getX(): number;

	getY(): number;

	setWidthHeight(width: number, height: number): void;

	getWidth(): number;

	getHeight(): number;

	setTextureOffset(offsetX: number, offsetY: number): void;

	getTextureX(): number;

	getTextureY(): number;

	setColor(color: number): void;

	getColor(): number;

	setSelectedColor(color: number): void;

	getSelectedColor(): number;

	setScale(scale: number): void;

	getScale(): number;

	setAlpha(alpha: number): void;

	getAlpha(): number;

	setRotation(rotation: number): void;

	getRotation(): number;

	setImageType(imageType: number): void;

	getImageType(): number;

	setAlignment(alignment: number): void;

	getAlignment(): number;

}
}
