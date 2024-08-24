import type { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type TAppScreens = {
	HomeScreen: undefined;
};

export type TNavigateScreens = {
	Drawer: NavigatorScreenParams<TAppScreens>;
};

export type TScreenProps<TScreen extends keyof TAppScreens> = CompositeScreenProps<
	NativeStackScreenProps<TAppScreens, TScreen>,
	NativeStackScreenProps<TAppScreens>
>;
