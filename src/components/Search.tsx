import { ISearch } from "../types";

const Search: React.FC<ISearch> = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8">
      <form className="space-y-6" action="#">
        <label
          htmlFor="superhero"
          className="text-2xl font-bold text-gray-900 dark:text-white"
        >
          Search your superhero 🦸‍♂️
        </label>
        <input
          type="text"
          id="superhero"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="spiderman..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Search;
