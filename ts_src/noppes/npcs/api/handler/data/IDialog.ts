import { IObject } from "./../../../../../IObject";
import { IQuest } from "./IQuest";
import { IDialogOption } from "./IDialogOption";
import { IDialogImage } from "./IDialogImage";
import { IAvailability } from "./IAvailability";
import { IDialogCategory } from "./IDialogCategory";

import { List } from "./../../../../../missingTypes";

export interface IDialog extends IObject {
	getId(): number;

	getName(): string;

	setName(var1: string): void;

	getText(): string;

	setText(var1: string): void;

	getQuest(): IQuest;

	setQuest(var1: IQuest): void;

	getCommand(): string;

	setCommand(var1: string): void;

	getOptions(): List;

	getOption(var1: number): IDialogOption;

	getAvailability(): IAvailability;

	getCategory(): IDialogCategory;

	setDarkenScreen(darkenScreen: boolean): void;

	getDarkenScreen(): boolean;

	setDisableEsc(disableEsc: boolean): void;

	getDisableEsc(): boolean;

	setShowWheel(showWheel: boolean): void;

	getShowWheel(): boolean;

	setHideNPC(hideNPC: boolean): void;

	getHideNPC(): boolean;

	setSound(sound: string): void;

	getSound(): string;

	save(): void;

	setColor(color: number): void;

	getColor(): number;

	setTitleColor(titleColor: number): void;

	getTitleColor(): number;

	renderGradual(gradual: boolean): void;

	renderGradual(): boolean;

	showPreviousBlocks(show: boolean): void;

	showPreviousBlocks(): boolean;

	showOptionLine(show: boolean): void;

	showOptionLine(): boolean;

	setTextSound(textSound: string): void;

	getTextSound(): string;

	setTextPitch(textPitch: number): void;

	getTextPitch(): number;

	setTitlePos(pos: number): void;

	getTitlePos(): number;

	setNPCScale(scale: number): void;

	getNpcScale(): number;

	setNpcOffset(offsetX: number, offsetY: number): void;

	getNpcOffsetX(): number;

	getNpcOffsetY(): number;

	textWidthHeight(textWidth: number, textHeight: number): void;

	getTextWidth(): number;

	setTextHeight(): number;

	setTextOffset(offsetX: number, offsetY: number): void;

	getTextOffsetX(): number;

	getTextOffsetY(): number;

	setTitleOffset(offsetX: number, offsetY: number): void;

	getTitleOffsetX(): number;

	getTitleOffsetY(): number;

	setOptionOffset(offsetX: number, offsetY: number): void;

	getOptionOffsetX(): number;

	getOptionOffsetY(): number;

	setOptionSpacing(spaceX: number, spaceY: number): void;

	getOptionSpaceX(): number;

	getOptionSpaceY(): number;

	addImage(id: number, image: IDialogImage): void;

	getImage(id: number): IDialogImage;

	createImage(): IDialogImage;

	getImages(): IDialogImage[];

	hasImage(id: number): boolean;

	removeImage(id: number): void;

	clearImages(): void;

}
}
