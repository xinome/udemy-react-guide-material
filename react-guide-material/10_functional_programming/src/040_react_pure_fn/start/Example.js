// POINT Reactと純粋関数
let value = 0;

const Child = () => {
  value++;
  return <div>{value}</div>
}

const ChildPure = ({ value }) => {
  return <div>{value}</div>
}

const Example = () => {
  let value = 0;

  return (
    <>
      {/* Bad: valueの値が変わるため、特定の引数に対して同じ戻り値が返ってこない */}
      <Child />
      <Child />
      <Child />

      {/* Good: 引数をpropsとして渡しているため、純粋関数となる */}
      <ChildPure value={++value} />
      <ChildPure value={++value} />
      <ChildPure value={++value} />
    </>
  );
};

export default Example;
