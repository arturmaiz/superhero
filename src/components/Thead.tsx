import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SuperherosContext } from "../context/SuperherosContext";

const Thead = () => {
  const superherosContext = useContext(SuperherosContext);
  const navigate = useNavigate();

  const { compares } = superherosContext;

  return (
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="px-6 py-3">
          Stats
        </th>
        {compares.map(({ id, image, name }) => (
          <th key={id} scope="col" className="px-6 py-3">
            <div
              className="flex flex-col"
              onClick={() =>
                navigate(`/superhero/${id}`, {
                  state: { id: id },
                })
              }
            >
              <img
                className="w-10 h-10 rounded-full"
                src={image?.url}
                alt="Rounded avatar"
              />
              <span>{name}</span>
            </div>
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default Thead;
