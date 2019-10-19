export type EntityId = number;

let _id = 0;

export const nextId = (): EntityId => _id++;
