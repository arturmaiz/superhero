import { useContext, useEffect, useState } from "react";
import { SuperherosContext } from "../context/SuperherosContext";
import { ICell, ISuperhero } from "../types";
import Thead from "./Thead";
import Tbody from "./Tbody";

const statsKeys = [
  { id: "eye-color", section: "appearance", name: "Eye Color" },
  { id: "intelligence", section: "powerstats", name: "Intelligence" },
  { id: "power", section: "powerstats", name: "Power" },
  { id: "speed", section: "powerstats", name: "Speed" },
  { id: "id", name: "Delete" },
];

const CompareSuperheros = () => {
  const [cells, setCells] = useState<ICell[]>([]);
  const superherosContext = useContext(SuperherosContext);

  const { compares } = superherosContext;

  useEffect(() => {
    setCells(
      compares.length > 0
        ? statsKeys.map((key) => ({
            name: key.name,
            data: compares.map((superhero: ISuperhero) =>
              key.section
                ? superhero?.[key.section]?.[key.id]
                : superhero?.[key.id]
            ),
          }))
        : []
    );
  }, [compares]);

  return (
    <table className="text-sm text-left text-gray-500 dark:text-gray-400">
      <Thead />
      <Tbody cells={cells} />
    </table>
  );
};

export default CompareSuperheros;
