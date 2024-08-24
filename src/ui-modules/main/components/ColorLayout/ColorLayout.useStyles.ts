import { Dimensions, StyleSheet } from 'react-native';
import { useTheme } from '@hooks';

export function useStyles() {
	const { theme } = useTheme();

	const styles = StyleSheet.create({
		container: {
			alignItems: 'center',
			flex: 1,
			justifyContent: 'center',
			width: Dimensions.get('screen').width,
		},
		text: {
			fontFamily: 'Trebuchet MS',
			fontSize: 24,
			fontWeight: 'bold',
			textAlign: 'center',
		},
		counter: {
			fontSize: 18,
			marginTop: 10,
			textAlign: 'center',
		},
	});

	return { styles, theme };
}
