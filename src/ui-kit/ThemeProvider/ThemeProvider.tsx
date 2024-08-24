import type { ReactNode } from 'react';
import { ThemeProvider as RNEThemeProvider } from '@rneui/themed';
import { lightTheme } from './themes/light';

const ThemeProvider = ({ children }: IThemeProviderProps) => (
	<RNEThemeProvider theme={lightTheme}>{children}</RNEThemeProvider>
);

interface IThemeProviderProps {
	children: ReactNode;
}

export default ThemeProvider;
