import { Route, Routes } from "react-router-dom";
import SuperherosProvider from "./context/SuperherosContext";
import Home from "./components/Home";
import SuperheroStats from "./components/SuperheroStats";

const App = () => {
  return (
    <SuperherosProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/superhero/:id" element={<SuperheroStats />} />
      </Routes>
    </SuperherosProvider>
  );
};

export default App;
