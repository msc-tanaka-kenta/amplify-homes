import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type PosMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type HomeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Pos {
  readonly id: string;
  readonly timestamp?: number | null;
  readonly lat?: number | null;
  readonly lng?: number | null;
  readonly spd?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Pos, PosMetaData>);
  static copyOf(source: Pos, mutator: (draft: MutableModel<Pos, PosMetaData>) => MutableModel<Pos, PosMetaData> | void): Pos;
}

export declare class Home {
  readonly id: string;
  readonly address?: string | null;
  readonly image_url?: string | null;
  readonly price?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Home, HomeMetaData>);
  static copyOf(source: Home, mutator: (draft: MutableModel<Home, HomeMetaData>) => MutableModel<Home, HomeMetaData> | void): Home;
}