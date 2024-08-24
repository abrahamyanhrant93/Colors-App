import { Dimensions, StyleSheet } from 'react-native';
import { useTheme } from '@hooks';

const { width } = Dimensions.get('screen');

export function useStyles() {
	const { theme } = useTheme();

	const styles = StyleSheet.create({
		container: {
			alignItems: 'center',
			flex: 1,
			justifyContent: 'center',
			width,
		},
		text: {
			fontFamily: 'Trebuchet MS',
			fontSize: 24,
			fontWeight: 'bold',
			textAlign: 'center',
			userSelect: 'none',
		},
		counter: {
			fontSize: 18,
			marginTop: 10,
			textAlign: 'center',
		},
	});

	return { styles, theme };
}
