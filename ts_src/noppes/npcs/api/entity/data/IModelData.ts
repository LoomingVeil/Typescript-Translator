import { IObject } from "./../../../../../IObject";
import { IModelRotate } from "./IModelRotate";
import { IModelScale } from "./IModelScale";


/**
 * Provides configuration data for a model including wearable settings,
 * hidden parts, rotation, and scale.
 * <p>
 * This interface allows controlling the appearance of an entity's model
 * such as headwear, bodywear, arm and leg configurations, and the ability
 * to hide parts. It also manages model rotation and scaling settings as well
 * as the association with an entity type.
 */
export interface IModelData extends IObject {
	/**
	 * Sets the headwear configuration.
	 * Valid values: 0 (hidden), 1 (2D), 2 (3D).
	 * 
	 * @param config the headwear configuration.
	 */
	headWear(config: number): void;

	/**
	 * Gets the current headwear configuration.
	 * 
	 * @return the headwear configuration.
	 */
	headWear(): number;

	/**
	 * Sets the bodywear configuration.
	 * Valid values: 0 (hidden), 1 (2D), 2 (3D).
	 * 
	 * @param config the bodywear configuration.
	 */
	bodyWear(config: number): void;

	/**
	 * Gets the current bodywear configuration.
	 * 
	 * @return the bodywear configuration.
	 */
	bodyWear(): number;

	/**
	 * Sets the right arm wear configuration.
	 * Valid values: 0 (hidden), 1 (2D), 2 (3D).
	 * 
	 * @param config the right arm configuration.
	 */
	rightArmWear(config: number): void;

	/**
	 * Gets the current right arm wear configuration.
	 * 
	 * @return the right arm configuration.
	 */
	rightArmWear(): number;

	/**
	 * Sets the left arm wear configuration.
	 * Valid values: 0 (hidden), 1 (2D), 2 (3D).
	 * 
	 * @param config the left arm configuration.
	 */
	leftArmWear(config: number): void;

	/**
	 * Gets the current left arm wear configuration.
	 * 
	 * @return the left arm configuration.
	 */
	leftArmWear(): number;

	/**
	 * Sets the right leg wear configuration.
	 * Valid values: 0 (hidden), 1 (2D), 2 (3D).
	 * 
	 * @param config the right leg configuration.
	 */
	rightLegWear(config: number): void;

	/**
	 * Gets the current right leg wear configuration.
	 * 
	 * @return the right leg configuration.
	 */
	rightLegWear(): number;

	/**
	 * Sets the left leg wear configuration.
	 * Valid values: 0 (hidden), 1 (2D), 2 (3D).
	 * 
	 * @param config the left leg configuration.
	 */
	leftLegWear(config: number): void;

	/**
	 * Gets the current left leg wear configuration.
	 * 
	 * @return the left leg configuration.
	 */
	leftLegWear(): number;

	/**
	 * Hide Body Parts
	 * part: [0: Head, 1: Body, 2: Arms, 3: Legs]
	 * hide: [0: None, 1: Both, 2: Right, 3: Left], only values 0 and 1 used for head & body.
	 * 
	 * @param part the part index.
	 * @param hide the hide configuration.
	 */
	hidePart(part: number, hide: number): void;

	/**
	 * Returns the hide configuration for the specified part.
	 * 
	 * @param part the part index.
	 * @return the current hide configuration.
	 */
	hidden(part: number): number;

	/**
	 * Enables or disables rotation for the model.
	 * 
	 * @param enableRotation true to enable rotation; false to disable.
	 */
	enableRotation(enableRotation: boolean): void;

	/**
	 * Checks whether rotation is enabled for the model.
	 * 
	 * @return true if rotation is enabled; false otherwise.
	 */
	enableRotation(): boolean;

	/**
	 * Returns the model rotation configuration.
	 * 
	 * @return the rotation settings.
	 */
	getRotation(): IModelRotate;

	/**
	 * Returns the model scaling configuration.
	 * 
	 * @return the scale settings.
	 */
	getScale(): IModelScale;

	/**
	 * Associates this model data with an entity using its class name.
	 * 
	 * @param string the fully qualified class name of the entity.
	 */
	setEntity(string: string): void;

	/**
	 * Gets the entity class name associated with this model data.
	 * 
	 * @return the entity class name, or null if not set.
	 */
	getEntity(): string;

}
}
