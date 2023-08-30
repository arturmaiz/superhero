import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SuperherosContext } from "../context/SuperherosContext";

const statsKeys = [
  { id: "eye-color", section: "appearance", name: "Eye Color" },
  { id: "intelligence", section: "powerstats", name: "Intelligence" },
  { id: "power", section: "powerstats", name: "Power" },
  { id: "speed", section: "powerstats", name: "Speed" },
  { id: "id", name: "Delete" },
];

const CompareSuperheros = () => {
  const superherosContext = useContext(SuperherosContext);

  const { compares, removeCompare } = superherosContext;

  const [tds, setTds] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (compares.length > 0) {
      const keys = [];
      statsKeys.map((key) => {
        keys.push({
          name: key.name,
          data: compares.map((superhero) => {
            if (key.section) return superhero?.[key.section]?.[key.id];
            else return superhero?.[key.id];
          }),
        });
      });
      setTds(keys);
    } else setTds([]);
  }, [compares]);

  return (
    <table className="text-sm text-left text-gray-500 dark:text-gray-400">
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

      <tbody>
        {tds.length ? (
          tds.map((td) => (
            <tr
              key={td.name}
              className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {td.name === "Delete" ? null : td.name}
              </th>
              {td.data.map((value, i) => (
                <td key={i} className="px-6 py-4">
                  {td.name === "Delete" ? (
                    <button
                      className="bg-blue-100 text-blue-800 text-1xl font-medium inline-flex items-center justify-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-blue-400"
                      onClick={() => removeCompare(value)}
                    >
                      ❌
                    </button>
                  ) : (
                    value
                  )}
                </td>
              ))}
            </tr>
          ))
        ) : (
          <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Add Superheroes To Compare
            </th>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default CompareSuperheros;
