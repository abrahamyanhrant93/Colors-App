import { IThemeColors } from '@ui-kit/interfaces/ThemeColors.interface';
import { createTheme } from '@rneui/themed';
import { getButtonTheme } from '@ui-kit/Button/Button.theme';
import { getTextTheme } from '@ui-kit/Text/Text.theme';
import { getImageTheme } from '@ui-kit/Image/Image.theme';

export const colors: IThemeColors = {
	lightGold: '#BC9D58',
	darkGold: '#8E723B',
	primaryBlack: '#000000',
	darkGrey: '#979797',
	mediumGrey: '#666666',
	lightGrey: '#C8C8C8',
	lighterGrey: '#F2F2F2',
	white: '#FFFFFF',
	primaryDarkGray: '#333333',
	yellow: '#F1C653',
	tan: '#DBD1BD',
	teal: '#007D8A',
	link: '#488AD7',
	error: '#FA2F53',
	success: '#00C193',
	primaryGrey: '#858585',
	lightestGrey: '#F9F9F9',
	moss: '#62B195',
	lavender: '#7D90D1',
	lightRed: '#FFF2F2',
	infoBlue: '#59A5FF',
	paleGrey: '#EBEBEB',
};

export const lightTheme = createTheme({
	...colors,

	components: {
		Button: getButtonTheme({ colors }),
		Text: getTextTheme({ colors }),
		Image: getImageTheme({ colors }),
	},
});
