import { useEffect, useReducer, useState } from "react";
import TodoList from "../components/TodoList";
import TodoForm from "../components/TodoForm";
import TodoFooter from "../components/TodoFooter";
import { useFetching } from "../hook/useFetching";
import TodoService from "../API/TodoService";
import Loader from "../UI/Loader";
import styles from "../styles/Todos.module.css";

function Todos() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "get":
        return [...action.payload];
      case "add":
        return [
          ...state,
          {
            id: new Date().getTime().toString(),
            title: action.payload.title,
            isCompleted: false,
          },
        ];
      case "delete":
        return [...state].filter((todo) => todo.id !== action.payload.id);
      case "editIsCompleted":
        return [
          ...state.map((todo) => {
            if (todo.id === action.payload) {
              return {
                ...todo,
                isCompleted: !todo.isCompleted,
              };
            }
            return todo;
          }),
        ];
      case "clearCompleted":
        return state.filter((todo) => !todo.isCompleted);
      case "editText":
        return [
          ...state.map((todo) => {
            if (todo.id === action.payload.id) {
              return {
                ...todo,
                title: action.payload.title,
              };
            }
            return todo;
          }),
        ];
      default:
        return state;
    }
  };

  const [todos, dispatch] = useReducer(reducer, []);
  const [page] = useState(1);
  const [limit] = useState(10);

  const [fetching, isLoading] = useFetching(async (limit, page) => {
    const res = await TodoService.getAll(limit, page);
    dispatch({
      type: "get",
      payload: [...res.data],
    });
  });

  const handleSubmit = (title) => {
    dispatch({
      type: "add",
      payload: {
        title: title,
      },
    });
  };

  const handleDelete = (id) => {
    dispatch({
      type: "delete",
      payload: {
        id: id,
      },
    });
  };

  const handleChange = (newTodo) => {
    dispatch({
      type: "editIsCompleted",
      payload: newTodo.id,
    });
  };

  const handleClearCompleted = () => {
    dispatch({
      type: "clearCompleted",
    });
  };

  const handleInput = (id, title) => {
    dispatch({
      type: "editText",
      payload: {
        id: id,
        title: title,
      },
    });
  };

  useEffect(() => {
    fetching(limit, page);

    // eslint-disable-next-line
  }, [limit, page]);

  return (
    <div className={styles.App}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <h1 className={styles.h1}>JUST DO IT!</h1>
          <TodoForm onAdd={handleSubmit} />
          <TodoList
            onInput={handleInput}
            onChange={handleChange}
            onDelete={handleDelete}
            todos={todos}
          />
          <TodoFooter onClearCompleted={handleClearCompleted} todos={todos} />
        </>
      )}
    </div>
  );
}

export default Todos;
