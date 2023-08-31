export interface ISuperhero {
  [key: string]: unknown;
  id: number | string;
  name?: string;
  image?: {
    url: string;
  };
  biography?: object;
  appearance: {
    gender: string;
    race: string;
    height: string[];
    weight: string[];
    eyeColor: string;
    hairColor: string;
  };
  powerstats: {
    intelligence: string;
    strength: string;
    speed: string;
    durability: string;
    power: string;
    combat: string;
  };
  setCompares?: React.Dispatch<React.SetStateAction<string[]>>;
}

export interface ISuperherosList {
  superheros: ISuperhero[];
}

export interface ISearch {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}

export interface ISuperherosProviderProps {
  children: React.ReactNode;
}

export interface ISuperherosContextType {
  compares: ISuperhero[];
  addCompare: (superhero: ISuperhero) => void;
  removeCompare: (id: number | string) => void;
}

export interface IKeys {
  name: string;
  data: (string | undefined)[];
}

export interface ICell {
  name: string;
  data: (string | number)[];
}

export interface TbodyProps {
  cells: ICell[];
}

export interface IStat {
  name: string;
  image: {
    url: string;
  };
  powerstats: IPowerStats;
}

export interface IPowerStats {
  [key: string]: string;
}

export type TDebounceValue = string;
