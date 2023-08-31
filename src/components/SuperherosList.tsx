import Superhero from "./Superhero";
import { ISuperherosList } from "../types";

const SuperherosList: React.FC<ISuperherosList> = ({ superheros }) => {
  return superheros && superheros.length > 0 ? (
    superheros.map((superhero) => (
      <Superhero key={superhero.id} {...superhero} />
    ))
  ) : (
    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
      Search for Superhero to see results 🔍
    </h3>
  );
};

export default SuperherosList;
