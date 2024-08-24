import { StyleSheet } from 'react-native';
import { useTheme } from '@hooks';

export function useStyles() {
	const { theme } = useTheme();

	const styles = StyleSheet.create({
		container: {
			alignItems: 'center',
			flex: 1,
			justifyContent: 'center',
			padding: 20,
		},
		title: {
			fontFamily: 'Trebuchet MS',
			fontSize: 24,
			fontWeight: 'bold',
			marginBottom: 20,
		},
		description: {
			fontFamily: 'Trebuchet MS',
			fontSize: 16,
			marginBottom: 40,
			textAlign: 'center',
		},
		ctaTitle: {
			fontSize: 16,
		},
	});

	return { styles, theme };
}
