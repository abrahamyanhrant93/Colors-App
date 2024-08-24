import ThemeProvider from './src/ui-kit/ThemeProvider';
import 'react-native-gesture-handler';

import { MainScreen } from './src/app/screens';

export default function App() {
	return (
		<ThemeProvider>
			<MainScreen />
		</ThemeProvider>
	);
}
