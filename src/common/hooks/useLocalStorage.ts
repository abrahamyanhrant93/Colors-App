import { useState, useEffect } from 'react';
import { LocalStorageService } from '@services';

export const useLocalStorage = <T>(key: string, initialValue: T) => {
	const storageService = new LocalStorageService();

	const [storedValue, setStoredValue] = useState<T>(initialValue);

	useEffect(() => {
		(async () => {
			const item = await storageService.getItem(key);
			if (item !== null) {
				setStoredValue(JSON.parse(item));
			}
		})();
	}, [key]);

	const setValue = async (value: T | ((val: T) => T)) => {
		try {
			const valueToStore = value instanceof Function ? value(storedValue) : value;
			setStoredValue(valueToStore);
			await storageService.setItem(key, JSON.stringify(valueToStore));
		} catch (error) {
			console.warn(`Error setting AsyncStorage key "${key}":`, error);
		}
	};

	const removeValue = async () => {
		try {
			setStoredValue(initialValue);
			await storageService.removeItem(key);
		} catch (error) {
			console.warn(`Error removing AsyncStorage key "${key}":`, error);
		}
	};

	return [storedValue, setValue, removeValue] as const;
};

export default useLocalStorage;
