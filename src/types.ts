export interface ISuperhero {
  id: number;
  name?: string;
  image?: {
    url: string;
  };
  biography?: object;
  appearance?: object;
  powerstats?: object;
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
  removeCompare: (id: number) => void;
}

export type TDebounceValue = string;
