import type { TextProps } from '@rneui/base';
import {IGetComponentTheme} from "@ui-kit/interfaces/GetComponentTheme.interface";

export const getTextTheme: IGetComponentTheme<Partial<TextProps>> = ({ colors }) => ({
	h1Style: {
		fontFamily: 'Inter_300Light',
		fontSize: 38,
		lineHeight: 42,
		color: colors.primaryBlack,
		flexShrink: 1,
	},
	h2Style: {
		fontFamily: 'Inter_400Regular',
		fontSize: 28,
		lineHeight: 42,
		color: colors.primaryBlack,
		flexShrink: 1,
	},
	h3Style: {
		fontFamily: 'Inter_400Regular',
		fontSize: 21,
		lineHeight: 28,
		color: colors.primaryBlack,
		flexShrink: 1,
	},
	h4Style: {
		fontFamily: 'Inter_400Regular',
		fontSize: 16,
		lineHeight: 21,
		color: colors.primaryBlack,
		flexShrink: 1,
	},
	style: {
		fontFamily: 'OpenSans_400Regular',
		fontSize: 16,
		lineHeight: 21,
		color: colors.primaryDarkGray,
		flexShrink: 1,
	},
	allowFontScaling: true,
});
