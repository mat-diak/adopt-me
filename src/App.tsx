import { render } from "react-dom";
import { StrictMode, useState } from "react";
import ThemeContext from "./ThemeContext.jsx";
import SearchParams from "./SearchParams.jsx";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Details from "./Details.jsx";

const App = () => {
  const theme = useState("darkblue");
  return (
    <StrictMode>
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
      <div></div>
    </StrictMode>
  );
};

render(<App />, document.getElementById("root"));
