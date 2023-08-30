import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import CompareSuperheros from "./CompareSuperheros";
import Search from "./Search";
import SuperherosList from "./SuperherosList";
import styles from "../styles/Container.module.css";
import SuperherosStyles from "../styles/Superheros.module.css";
import useDebounce from "../hooks/useDebounce";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const VITE_API_KEY = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [superheros, setSuperheros] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `${BASE_URL}/${VITE_API_KEY}/search/${debouncedSearchTerm}`
      );

      if (data.error) {
        setLoading(false);
        setError(data.error);
      } else {
        setSuperheros(data.results || []);
        setLoading(false);
        setError("");
      }
    } catch (error) {
      console.error(error);
    }
  }, [debouncedSearchTerm]);

  useEffect(() => {
    if (!debouncedSearchTerm) {
      setSuperheros([]);
    } else {
      fetchData();
    }
  }, [fetchData, debouncedSearchTerm]);

  return (
    <section className={`${styles.container} bg-white dark:bg-gray-900`}>
      <div className="w-screen mx-auto max-w-screen-xl lg:py-16">
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <div className="grid md:grid-cols-2 gap-4">
          <div
            className={`flex justify-around flex-wrap ${SuperherosStyles["cards-container"]}`}
          >
            {error && searchTerm ? (
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {error} 😞
              </h3>
            ) : !loading && superheros && superheros.length >= 0 ? (
              <SuperherosList superheros={superheros} />
            ) : (
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Loading Superheros...
              </h3>
            )}
          </div>
          <CompareSuperheros />
        </div>
      </div>
    </section>
  );
};

export default Home;
