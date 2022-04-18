import { render } from "react-dom";
import { StrictMode, useState, lazy, Suspense } from "react";
import ThemeContext from "./ThemeContext.jsx";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const Details = lazy(() => import("./Details.jsx"));
const SearchParams = lazy(() => import("./SearchParams.jsx"));

const App = () => {
  const theme = useState("darkblue");
  return (
    <StrictMode>
      <Suspense fallback={<h2>loading, be patient</h2>}>
        <ThemeContext.Provider value={theme}>
          <BrowserRouter>
            <header>
              <Link to="/">Adopt me!</Link>
            </header>
            <Routes>
              <Route path="/details/:id" element={<Details />} />
              <Route path="/" element={<SearchParams />} />
            </Routes>
          </BrowserRouter>
        </ThemeContext.Provider>
      </Suspense>
    </StrictMode>
  );
};

render(<App />, document.getElementById("root"));
