const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "dog",
      breed: "Havanese",
    }),
    React.createElement(Pet, {
      name: "Woops",
      animal: "catr",
      breed: "persian",
    }),
    React.createElement(Pet, {
      name: "mat",
      animal: "human",
      breed: "none",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
