
export interface IDialog extends IObject {
	/**
	 * @return The unique ID of this dialog
	 */
	getId(): number;

	/**
	 * @return The title/name of this dialog
	 */
	getName(): string;

	/**
	 * Sets the title/name of this dialog.
	 * 
	 * @param var1 The new dialog title
	 */
	setName(var1: string): void;

	/**
	 * @return The dialog body text displayed to the player
	 */
	getText(): string;

	/**
	 * Sets the dialog body text displayed to the player.
	 * 
	 * @param var1 The new dialog text
	 */
	setText(var1: string): void;

	/**
	 * @return The quest associated with this dialog, or null if none
	 */
	getQuest(): IQuest;

	/**
	 * Sets the quest associated with this dialog.
	 * 
	 * @param var1 The quest to associate, or null to remove
	 */
	setQuest(var1: IQuest): void;

	/**
	 * @return The command executed when this dialog is shown
	 */
	getCommand(): string;

	/**
	 * Sets the command executed when this dialog is shown.
	 * 
	 * @param var1 The command string
	 */
	setCommand(var1: string): void;

	/**
	 * @return A list of all dialog options
	 */
	getOptions(): List;

	/**
	 * Gets a dialog option by its slot index.
	 * 
	 * @param var1 The option slot index
	 * @return The dialog option at the given slot
	 */
	getOption(var1: number): IDialogOption;

	/**
	 * @return The availability settings for this dialog
	 */
	getAvailability(): IAvailability;

	/**
	 * @return The category this dialog belongs to
	 */
	getCategory(): IDialogCategory;

	/**
	 * Sets whether the screen darkens when this dialog is displayed.
	 * 
	 * @param darkenScreen True to darken the screen
	 */
	setDarkenScreen(darkenScreen: boolean): void;

	/**
	 * @return Whether the screen darkens when this dialog is displayed
	 */
	getDarkenScreen(): boolean;

	/**
	 * Sets whether the Escape key is disabled while this dialog is open.
	 * 
	 * @param disableEsc True to disable the Escape key
	 */
	setDisableEsc(disableEsc: boolean): void;

	/**
	 * @return Whether the Escape key is disabled while this dialog is open
	 */
	getDisableEsc(): boolean;

	/**
	 * Sets whether the dialog option wheel is shown.
	 * 
	 * @param showWheel True to show the option wheel
	 */
	setShowWheel(showWheel: boolean): void;

	/**
	 * @return Whether the dialog option wheel is shown
	 */
	getShowWheel(): boolean;

	/**
	 * Sets whether the NPC is hidden during this dialog.
	 * 
	 * @param hideNPC True to hide the NPC
	 */
	setHideNPC(hideNPC: boolean): void;

	/**
	 * @return Whether the NPC is hidden during this dialog
	 */
	getHideNPC(): boolean;

	/**
	 * Sets the sound played when this dialog opens.
	 * 
	 * @param sound The resource location of the sound
	 */
	setSound(sound: string): void;

	/**
	 * @return The resource location of the sound played when this dialog opens
	 */
	getSound(): string;

	/**
	 * Saves this dialog to the dialog controller.
	 */
	save(): void;

	/**
	 * Sets the text color of the dialog body.
	 * 
	 * @param color The color as an integer (e.g. 0xe0e0e0)
	 */
	setColor(color: number): void;

	/**
	 * @return The text color of the dialog body
	 */
	getColor(): number;

	/**
	 * Sets the color of the dialog title.
	 * 
	 * @param titleColor The color as an integer (e.g. 0xe0e0e0)
	 */
	setTitleColor(titleColor: number): void;

	/**
	 * @return The color of the dialog title
	 */
	getTitleColor(): number;

	/**
	 * Sets whether the dialog text renders character by character.
	 * 
	 * @param gradual True to enable gradual text rendering
	 */
	renderGradual(gradual: boolean): void;

	/**
	 * @return Whether the dialog text renders character by character
	 */
	renderGradual(): boolean;

	/**
	 * Sets whether previous dialog text blocks are shown.
	 * 
	 * @param show True to show previous dialog blocks
	 */
	showPreviousBlocks(show: boolean): void;

	/**
	 * @return Whether previous dialog text blocks are shown
	 */
	showPreviousBlocks(): boolean;

	/**
	 * Sets whether the separator line above dialog options is shown.
	 * 
	 * @param show True to show the option line
	 */
	showOptionLine(show: boolean): void;

	/**
	 * @return Whether the separator line above dialog options is shown
	 */
	showOptionLine(): boolean;

	/**
	 * Sets the sound played per character during gradual text rendering.
	 * 
	 * @param textSound The resource location of the text sound
	 */
	setTextSound(textSound: string): void;

	/**
	 * @return The resource location of the sound played per character during gradual text rendering
	 */
	getTextSound(): string;

	/**
	 * Sets the pitch of the per-character text sound.
	 * 
	 * @param textPitch The pitch value (default 1.0)
	 */
	setTextPitch(textPitch: number): void;

	/**
	 * @return The pitch of the per-character text sound
	 */
	getTextPitch(): number;

	/**
	 * Sets the position of the dialog title.
	 * 
	 * @param pos The title position value
	 */
	setTitlePos(pos: number): void;

	/**
	 * @return The position of the dialog title
	 */
	getTitlePos(): number;

	/**
	 * Sets the render scale of the NPC in the dialog.
	 * 
	 * @param scale The NPC scale (default 1.0)
	 */
	setNPCScale(scale: number): void;

	/**
	 * @return The render scale of the NPC in the dialog
	 */
	getNpcScale(): number;

	/**
	 * Sets the NPC render offset in the dialog.
	 * 
	 * @param offsetX The horizontal offset in pixels
	 * @param offsetY The vertical offset in pixels
	 */
	setNpcOffset(offsetX: number, offsetY: number): void;

	/**
	 * @return The horizontal offset of the NPC render in pixels
	 */
	getNpcOffsetX(): number;

	/**
	 * @return The vertical offset of the NPC render in pixels
	 */
	getNpcOffsetY(): number;

	/**
	 * Sets the width and height of the dialog text area.
	 * 
	 * @param textWidth The text area width in pixels
	 * @param textHeight The text area height in pixels
	 */
	textWidthHeight(textWidth: number, textHeight: number): void;

	/**
	 * @return The width of the dialog text area in pixels
	 */
	getTextWidth(): number;

	/**
	 * @return The height of the dialog text area in pixels
	 */
	setTextHeight(): number;

	/**
	 * Sets the offset of the dialog text area.
	 * 
	 * @param offsetX The horizontal offset in pixels
	 * @param offsetY The vertical offset in pixels
	 */
	setTextOffset(offsetX: number, offsetY: number): void;

	/**
	 * @return The horizontal offset of the dialog text area in pixels
	 */
	getTextOffsetX(): number;

	/**
	 * @return The vertical offset of the dialog text area in pixels
	 */
	getTextOffsetY(): number;

	/**
	 * Sets the offset of the dialog title.
	 * 
	 * @param offsetX The horizontal offset in pixels
	 * @param offsetY The vertical offset in pixels
	 */
	setTitleOffset(offsetX: number, offsetY: number): void;

	/**
	 * @return The horizontal offset of the dialog title in pixels
	 */
	getTitleOffsetX(): number;

	/**
	 * @return The vertical offset of the dialog title in pixels
	 */
	getTitleOffsetY(): number;

	/**
	 * Sets the offset of the dialog options area.
	 * 
	 * @param offsetX The horizontal offset in pixels
	 * @param offsetY The vertical offset in pixels
	 */
	setOptionOffset(offsetX: number, offsetY: number): void;

	/**
	 * @return The horizontal offset of the dialog options area in pixels
	 */
	getOptionOffsetX(): number;

	/**
	 * @return The vertical offset of the dialog options area in pixels
	 */
	getOptionOffsetY(): number;

	/**
	 * Sets the spacing between dialog options.
	 * 
	 * @param spaceX The horizontal spacing in pixels
	 * @param spaceY The vertical spacing in pixels
	 */
	setOptionSpacing(spaceX: number, spaceY: number): void;

	/**
	 * @return The horizontal spacing between dialog options in pixels
	 */
	getOptionSpaceX(): number;

	/**
	 * @return The vertical spacing between dialog options in pixels
	 */
	getOptionSpaceY(): number;

	/**
	 * Adds an image to the dialog at the given ID.
	 * 
	 * @param id The image ID
	 * @param image The dialog image to add
	 */
	addImage(id: number, image: IDialogImage): void;

	/**
	 * Gets a dialog image by its ID.
	 * 
	 * @param id The image ID
	 * @return The dialog image, or null if not found
	 */
	getImage(id: number): IDialogImage;

	/**
	 * Creates a new empty dialog image instance.
	 * 
	 * @return A new {@link IDialogImage}
	 */
	createImage(): IDialogImage;

	/**
	 * @return An array of all dialog images
	 */
	getImages(): IDialogImage[];

	/**
	 * Checks whether an image with the given ID exists.
	 * 
	 * @param id The image ID
	 * @return True if the image exists
	 */
	hasImage(id: number): boolean;

	/**
	 * Removes the image with the given ID.
	 * 
	 * @param id The image ID to remove
	 */
	removeImage(id: number): void;

	/**
	 * Removes all images from this dialog.
	 */
	clearImages(): void;
}

