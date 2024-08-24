/** Abstract interface for storages like AsyncStorage, etc. */
export interface IStorage {
	getItem(key: string): Promise<string | null>;
	setItem(key: string, value: string): Promise<void>;
	removeItem(key: string): Promise<void>;
}
