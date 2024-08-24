import { Animated } from 'react-native';

import { useState, useRef } from 'react';
import { generateRandomColors } from '@ui-modules/main/utils/generateRandomColors';

export const useRandomColor = () => {
	const backgroundColorAnim = useRef(new Animated.Value(0)).current;
	const foregroundColorAnim = useRef(new Animated.Value(0)).current;

	const [colors, setColors] = useState(generateRandomColors());
	const [nextColors, setNextColors] = useState(generateRandomColors());

	const changeColor = () => {
		const newColors = generateRandomColors();
		setNextColors(newColors);

		Animated.timing(backgroundColorAnim, {
			toValue: 1,
			duration: 300,
			useNativeDriver: false,
		}).start(() => {
			setColors(newColors);
			backgroundColorAnim.setValue(0);
		});

		Animated.timing(foregroundColorAnim, {
			toValue: 1,
			duration: 300,
			useNativeDriver: false,
		}).start(() => {
			foregroundColorAnim.setValue(0);
		});
	};

	const interpolatedBackgroundColor = backgroundColorAnim.interpolate({
		inputRange: [0, 1],
		outputRange: [colors.backgroundColor, nextColors.backgroundColor],
	});

	const interpolatedForegroundColor = foregroundColorAnim.interpolate({
		inputRange: [0, 1],
		outputRange: [colors.foregroundColor, nextColors.foregroundColor],
	});

	return {
		interpolatedBackgroundColor,
		interpolatedForegroundColor,
		changeColor,
	};
};
