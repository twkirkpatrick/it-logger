import { useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import SearchBar from "./components/layout/SearchBar";
import "./index.css";

const App = () => {
  useEffect(() => {
    M.AutoInit();
  });
  return (
    <>
      <SearchBar />
    </>
  );
};

export default App;
