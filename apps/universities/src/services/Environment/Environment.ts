import { IEnvironment } from '.';

export default class Environment<T> implements IEnvironment<T> {
    private readonly values = new Map();

    public get<K extends keyof T>(name: K): T[K] {
        if (this.values.has(name)) {
            return this.values.get(name);
        }

        throw new Error(`There is no environment variable "${name}"`);
    }

    public set<K extends keyof T>(name: K, value: T[K]): void {
        if (value !== undefined) {
            this.values.set(name, value);
        }

        throw new Error(
            `No value provided for environment variable "${name}"`
        );
    }
}