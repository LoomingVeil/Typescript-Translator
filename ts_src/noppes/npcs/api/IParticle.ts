import { IObject } from "./../../../IObject";
import { IEntity } from "./entity/IEntity";
import { IWorld } from "./IWorld";
import { IPos } from "./IPos";


/**
 * A particle that can be spawned in the world, complete with translation, scale, rotate, and color transformations.
 * (CNPC+ original!)
 * 
 * To create a particle object:
 * API.createParticle(directory);
 * Then modify its attributes as you please, and call the particle's spawn functions to see it in the world.
 * 
 * Spawning this particle in the world sends a hefty packet with all its data to the client. The particle is then
 * rendered with a custom renderer based on all the given attributes.
 * 
 * If a particle appears to not appear at first, try increasing its scale or changing its position. The entity it's
 * being spawned on or a block in the world may be blocking it.
 */
export interface IParticle extends IObject {
	/**
	 * @param entity Spawns this particle object on the given entity. When spawned this way, the particle will always have its origin at the entity.
	 */
	spawn(entity: IEntity): void;

	/**
	 * @param world Spawns the particle in the given world, at a position corresponding to this particle's position variables.
	 */
	spawn(world: IWorld): void;

	/**
	 * @param world Spawns the particle in the given world, at a position determined by the input parameters.
	 * @param x The X position the particle will spawn in the world.
	 * @param y The Y position the particle will spawn in the world.
	 * @param z The Z position the particle will spawn in the world.
	 */
	spawn(world: IWorld, x: number, y: number, z: number): void;

	spawnOnEntity(entity: IEntity): void;

	spawnInWorld(world: IWorld): void;

	spawnInWorld(world: IWorld, x: number, y: number, z: number): void;

	/**
	 * @param glows If true, this particle ignores all lighting and always renders with full brightness.
	 */
	setGlows(glows: boolean): void;

	getGlows(): boolean;

	setNoClip(noClip: boolean): void;

	getNoClip(): boolean;

	/**
	 * @param facePlayer Whether the particle is always facing the player's camera. If this is disabled, the particle will appear to be laying flat face down on the ground if its rotation is unchanged.
	 */
	setFacePlayer(facePlayer: boolean): void;

	getFacePlayer(): boolean;

	/**
	 * @param directory The directory of this particle's texture. This can be any texture in a resource pack or mod, and even a URL!
	 */
	setDirectory(directory: string): void;

	getDirectory(): string;

	/**
	 * @param amount The amount of multiples of this particle to spawn in the world. Not too good looking if used, but has some edge cases where it's alright.
	 */
	setAmount(amount: number): void;

	getAmount(): number;

	/**
	 * @param maxAge The maximum age this particle will be around for, in MC ticks.
	 */
	setMaxAge(maxAge: number): void;

	getMaxAge(): number;

	/**
	 * The width and height of the particle's texture you want to render in pixels. Anything more gets cut off.
	 * 
	 * @param width The width of the particle's texture, in pixels.
	 * @param height The height of the particle's texture, in pixels.
	 */
	setSize(width: number, height: number): void;

	getWidth(): number;

	getHeight(): number;

	/**
	 *  The horizontal and vertical offset of the particle's texture from the top-left, starts rendering the particle at this point.
	 * 
	 * @param offsetX The horizontal offset, in pixels (u).
	 * @param offsetY The vertical offset, in pixels (v).
	 */
	setOffset(offsetX: number, offsetY: number): void;

	getOffsetX(): number;

	getOffsetY(): number;

	/**
	 * Enables animation on the particle. Must set a custom width and height first using the setSize(width,height) function.
	 * Every frame of animation the particle goes through should be saved on a single image file.
	 * 
	 * The renderer will read the frames of animation based on the given width and height of the particle, starting from the given X & Y offsets.
	 * The renderer then goes rightwards (width) pixels for every frame. Once it can't go rightwards anymore,
	 * the animation goes down (height) pixels, and once again keeps going rightwards if it has to.
	 * 
	 * If the animation loops, once there is nowhere downward to go, the animation will start over at the X & Y offset.
	 * 
	 * @param animRate The frame rate of the particle's animation, in MC ticks. (20 ticks = 1 second)
	 * @param animLoop Whether the animation loops or not.
	 * @param animStart The amount of ticks before the particle starts animating.
	 * @param animEnd The amount of ticks the particle is around for before it stops animating.
	 */
	setAnim(animRate: number, animLoop: boolean, animStart: number, animEnd: number): void;

	getAnimRate(): number;

	getAnimLoop(): boolean;

	getAnimStart(): number;

	getAnimEnd(): number;

	/**
	 * @param x The X position from the particle's origin the particle will spawn at.
	 * @param y The Y position from the particle's origin the particle will spawn at.
	 * @param z The Z position from the particle's origin the particle will spawn at.
	 */
	setPosition(x: number, y: number, z: number): void;

	getX(): number;

	getY(): number;

	getZ(): number;

	setPosition(pos: IPos): void;

	getPos(): void;

	setMotion(motionX: number, motionY: number, motionZ: number, gravity: number): void;

	getMotionX(): number;

	getMotionY(): number;

	getMotionZ(): number;

	getGravity(): number;

	/**
	 * @param HEXColor The starting HEX color of the particle.
	 * @param HEXColor2 The ending HEX color of the particle.
	 * @param HEXColorRate The rate of interpolation between the two HEX colors.
	 * @param HEXColorStart The amount of ticks the particle is around for before its colors begin interpolating between HEXColor and HEXColor2.
	 */
	setHEXColor(HEXColor: number, HEXColor2: number, HEXColorRate: number, HEXColorStart: number): void;

	getHEXColor1(): number;

	getHEXColor2(): number;

	getHEXColorRate(): number;

	getHEXColorStart(): number;

	/**
	 * @param alpha1 The starting transparency of the particle.
	 * @param alpha2 The ending transparency of the particle.
	 * @param alphaRate The rate of interpolation between the two transparency values.
	 * @param alphaRateStart The amount of ticks the particle is around for before its colors begin interpolating between alpha1 and alpha2.
	 */
	setAlpha(alpha1: number, alpha2: number, alphaRate: number, alphaRateStart: number): void;

	getAlpha1(): number;

	getAlpha2(): number;

	getAlphaRate(): number;

	getAlphaRateStart(): number;

	/**
	 * @param scale1 The starting scale/size of the particle.
	 * @param scale2 The ending scale/size of the particle.
	 * @param scaleRate The rate of interpolation between the two scale values.
	 * @param scaleRateStart The amount of ticks the particle is around for before its colors begin interpolating between scale1 and scale2.
	 */
	setScale(scale1: number, scale2: number, scaleRate: number, scaleRateStart: number): void;

	setScaleX(scale1: number, scale2: number, scaleRate: number, scaleRateStart: number): void;

	getScaleX1(): number;

	getScaleX2(): number;

	getScaleXRate(): number;

	getScaleXRateStart(): number;

	setScaleY(scale1: number, scale2: number, scaleRate: number, scaleRateStart: number): void;

	getScaleY1(): number;

	getScaleY2(): number;

	getScaleYRate(): number;

	getScaleYRateStart(): number;

	/**
	 * Enables rotation about the X axis.
	 * If the particle is set to always face the player, this axis is a constant horizontal line on the player's camera.
	 * 
	 * @param rotationX1 The starting X rotation of the particle.
	 * @param rotationX2 The ending X rotation of the particle.
	 * @param rotationXRate The rate of interpolation between the two X rotation values.
	 * @param rotationXRateStart The amount of ticks the particle is around for before its colors begin interpolating between rotationX1 and rotationX2.
	 */
	setRotationX(rotationX1: number, rotationX2: number, rotationXRate: number, rotationXRateStart: number): void;

	getRotationX1(): number;

	getRotationX2(): number;

	getRotationXRate(): number;

	getRotationXRateStart(): number;

	/**
	 * Enables rotation about the Y axis.
	 * If the particle is set to always face the player, this axis is a constant vertical line on the player's camera.
	 * 
	 * @param rotationY1 The starting Y rotation of the particle.
	 * @param rotationY2 The ending Y rotation of the particle.
	 * @param rotationYRate The rate of interpolation between the two Y rotation values.
	 * @param rotationYRateStart The amount of ticks the particle is around for before its colors begin interpolating between rotationY1 and rotationY2.
	 */
	setRotationY(rotationY1: number, rotationY2: number, rotationYRate: number, rotationYRateStart: number): void;

	getRotationY1(): number;

	getRotationY2(): number;

	getRotationYRate(): number;

	getRotationYRateStart(): number;

	/**
	 * Enables rotation about the Y axis.
	 * If the particle is set to always face the player, this axis is a constant line going into the player's camera.
	 * You'll be using this one most often if the particle is set to face the player.
	 * 
	 * @param rotationZ1 The starting Z rotation of the particle.
	 * @param rotationZ2 The ending Z rotation of the particle.
	 * @param rotationZRate The rate of interpolation between the two Z rotation values.
	 * @param rotationZRateStart The amount of ticks the particle is around for before its colors begin interpolating between rotationZ1 and rotationZ2.
	 */
	setRotationZ(rotationZ1: number, rotationZ2: number, rotationZRate: number, rotationZRateStart: number): void;

	getRotationZ1(): number;

	getRotationZ2(): number;

	getRotationZRate(): number;

	getRotationZRateStart(): number;

}
}
