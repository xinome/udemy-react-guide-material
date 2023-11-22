import "./Expression.css";

const Expression = () => {
  const title = "Expression";
  const arr = ['item1', 'item2', 'item3'];
  const hello = (word) => `${word} World!`;

  return (
    <div className="expression">
      <h3>Hello {title}</h3>
      <h3>{arr}</h3>
      <h3>{hello('Hello')}</h3>
      <h3>{/* コメントは画面に表示されない */}</h3>
      {<h3>Hello JSX</h3>}
    </div>
  );
}

export default Expression;