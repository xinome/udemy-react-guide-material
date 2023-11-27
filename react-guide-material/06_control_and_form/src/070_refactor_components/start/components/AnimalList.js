import AnimalItem from "./AnimalItem";

const AnimalList = ({ animals }) => {
  console.log(animals);

  if(animals.length === 0) {
    return <h3>アニマルが見つかりません。</h3>
  }
  return (
    <ul>
      {animals.map((animal) => {
          return (
            // <li key={animal}>
            //   {animal}
            //   {animal === "Dog" && "★"}
            // </li>
            <AnimalItem key={animal} animal={animal} />
          );
        })}
    </ul>
  );
}

export default AnimalList;