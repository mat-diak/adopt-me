import { render } from "react-dom";
import { StrictMode } from "react";
import SearchParams from "./SearchParams.jsx";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Details from "./Details.jsx";

const App = () => {
  return (
    <StrictMode>
      <BrowserRouter>
        <header>
          <Link to="/">Adopt me!</Link>
        </header>

        <Routes>
          <Route path="/details/:id" element={<Details />} />
          <Route path="/" element={<SearchParams />} />
        </Routes>
      </BrowserRouter>
      <div></div>
    </StrictMode>
  );
};

render(<App />, document.getElementById("root"));
