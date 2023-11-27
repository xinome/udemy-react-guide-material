import { useState } from "react";

const Form = ({createTodo}) => {
  const [enteredTodo, setEnteredTodo] = useState("");
  const addTodo = (e) => {
    // const inputVal = e.target.value;
    e.preventDefault();   // ページ遷移を防ぐ

    const newTodo = {
      id: Math.floor(Math.random() * 1e5),
      content: enteredTodo,
    };

    createTodo(newTodo);
    setEnteredTodo("");   // 入力欄を空にする
  };

  return (
    <div>
      <form onSubmit={addTodo}>
        <input type="text" onChange={(e) => {setEnteredTodo(e.target.value)}} />
        <button>追加</button>
      </form>
    </div>
  );
};

export default Form;