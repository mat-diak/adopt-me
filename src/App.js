import { StrictMode, useState, lazy, Suspense } from "react";
import ThemeContext from "./ThemeContext.jsx";
import { Routes, Route, Link } from "react-router-dom";

const Details = lazy(() => import("./Details.jsx"));
const SearchParams = lazy(() => import("./SearchParams.jsx"));

const App = () => {
  const theme = useState("darkblue");
  return (
    <StrictMode>
      <Suspense fallback={<h2>loading, be patient</h2>}>
        <ThemeContext.Provider value={theme}>
          <header>
            <Link to="/">Adopt me!</Link>
          </header>
          <Routes>
            <Route path="/details/:id" element={<Details />} />
            <Route path="/" element={<SearchParams />} />
          </Routes>
        </ThemeContext.Provider>
      </Suspense>
    </StrictMode>
  );
};

export default App;
