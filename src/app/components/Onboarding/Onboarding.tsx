import React from 'react';
import { View, Text } from 'react-native';
import { Button } from '@ui-kit';

import { useStyles } from './Onboarding.useStyles';

const Onboarding: React.FC<IOnboardingProps> = ({ onComplete }) => {
	const { styles } = useStyles();
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Welcome to the App!</Text>
			<Text style={styles.description}>
				This app allows you to change the background color by simply tapping anywhere on the screen. Enjoy experimenting
				with different colors!
			</Text>
			<Button
				type={'outline'}
				title="Get Started"
				variant={'small'}
				trackingName="get_started"
				titleStyle={styles.ctaTitle}
				onPress={onComplete}
			/>
		</View>
	);
};

interface IOnboardingProps {
	onComplete: () => void;
}

export default Onboarding;
