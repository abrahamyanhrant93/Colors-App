import { StyleSheet } from 'react-native';
import { useTheme } from '@rneui/themed';

export function useStyles() {
	const { theme } = useTheme();

	const styles = StyleSheet.create({
		onboardingWrapper: {
			alignItems: 'center',
			flex: 1,
			justifyContent: 'center',
		},
	});

	return {
		styles,
		theme,
	};
}
