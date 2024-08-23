import type { ImageProps } from '@rneui/themed';
import type { IGetComponentTheme } from '@ui-kit/interfaces/GetComponentTheme.interface';

export const getImageTheme: IGetComponentTheme<Partial<ImageProps>> = ({ colors }) => ({
	placeholderStyle: {
		backgroundColor: colors.lightGrey,
	},
});
