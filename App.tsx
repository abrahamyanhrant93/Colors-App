import React from 'react';
import 'react-native-gesture-handler';

import ThemeProvider from './src/ui-kit/ThemeProvider';

import { MainScreen } from './src/app/screens';
import { Onboarding } from './src/app/components';
import { useFirstLaunch } from './src/common/hooks';

const App = () => {
	const { isFirstLaunch, completeFirstLaunch, loading } = useFirstLaunch();

	return (
		<ThemeProvider>
			{isFirstLaunch ? <Onboarding loading={loading} onComplete={completeFirstLaunch} /> : <MainScreen />}
		</ThemeProvider>
	);
};
export default App;
