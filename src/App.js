import { render } from "react-dom";
import Pet from "./Pet.js";

const App = () => {
  return (
    <div>
      <h1>Adopt me!</h1>
      <Pet name="Luna" animal="dog" breed="Havanese" />
      <Pet name="Woops" animal="cat" breed="ragdoll" />
      <Pet name="mat" animal="human" breed="none" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
