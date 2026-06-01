
/**
 * Represents a transport destination that players can teleport to.
 */
export interface ITransportLocation extends IObject {
	/**
	 * @return the unique transport location ID.
	 */
	getId(): number;

	/**
	 * @param name the location display name.
	 */
	setName(name: string): void;

	/**
	 * @return the location display name.
	 */
	getName(): string;

	/**
	 * @param dimension the dimension ID where this transport is located.
	 */
	setDimension(dimension: number): void;

	/**
	 * @return the dimension ID.
	 */
	getDimension(): number;

	/**
	 * Sets the transport type.
	 * 
	 * @param type the type ordinal.
	 */
	setType(type: number): void;

	/**
	 * @return the transport type ordinal.
	 */
	getType(): number;

	/**
	 * Sets the transport destination coordinates.
	 * 
	 * @param x the x coordinate.
	 * @param y the y coordinate.
	 * @param z the z coordinate.
	 */
	setPosition(x: number, y: number, z: number): void;

	/**
	 * Sets the transport destination position.
	 * 
	 * @param pos the position.
	 */
	setPosition(pos: IPos): void;

	/**
	 * @return the x coordinate.
	 */
	getX(): number;

	/**
	 * @return the y coordinate.
	 */
	getY(): number;

	/**
	 * @return the z coordinate.
	 */
	getZ(): number;

	/**
	 * Saves this transport location to disk.
	 */
	save(): void;
}

