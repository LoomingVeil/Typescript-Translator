
/**
 * API interface for zone-based abilities (Trap, Hazard).
 * Shared zone properties: duration, shape, spawn, visual layers, colors.
 */
export interface IAbilityZone extends IAbility {
	/**
	 * @return Duration of the zone in ticks.
	 */
	getDurationTicks(): number;

	/**
	 * @param ticks Zone duration in ticks.
	 */
	setDurationTicks(ticks: number): void;

	/**
	 * @return Zone shape ordinal (0=CIRCLE, 1=SQUARE).
	 */
	getZoneShapeOrdinal(): number;

	/**
	 * @param shape Zone shape ordinal (0=CIRCLE, 1=SQUARE).
	 */
	setZoneShapeOrdinal(shape: number): void;

	/**
	 * @return Spawn offset radius from the caster in blocks.
	 */
	getSpawnRadius(): number;

	/**
	 * @param radius Spawn offset radius in blocks.
	 */
	setSpawnRadius(radius: number): void;

	/**
	 * @return Number of zones spawned per use.
	 */
	getZoneCount(): number;

	/**
	 * @param count Number of zones to spawn.
	 */
	setZoneCount(count: number): void;

	/**
	 * @return Visual height of the zone in blocks.
	 */
	getZoneHeight(): number;

	/**
	 * @param height Zone height in blocks.
	 */
	setZoneHeight(height: number): void;

	/**
	 * @return Density of particles in the zone effect.
	 */
	getParticleDensity(): number;

	/**
	 * @param density Particle density.
	 */
	setParticleDensity(density: number): void;

	/**
	 * @return Scale of individual particles.
	 */
	getParticleScale(): number;

	/**
	 * @param scale Particle scale.
	 */
	setParticleScale(scale: number): void;

	/**
	 * @return Animation speed multiplier for zone visual effects.
	 */
	getAnimSpeed(): number;

	/**
	 * @param speed Animation speed multiplier.
	 */
	setAnimSpeed(speed: number): void;

	/**
	 * @return Density of lightning arcs in the zone.
	 */
	getLightningDensity(): number;

	/**
	 * @param density Lightning arc density.
	 */
	setLightningDensity(density: number): void;

	/**
	 * @return Inner (core) color as a packed RGB integer.
	 */
	getInnerColor(): number;

	/**
	 * @param color Inner color as a packed RGB integer.
	 */
	setInnerColor(color: number): void;

	/**
	 * @return Outer (glow) color as a packed RGB integer.
	 */
	getOuterColor(): number;

	/**
	 * @param color Outer color as a packed RGB integer.
	 */
	setOuterColor(color: number): void;

	/**
	 * @return Whether the outer color layer is rendered.
	 */
	isOuterColorEnabled(): boolean;

	/**
	 * @param enabled Whether to render the outer color layer.
	 */
	setOuterColorEnabled(enabled: boolean): void;

	/**
	 * @return Whether the ground fill layer is rendered.
	 */
	isGroundFill(): boolean;

	/**
	 * @param enabled Whether to render the ground fill.
	 */
	setGroundFill(enabled: boolean): void;

	/**
	 * @return Alpha (opacity) of the ground fill layer (0.0-1.0).
	 */
	getGroundAlpha(): number;

	/**
	 * @param alpha Ground fill opacity (0.0-1.0).
	 */
	setGroundAlpha(alpha: number): void;

	/**
	 * @return Whether ring decorations are rendered.
	 */
	isRings(): boolean;

	/**
	 * @param enabled Whether to render rings.
	 */
	setRings(enabled: boolean): void;

	/**
	 * @return Number of concentric rings in the zone.
	 */
	getRingCount(): number;

	/**
	 * @param count Number of rings.
	 */
	setRingCount(count: number): void;

	/**
	 * @return Whether the border outline is rendered.
	 */
	isBorder(): boolean;

	/**
	 * @param enabled Whether to render the border.
	 */
	setBorder(enabled: boolean): void;

	/**
	 * @return Rotation speed of the border in degrees per tick.
	 */
	getBorderSpeed(): number;

	/**
	 * @param speed Border rotation speed.
	 */
	setBorderSpeed(speed: number): void;

	/**
	 * @return Whether accent decorations are rendered.
	 */
	isAccents(): boolean;

	/**
	 * @param enabled Whether to render accents.
	 */
	setAccents(enabled: boolean): void;

	/**
	 * @return Accent style ordinal (0=STATIC, 1=SWAYING, 2=FLICKERING).
	 */
	getAccentStyle(): number;

	/**
	 * @param style Accent style ordinal (0=STATIC, 1=SWAYING, 2=FLICKERING).
	 */
	setAccentStyle(style: number): void;

	/**
	 * @return Whether lightning arcs are rendered in the zone.
	 */
	isLightning(): boolean;

	/**
	 * @param enabled Whether to render lightning.
	 */
	setLightning(enabled: boolean): void;

	/**
	 * @return Whether particles are rendered in the zone.
	 */
	isParticles(): boolean;

	/**
	 * @param enabled Whether to render particles.
	 */
	setParticles(enabled: boolean): void;

	/**
	 * @return Particle motion style ordinal (0=RISING, 1=DRIFTING, 2=SPARKS).
	 */
	getParticleMotion(): number;

	/**
	 * @param motion Particle motion style ordinal (0=RISING, 1=DRIFTING, 2=SPARKS).
	 */
	setParticleMotion(motion: number): void;

	/**
	 * @return Resource directory path for custom particle textures.
	 */
	getParticleDir(): string;

	/**
	 * @param directory Resource directory path for particle textures.
	 */
	setParticleDir(directory: string): void;

	/**
	 * @return Size of individual particles in pixels.
	 */
	getParticleSize(): number;

	/**
	 * @param size Particle size in pixels.
	 */
	setParticleSize(size: number): void;

	/**
	 * @return Whether particles use the glow (fullbright) render mode.
	 */
	isParticleGlow(): boolean;

	/**
	 * @param glow Whether particles glow.
	 */
	setParticleGlow(glow: boolean): void;
}

