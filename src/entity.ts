import { CameraEntity, SimpleObjectEntity } from "./3d";

export type EntityId = number;

let _id = 0;

export const nextId = (): EntityId => _id++;

export enum EntityKind {
  Camera,
  SimpleObject,
}

export type Entity = CameraEntity | SimpleObjectEntity;

export const ofKindCurr = <K extends EntityKind>(kind: K) => (entity: Entity): entity is Extract<Entity, { kind: K }> =>
  entity.kind === kind;

export const ofKind = <K extends EntityKind>(kind: K, entity: Entity): entity is Extract<Entity, { kind: K }> =>
  entity.kind === kind;

export const assertKind = <K extends EntityKind>(kind: K, entity: Entity): entity is Extract<Entity, { kind: K }> => {
  if (ofKind(kind, entity)) {
    return true;
  } else {
    throw Error("Invalid entity kind");
  }
};
