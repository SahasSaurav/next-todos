import { createContext, useReducer, useEffect,useState } from "react";
import { v4 as uuid } from "uuid";
import withLocalStorage from "../hoc/withLocalStorage";
import { todoReducer } from "../reducer/todoReducer";
import { Todo, TodoContextProps, TodosContextType } from "../types/TodoTypes";

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

const TodosProvider: React.FC<TodoContextProps> = ({ children, todos }) => {
  const [todoState, todoDispatch] = useReducer(
    todoReducer,
    todoInitialState,
    () => (todos ? todos : todoInitialState)
  );

  const [mount,setMount]=useState<boolean>(false)

  useEffect(() => {
    if(todoState && mount){
      window.localStorage.setItem("todos", JSON.stringify(todoState));
    }
  }, [todoState]);

  useEffect(() => {
    setMount(true)
    const todoArr=window.localStorage.getItem('todos')
    if(todoArr){
      const  todos=JSON.parse(todoArr)
      persistTodos(todos)
    }
  }, [])

  const persistTodos=(todos:Todo[])=>{
    todoDispatch({type:'PERSIST-TODOS',payload:todos})
  }

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
        todos: todoState,
        addNewTodo,
        deleteTodo,
        clearCompleted,
        toggleCompleted,
        moveItem,
        persistTodos
      }}
    >
      {children}
    </TodosContext.Provider>
  );
};

export default withLocalStorage(TodosProvider);
