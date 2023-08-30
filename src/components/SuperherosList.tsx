import Superhero from "./Superhero";
import { ISuperherosList } from "../types";

const SuperherosList: React.FC<ISuperherosList> = ({ superheros }) => {
  return (
    superheros &&
    superheros.length > 0 &&
    superheros.map((superhero) => (
      <Superhero key={superhero.id} {...superhero} />
    ))
  );
};

export default SuperherosList;
