import { useContext } from "react";
import { SuperherosContext } from "../context/SuperherosContext";
import { ISuperhero } from "../types";

const statsKeys = ["Eye Color", "Gender"];

const CompareSuperhero: React.FC<ISuperhero> = ({
  id,
  name,
  image,
  appearance,
}) => {
  const superherosContext = useContext(SuperherosContext);

  const { compares, removeCompare } = superherosContext;

  return (
    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        Eye Color
      </th>
      <td key={id} className="px-6 py-4">
        Blue
      </td>
      <td className="px-6 py-4">
        <button
          className="bg-blue-100 text-blue-800 text-1xl font-medium inline-flex items-center justify-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-blue-400"
          onClick={() => removeCompare(id)}
        >
          ❌
        </button>
      </td>
    </tr>
  );
};

export default CompareSuperhero;
