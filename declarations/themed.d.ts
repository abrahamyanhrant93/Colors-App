import '@rneui/themed';
import { IThemeColors } from '@ui-kit/interfaces/ThemeColors.interface';

declare module '@rneui/themed' {
	export interface Theme {
		colors: IThemeColors;
	}
}

declare module '@rneui/themed' {
	export interface Colors extends IThemeColors {}

	export interface FullTheme {
		colors: RecursivePartial<Colors>;
	}
}
