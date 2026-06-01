
/**
 * Represents an energy panel barrier - a flat rectangular shield (Wall or Shield mode).
 */
export interface IEnergyPanel extends IEnergyBarrier {
	getPanelWidth(): number;

	setPanelWidth(width: number): void;

	getPanelHeight(): number;

	setPanelHeight(height: number): void;

	getPanelYaw(): number;

	setPanelYaw(yaw: number): void;

	/**
	 * Panel mode: 0=PLACED, 1=HELD, 2=LAUNCHED
	 * 
	 * @return the panel mode ordinal
	 */
	getPanelMode(): number;

	setPanelMode(mode: number): void;

	isLaunched(): boolean;

	/**
	 * Spawn this panel entity into the world.
	 */
	spawn(): void;
}

