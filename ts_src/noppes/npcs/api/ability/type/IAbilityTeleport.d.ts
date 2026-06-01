
/**
 * API interface for Teleport abilities.
 * Instant repositioning with various modes.
 */
export interface IAbilityTeleport extends IAbility {
	/**
	 * @return Teleport mode ordinal (0=BLINK, 1=BEHIND, 2=SINGLE).
	 */
	getMode(): number;

	/**
	 * @param mode Teleport mode ordinal (0=BLINK, 1=BEHIND, 2=SINGLE).
	 */
	setMode(mode: number): void;

	/**
	 * @return Number of rapid blink teleports in BLINK mode.
	 */
	getBlinkCount(): number;

	/**
	 * @param count Number of blink teleports.
	 */
	setBlinkCount(count: number): void;

	/**
	 * @return Delay in ticks between blink teleports.
	 */
	getBlinkDelayTicks(): number;

	/**
	 * @param ticks Delay in ticks between blinks.
	 */
	setBlinkDelayTicks(ticks: number): void;

	/**
	 * @return Maximum random offset radius for blink teleports in blocks.
	 */
	getBlinkRadius(): number;

	/**
	 * @param radius Blink offset radius in blocks.
	 */
	setBlinkRadius(radius: number): void;

	/**
	 * @return Distance behind the target to teleport to in BEHIND mode.
	 */
	getBehindDistance(): number;

	/**
	 * @param distance Behind-target distance in blocks.
	 */
	setBehindDistance(distance: number): void;

	/**
	 * @return Whether the teleport requires clear line of sight to the destination.
	 */
	isRequireLineOfSight(): boolean;

	/**
	 * @param require Whether line of sight is required.
	 */
	setRequireLineOfSight(require: boolean): void;

	/**
	 * @return Whether damage is dealt at the departure location.
	 */
	isDamageAtStart(): boolean;

	/**
	 * @param damage Whether to deal damage at departure.
	 */
	setDamageAtStart(damage: boolean): void;

	/**
	 * @return Whether damage is dealt at the arrival location.
	 */
	isDamageAtEnd(): boolean;

	/**
	 * @param damage Whether to deal damage at arrival.
	 */
	setDamageAtEnd(damage: boolean): void;

	/**
	 * @return Damage dealt at teleport locations.
	 */
	getDamage(): number;

	/**
	 * @param damage Teleport damage amount.
	 */
	setDamage(damage: number): void;

	/**
	 * @return Radius of the damage area at teleport locations in blocks.
	 */
	getDamageRadius(): number;

	/**
	 * @param radius Damage area radius in blocks.
	 */
	setDamageRadius(radius: number): void;
}

