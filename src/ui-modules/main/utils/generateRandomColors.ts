import { LARGEST_24_BIT_COLOR } from '@constants';

const getLuminance = (hexColor: string): number => {
	const r = parseInt(hexColor.slice(1, 3), 16) / 255;
	const g = parseInt(hexColor.slice(3, 5), 16) / 255;
	const b = parseInt(hexColor.slice(5, 7), 16) / 255;
	return 0.299 * r + 0.587 * g + 0.114 * b;
};

const getContrastingColor = (hexColor: string): string => {
	return getLuminance(hexColor) > 0.5 ? '#000000' : '#FFFFFF';
};

export const generateRandomColors = (): { backgroundColor: string; foregroundColor: string } => {
	const backgroundColor = `#${Math.floor(Math.random() * LARGEST_24_BIT_COLOR)
		.toString(16)
		.padStart(6, '0')}`;

	const foregroundColor = getContrastingColor(backgroundColor);

	return { backgroundColor, foregroundColor };
};
