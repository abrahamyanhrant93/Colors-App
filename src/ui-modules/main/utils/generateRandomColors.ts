import {
	DARK_COLOR,
	LIGHT_COLOR,
	CONTRAST_THRESHOLD,
	LARGEST_24_BIT_COLOR,
	RED_LUMINANCE_WEIGHT,
	BLUE_LUMINANCE_WEIGHT,
	GREEN_LUMINANCE_WEIGHT,
} from '@constants';

const getLuminance = (hexColor: string): number => {
	const r = parseInt(hexColor.slice(1, 3), 16) / 255;
	const g = parseInt(hexColor.slice(3, 5), 16) / 255;
	const b = parseInt(hexColor.slice(5, 7), 16) / 255;
	return RED_LUMINANCE_WEIGHT * r + GREEN_LUMINANCE_WEIGHT * g + BLUE_LUMINANCE_WEIGHT * b;
};

const getContrastingColor = (hexColor: string): string => {
	return getLuminance(hexColor) > CONTRAST_THRESHOLD ? DARK_COLOR : LIGHT_COLOR;
};

export const generateRandomColors = (): { backgroundColor: string; foregroundColor: string } => {
	const backgroundColor = `#${Math.floor(Math.random() * LARGEST_24_BIT_COLOR)
		.toString(16)
		.padStart(6, '0')}`;

	const foregroundColor = getContrastingColor(backgroundColor);

	return { backgroundColor, foregroundColor };
};
