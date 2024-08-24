import type { ButtonProps } from '@rneui/base';
import type { IGetComponentTheme } from '@ui-kit/interfaces/GetComponentTheme.interface';

export const getButtonTheme: IGetComponentTheme<Partial<ButtonProps>> = ({ colors }) => ({
	buttonStyle: { backgroundColor: colors.yellow, paddingVertical: 4, borderRadius: 2 },
	containerStyle: { borderRadius: 2 },
	titleStyle: {
		color: colors.primaryBlack,
		fontFamily: 'Trebuchet MS',
		fontSize: 16,
	},
});
