import { FunctionComponent } from "react";
import { Pet as PetType } from "./APIResponsesTypes";
import Pet from "./Pet";

const Results: FunctionComponent<{ pets: PetType[] }> = ({ pets }) => {
  return (
    <div>
      {!pets.length ? (
        <h1>No pets found</h1>
      ) : (
        pets.map((pet) => {
          return (
            <Pet
              name={pet.name}
              animal={pet.animal}
              breed={pet.breed}
              key={pet.id}
              images={pet.images}
              location={`${pet.city}, ${pet.state}`}
              id={pet.id}
            />
          );
        })
      )}
    </div>
  );
};

export default Results;