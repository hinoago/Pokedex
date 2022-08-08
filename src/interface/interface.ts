type Sprite = {
	front_default: string;
};

export type Type = {
	name: string;
};

export type Types = {
	slot: string;
	type: Type;
};

export interface Pokemon {
	sprites: Sprite;
	types: Array<Types>;
}
