import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ISuperhero } from "../types";
import { SuperherosContext } from "../context/SuperherosContext";
import styles from "../styles/Superhero.module.css";

const Superhero: React.FC<ISuperhero> = ({
  id,
  image,
  name,
  appearance,
  biography,
  powerstats,
}) => {
  const superherosContext = useContext(SuperherosContext);

  const { compares, addCompare } = superherosContext;

  const isCompare = compares.some((superhero) => superhero.id === id);

  const navigate = useNavigate();

  const handleCompareClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    addCompare({ id, image, name, appearance, biography, powerstats });
  };

  return (
    <div
      className={`${styles.superhero} cursor-pointer lg:w-[250px] p-4 mb-4 mr-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700`}
      onClick={() =>
        navigate(`/superhero/${id}`, {
          state: { id: id },
        })
      }
    >
      <div className="flex items-center">
        {image?.url && (
          <img
            className="w-20 h-20 mb-3 rounded-full shadow-lg mr-5"
            src={`${image?.url}`}
            alt={`${name} image`}
          />
        )}
        <h5 className="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
      </div>
      {isCompare ? (
        <div className="mt-4 px-3 py-3 text-sm">📌</div>
      ) : (
        <button
          disabled={compares.length === 6}
          onClick={handleCompareClick}
          className="inline-flex mt-4 px-3 py-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Compare
        </button>
      )}
    </div>
  );
};

export default Superhero;
