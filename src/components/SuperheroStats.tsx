import { Fragment, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import styles from "../styles/Container.module.css";
import { IStat } from "../types";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const VITE_API_KEY = import.meta.env.VITE_API_KEY;

const SuperheroStats = () => {
  const [data, setData] = useState<IStat | Record<string, never>>({});
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const id = location?.state?.id;

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get(`${BASE_URL}/${VITE_API_KEY}/${id}`);
        setData(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }
    fetchData();
  }, [id]);

  if (loading) {
    return (
      <section className={`${styles.container} bg-white dark:bg-gray-900`}>
        <div className="py-4 px-4 mx-auto max-w-screen-xl lg:py-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            Loading Superhero... 🦸‍♂️
          </h3>
        </div>
      </section>
    );
  }

  if (!data) {
    return null;
  }

  const { name, image, powerstats } = data;

  return (
    <section className={`${styles.container} bg-white dark:bg-gray-900`}>
      <div className="py-4 px-4 mx-auto max-w-screen-xl lg:py-16">
        <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8">
          <a
            href="/"
            className="bg-green-100 mb-4 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-1 rounded-md dark:bg-blue-900 dark:text-blue-300 mr-5"
          >
            Back to home
          </a>
          <span className="bg-green-100 mb-4 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-1 rounded-md dark:bg-green-900 dark:text-green-300">
            {name}
          </span>
          <img
            className="rounded-lg h-[300px] w-[300px]"
            src={image.url}
            alt={name}
          />
          {Object.entries(powerstats).map(([key, value]) => (
            <Fragment key={key}>
              <div className="flex justify-between mb-1 mt-4">
                <span className=" bg-blue-100 inline-block text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                  {key}
                </span>
                <span className="text-sm font-medium text-blue-700 dark:text-white">
                  {value}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-blue-600 h-2.5 rounded-full w-[45%]" />
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuperheroStats;
