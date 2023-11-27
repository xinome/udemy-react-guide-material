import { useState } from "react";

import AnimalList from "../end/components/AnimalList";
import AnimalFilter from "./components/AnimalFilter";


const Example = () => {
  const animals = ["Dog", "Cat", "Rat"];

  const [filterVal, setFilterVal] = useState("");
  
  const filteredAnimals = animals.filter((animal) => {
    const isMatch = animal.indexOf(filterVal) !== -1;
    return isMatch;
  });

  return (
    <>
      {/* <input
        type="text"
        value={filterVal}
        onChange={(e) => setFilterVal(e.target.value)}
      /> */}
      <AnimalFilter filterState={[filterVal, setFilterVal]} />

      {/* <ul>
        {animals
          .filter((animal) => {
            const isMatch = animal.indexOf(filterVal) !== -1;
            return isMatch;
          })
          .map((animal) => {
            return (
              <li key={animal}>
                {animal}
                {animal === "Dog" && "★"}
              </li>
            );
          })}
      </ul> */}
      <AnimalList animals={filteredAnimals} />
    </>
  );
};

export default Example;
