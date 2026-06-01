
/**
 * Entity-level interface for zone entities (Hazard and Trap).
 * Created via IEnergyHandler.createHazard() or createTrap().
 * Configure properties, then call spawn() to place in the world.
 */
export interface IEnergyZone extends IEntity {
	/**
	 * @return Zone type: 0=Trap, 1=Hazard
	 */
	getZoneType(): number;

	/**
	 * @return Zone shape: 0=Circle, 1=Square
	 */
	getZoneShape(): number;

	setZoneShape(shape: number): void;

	getRadius(): number;

	setRadius(radius: number): void;

	getZoneHeight(): number;

	setZoneHeight(height: number): void;

	getDuration(): number;

	setDuration(ticks: number): void;

	getInnerColor(): number;

	setInnerColor(color: number): void;

	getOuterColor(): number;

	setOuterColor(color: number): void;

	isOuterColorEnabled(): boolean;

	setOuterColorEnabled(enabled: boolean): void;

	getParticleDensity(): number;

	setParticleDensity(density: number): void;

	getParticleScale(): number;

	setParticleScale(scale: number): void;

	getAnimSpeed(): number;

	setAnimSpeed(speed: number): void;

	isIgnoreIFrames(): boolean;

	setIgnoreIFrames(ignore: boolean): void;

	getDamagePerSecond(): number;

	setDamagePerSecond(dps: number): void;

	getDamageInterval(): number;

	setDamageInterval(ticks: number): void;

	isAffectsCaster(): boolean;

	setAffectsCaster(affects: boolean): void;

	getTriggerRadius(): number;

	setTriggerRadius(radius: number): void;

	getArmTime(): number;

	setArmTime(ticks: number): void;

	getMaxTriggers(): number;

	setMaxTriggers(max: number): void;

	getTriggerCooldown(): number;

	setTriggerCooldown(ticks: number): void;

	getDamage(): number;

	setDamage(damage: number): void;

	getKnockback(): number;

	setKnockback(knockback: number): void;

	isVisible(): boolean;

	setVisible(visible: boolean): void;

	/**
	 * Get custom damage data for addon handler routing (e.g. DBC damage stats).
	 * 
	 * @return the zone's damage configuration as NBT
	 */
	getDamageData(): INbt;

	/**
	 * Set custom damage data for addon handler routing.
	 * 
	 * @param data the damage configuration NBT
	 */
	setDamageData(data: INbt): void;

	/**
	 * Spawn this zone entity into the world.
	 */
	spawn(): void;
}

