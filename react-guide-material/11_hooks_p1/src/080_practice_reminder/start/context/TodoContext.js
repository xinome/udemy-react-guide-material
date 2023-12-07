import { createContext, useContext, useReducer } from "react";

const TodoContext = createContext();
const TodoDispatchContext = createContext();

const todosList = [
  {
    id: 1,
    content: "店予約する",
    editing: false,
  },
  {
    id: 2,
    content: "卵買う",
    editing: false,
  },
  {
    id: 3,
    content: "郵便出す",
    editing: false,
  },
];

const todoReducer = (todos, action) => {
  switch (action.type) {
    case 'todo/add':
      return [...todos, action.todo];
    case 'todo/delete':
      return todos.filter(todo => todo.id !== action.todo.id);
    case 'todo/update':
      return todos.map(_todo => {
        if (_todo.id === action.todo.id) {
          return action.todo;
        }
        return _todo;
      });
    default:
  }

  // const deleteTodo = (id) => {
  //   const newTodos = todos.filter((todo) => {
  //     return todo.id !== id;
  //   });

  //   setTodos(newTodos);
  // }

  // const createTodo = (todo) => {
  //   setTodos([...todos, todo]);
  // }

  // const updateTodo = (todo) => {
  //   const newTodos = todos.map(_todo => {
  //     if (_todo.id === todo.id) {
  //       return todo;
  //     }
  //     return _todo;
  //   });
  //   setTodos(newTodos);
  // };
};

const TodoProvider = ({ children }) => {
  
  const [ todos, dispatch ] = useReducer(todoReducer, todosList);

  

  return (
    <TodoContext.Provider value={todos}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoContext.Provider>
  );
};

const useTodos = () => useContext(TodoContext);
const useDispatchTodos = () => useContext(TodoDispatchContext);

export { TodoProvider, useTodos, useDispatchTodos };