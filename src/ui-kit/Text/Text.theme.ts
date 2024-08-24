import type { TextProps } from '@rneui/base';
import type { IGetComponentTheme } from '@ui-kit/interfaces/GetComponentTheme.interface';

export const getTextTheme: IGetComponentTheme<Partial<TextProps>> = ({ colors }) => ({
	h1Style: {
		fontFamily: 'Trebuchet MS',
		fontSize: 38,
		lineHeight: 42,
		color: colors.primaryBlack,
		flexShrink: 1,
		fontWeight: 300,
	},
	h2Style: {
		fontFamily: 'Trebuchet MS',
		fontSize: 28,
		lineHeight: 42,
		color: colors.primaryBlack,
		flexShrink: 1,
	},
	h3Style: {
		fontFamily: 'Trebuchet MS',
		fontSize: 21,
		lineHeight: 28,
		color: colors.primaryBlack,
		flexShrink: 1,
	},
	h4Style: {
		fontFamily: 'Trebuchet MS',
		fontSize: 16,
		lineHeight: 21,
		color: colors.primaryBlack,
		flexShrink: 1,
	},
	style: {
		fontFamily: 'Trebuchet MS',
		fontSize: 16,
		lineHeight: 21,
		color: colors.primaryDarkGray,
		flexShrink: 1,
	},
	allowFontScaling: true,
});
