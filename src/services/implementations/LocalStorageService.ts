import AsyncStorage from '@react-native-async-storage/async-storage';
import type { IStorage } from '../interfaces/Storage.interface';

export class LocalStorageService implements IStorage {
	async getItem(key: string): Promise<string | null> {
		return await AsyncStorage.getItem(key);
	}
	async setItem(key: string, value: string): Promise<void> {
		return await AsyncStorage.setItem(key, value);
	}
	async removeItem(key: string): Promise<void> {
		return await AsyncStorage.removeItem(key);
	}
}
