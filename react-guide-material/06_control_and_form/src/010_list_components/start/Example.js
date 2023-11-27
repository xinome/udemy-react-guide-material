
const animals = ["Dog", "Cat", "Rat"];

// オブジェクト型の場合
const animalList = [];
for(const animal of animals) {
  animalList.push(<li>{animal}</li>);
}

// マップの場合
const helloAnimals = animals.map((animal) => (
  <li>Hello, {animal}</li>
));

const Example = () => {

  return (
    <>
      <h3>配列の操作</h3>
      <ul>
        {/* {animalList} */}
        {/* {helloAnimals} */}
        {animals.map((animal) => <li>Hello, {animal}</li> )}
      </ul>
    </>
  );
};

export default Example;
