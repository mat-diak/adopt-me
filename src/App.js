import { render } from "react-dom";
import { StrictMode } from "react";
import SearchParams from "./SearchParams.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./Details.jsx";

const App = () => {
  return (
    <StrictMode>
      <BrowserRouter>
        <h1>Adopt me!</h1>
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
