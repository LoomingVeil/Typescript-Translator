

export interface IOverlayLine extends ICustomOverlayComponent {
	getX1(): number;

	getY1(): number;

	getX2(): number;

	getY2(): number;

	getThickness(): number;

	setX1(x1: number): void;

	setY1(y1: number): void;

	setX2(x2: number): void;

	setY2(y2: number): void;

	setThickness(thickness: number): void;

}
}
