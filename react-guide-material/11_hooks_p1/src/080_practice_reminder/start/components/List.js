import { useTodos } from "../context/TodoContext";
import Item from "./Item";

const List = () => {
    // const complete = (id) => {
    //     deleteTodo(id)
    // }

    const todos = useTodos();

    return (
        <div>
            {todos.map(todo => {
                return (
                    <Item key={todo.id} todo={todo} />
                )
            })}
        </div>
    );
}

export default List;