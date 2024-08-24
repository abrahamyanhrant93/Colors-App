import { useState, useCallback, useEffect } from 'react';

import { ALREADY_LAUNCHED } from '@constants';
import { LocalStorageService } from '@services';

export const useFirstLaunch = () => {
	const localStorage = new LocalStorageService();

	const [isFirstLaunch, setIsFirstLaunch] = useState<boolean>(false);
	const [loading, setLoading] = useState<boolean>(true); // Track if initial load is complete

	useEffect(() => {
		const checkFirstLaunch = async () => {
			const alreadyLaunched = await localStorage.getItem(ALREADY_LAUNCHED);
			setIsFirstLaunch(alreadyLaunched !== 'true');
			setLoading(false); // Initial load complete
		};

		checkFirstLaunch();
	}, [localStorage]);

	const completeFirstLaunch = useCallback(async () => {
		await localStorage.setItem(ALREADY_LAUNCHED, 'true');
		setIsFirstLaunch(false);
	}, [localStorage]);

	return {
		isFirstLaunch,
		completeFirstLaunch,
		loading, // Return loading status to handle initial load
	};
};
