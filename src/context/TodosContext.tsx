import { createContext, useReducer } from "react";
import { v4 as uuid } from "uuid";
import { todoReducer } from "../reducer/todoReducer";

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  toShow: boolean;
}
export interface TodosContextType {
  todos: Todo[];
  moveItem: (id: string, new_id: string) => void;
  addNewTodo: (item: Todo) => void;
  deleteTodo: (id: String) => void;
  clearCompleted: () => void;
  toggleCompleted: (id: String) => void;
}

let todoInitialState: Todo[] = [
  {
    id: uuid(),
    text: "Complete online JavaScript course",
    completed: true,
    toShow: true,
  },
  {
    id: uuid(),
    text: "Jog around the park 3x",
    completed: false,
    toShow: true,
  },
  {
    id: uuid(),
    text: "10 minutes meditation",
    completed: false,
    toShow: true,
  },
  {
    id: uuid(),
    text: "Read for 1 hour",
    completed: false,
    toShow: true,
  },
  {
    id: uuid(),
    text: "Pick up groceries",
    completed: false,
    toShow: true,
  },
];

export const TodosContext = createContext<TodosContextType>(null);

const TodosProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [todoState, todoDispatch] = useReducer(todoReducer, todoInitialState);

  const moveItem = (id: string, new_id: string) => {
    todoDispatch({
      type: "DRAG",
      payload: { id, new_id },
    });
  };

  const addNewTodo = (item: Todo) => {
    todoDispatch({
      type: "ADD-TODO",
      payload: item,
    });
  };
  const deleteTodo = (id: string) => {
    todoDispatch({
      type: "DELETE-TODO",
      payload: id,
    });
  };
  const clearCompleted = () => {
    todoDispatch({
      type: "CLEAR-COMPLETED",
    });
  };
  const toggleCompleted = (id: string) => {
    todoDispatch({
      type: "TOGGLE-COMPLETED",
      payload: id,
    });
  };
  

  return (
    <TodosContext.Provider
      value={{
        todos:todoState,
        addNewTodo,
        deleteTodo,
        clearCompleted,
        toggleCompleted,
        moveItem,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
};

export default TodosProvider;
