import type { ReactNode } from 'react';
import { ThemeProvider as RNEThemeProvider } from '@rneui/themed';
import { lightTheme } from './themes/light';

function ThemeProvider({ children }: IThemeProviderProps) {
	return <RNEThemeProvider theme={lightTheme}>{children}</RNEThemeProvider>;
}

interface IThemeProviderProps {
	children: ReactNode;
}

export default ThemeProvider;
