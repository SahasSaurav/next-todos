import { useEffect, useState } from "react";
import { Theme } from "../types/ThemeTypes";
import { Todo } from "../types/TodoTypes";

const withLocalStorage = (WrappedComponent: React.FC) => {
  return (props) => {
    const [theme, setTheme] = useState<Theme | null>(null);
    const [todos, setTodos] = useState<Todo[] | null>(null);

    useEffect(() => {
      setTheme(JSON.parse(localStorage.getItem("theme")));
      setTodos(JSON.parse(localStorage.getItem("todos")));
    }, []);

    return <WrappedComponent theme={theme} todos={todos} {...props} />;
  };
};

export default withLocalStorage;
