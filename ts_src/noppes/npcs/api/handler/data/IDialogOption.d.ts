
export interface IDialogOption extends IObject {
	/**
	 * @return The slot index of this dialog option
	 */
	getSlot(): number;

	/**
	 * @return The display name/title of this dialog option
	 */
	getName(): string;

	/**
	 * @return The option type ordinal: 0 = QuitOption, 1 = DialogOption, 2 = Disabled, 3 = RoleOption, 4 = CommandBlock
	 */
	getType(): number;
}

