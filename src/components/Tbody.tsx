import { useContext } from "react";
import { SuperherosContext } from "../context/SuperherosContext";
import { TbodyProps } from "../types";

const Tbody: React.FC<TbodyProps> = ({ cells }) => {
  const superherosContext = useContext(SuperherosContext);

  const { removeCompare } = superherosContext;

  return (
    <tbody>
      {cells.length ? (
        cells.map((cell, rowIndex) => {
          const isDeleteCell = cell.name === "Delete";

          return (
            <tr
              key={cell.name + rowIndex}
              className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {!isDeleteCell && cell.name}
              </th>
              {cell.data.map((value, i) => {
                const content = isDeleteCell ? (
                  <button
                    className="bg-blue-100 text-blue-800 text-1xl font-medium inline-flex items-center justify-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-blue-400"
                    onClick={() => removeCompare(value)}
                    aria-label={`Remove ${value}`}
                  >
                    ❌
                  </button>
                ) : (
                  value
                );

                return (
                  <td key={cell.name + i} className="px-6 py-4 text-center">
                    {content}
                  </td>
                );
              })}
            </tr>
          );
        })
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
  );
};

export default Tbody;
