import { createContext, useEffect, useState } from "react";
import {
  ISuperhero,
  ISuperherosProviderProps,
  ISuperherosContextType,
} from "../types";

const initialContext = {
  compares: [],
  addCompare: () => {},
  removeCompare: () => {},
};

export const SuperherosContext =
  createContext<ISuperherosContextType>(initialContext);

const SuperherosProvider: React.FC<ISuperherosProviderProps> = ({
  children,
}) => {
  const [compares, setCompares] = useState<ISuperhero[]>(() => {
    return JSON.parse(localStorage.getItem("compares") || "[]");
  });

  useEffect(() => {
    localStorage.setItem("compares", JSON.stringify(compares));
  }, [compares]);

  const addCompare = (superhero: ISuperhero) => {
    const superheroExists = compares.some(
      (compare) => compare.id === superhero.id
    );

    if (!superheroExists) {
      setCompares((prev) => [...prev, superhero]);
    }
  };

  const removeCompare = (id: number) => {
    setCompares((prev) => prev.filter((superhero) => superhero.id !== id));
  };

  return (
    <SuperherosContext.Provider
      value={{
        compares,
        addCompare,
        removeCompare,
      }}
    >
      {children}
    </SuperherosContext.Provider>
  );
};

export default SuperherosProvider;
