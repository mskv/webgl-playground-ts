import { EntityId } from "./entity";

// Storage

export class Storage<T> {
  constructor(public map: Map<EntityId, T>) {}
}

export const storage = <T>(map: Map<EntityId, T>): Storage<T> => new Storage<T>(map);

export const storageInit = <T>() => storage(new Map<EntityId, T>());

export const storageGet = <T>(storage: Storage<T>, id: EntityId): T | null => storage.map.get(id) || null;

export const storageGetExpect = <T>(storage: Storage<T>, id: EntityId): T => {
  const item = storageGet(storage, id);

  if (item === null) {
    throw new Error(`expected to find an item under ${id} id`);
  }

  return item;
};

export const storageSetMut = <T>(storage: Storage<T>, id: EntityId, item: T): Storage<T> => {
  storage.map.set(id, item);
  return storage;
};

export const storageRemMut = <T>(storage: Storage<T>, id: EntityId): boolean => {
  return storage.map.delete(id);
};

export const storageVals = <T>(storage: Storage<T>): IterableIterator<[number, T]> => storage.map.entries();
