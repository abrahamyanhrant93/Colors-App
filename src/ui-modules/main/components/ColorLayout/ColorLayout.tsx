import React from 'react';
import { Animated, Pressable } from 'react-native';

import { useRandomColor } from '@ui-modules/main/hooks/useRandomColor';

import { useStyles } from './ColorLayout.useStyles';

const ColorLayout = () => {
	const { styles } = useStyles();
	const { interpolatedBackgroundColor, interpolatedForegroundColor, changeColor } = useRandomColor();

	return (
		<Pressable style={styles.container} onPress={changeColor}>
			<Animated.View
				style={[
					styles.container,
					{
						backgroundColor: interpolatedBackgroundColor,
					},
				]}
			>
				<Animated.Text style={[styles.text, { color: interpolatedForegroundColor }]}>Hello there</Animated.Text>
			</Animated.View>
		</Pressable>
	);
};

export default ColorLayout;
