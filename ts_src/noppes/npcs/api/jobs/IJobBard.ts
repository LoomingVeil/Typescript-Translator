

export interface IJobBard extends IJob {
	getSong(): string;

	setSong(song: string): void;

	setInstrument(i: number): void;

	getInstrumentId(): number;

	setMinRange(range: number): void;

	getMinRange(): number;

	setMaxRange(range: number): void;

	getMaxRange(): number;

	setStreaming(streaming: boolean): void;

	getStreaming(): boolean;

	hasOffRange(value: boolean): void;

	hasOffRange(): boolean;

}
}
