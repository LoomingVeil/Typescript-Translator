
/**
 * Fired when a player changes their screen resolution.
 * 
 * @hookName resolutionChanged
 */
export interface IResolutionChangedEvent extends IPlayerEvent {
	getOldResolution(): IScreenResolution;

	getNewResolution(): IScreenResolution;
}

