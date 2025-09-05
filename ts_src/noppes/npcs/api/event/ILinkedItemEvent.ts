

export interface ILinkedItemEvent extends IItemEvent {
	export interface VersionChangeEvent extends IItemEvent {
		getVersion(): number;

		getPreviousVersion(): number;

	}
	export interface BuildEvent extends IItemEvent {
	}
}
}
