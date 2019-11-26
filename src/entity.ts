import { Mesh, PerspectiveProjection, Transform } from "./3d";

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

// CameraEntity

export class CameraEntity {
  public readonly kind = EntityKind.Camera;
  constructor(public id: EntityId, public transform: Transform, public projection: PerspectiveProjection) {}
}

export const cameraEntity = (id: EntityId, transform: Transform, projection: PerspectiveProjection) =>
  new CameraEntity(id, transform, projection);

// SimpleObjectEntity

export class SimpleObjectEntity {
  public readonly kind = EntityKind.SimpleObject;
  constructor(public id: EntityId, public transform: Transform, public mesh: Mesh) {}
}

export const simpleObjectEntity = (id: EntityId, transform: Transform, mesh: Mesh) =>
  new SimpleObjectEntity(id, transform, mesh);
