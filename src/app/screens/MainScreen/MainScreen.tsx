import React from 'react';
import { View } from 'react-native';

import { useFirstLaunch } from '@hooks';

import ColorLayout from '@ui-modules/main/components/ColorLayout';

import { useStyles } from './MainScreen.useStyles';
import { Onboarding } from '../../components';

const MainScreen = () => {
	const { styles } = useStyles();
	const { isFirstLaunch, completeFirstLaunch, loading } = useFirstLaunch();

	return (
		<>
			{isFirstLaunch ? (
				<View style={styles.onboardingWrapper}>
					<Onboarding loading={loading} onComplete={completeFirstLaunch} />
				</View>
			) : (
				<ColorLayout />
			)}
		</>
	);
};

export default MainScreen;
