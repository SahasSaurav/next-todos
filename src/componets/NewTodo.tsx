import { useContext, useState } from "react";
import { v4 as uuid } from "uuid";
import { TodosContext } from "../context/TodosContext";
import { TodosContextType} from '../types/TodoTypes'

const NewTodo = () => {
  const { addNewTodo } = useContext(TodosContext) as unknown as TodosContextType;

  const [todoDesc, setTodoDesc] = useState("");
  const [completed, setCompleted] = useState(false);

  const onSubmitHandle = (e) => {
    e.preventDefault();
    addNewTodo({
      id: uuid(),
      text: todoDesc,
      completed,
      toShow: true,
    });
    setTodoDesc("");
    setCompleted(false);
  };

  return (
    <form
      onSubmit={onSubmitHandle}
      className="flex justify-center items-center p-4 focus-within:ring  w- full  bg-white dark:bg-gray-700 m-4 rounded-lg shadow-md"
    >
      <div className=" flex">
        <input
          type="checkbox"
          className="h-6 w-6  appearance-none rounded-full outline-none checkbox border-2  border-gray-500 dark:border-gray-50 "
          aria-label="Mark completed todo"
          checked={completed}
          onChange={(e) => setCompleted(e.target.checked)}
        />
        <span
          className={`block h-6 w-6 check-img rounded-full ${
            completed === false ? "opacity-0" : "opacity-100"
          } `}
        >
        </span>
      </div>
      <input
        type="text"
        value={todoDesc}
        onChange={(e) => setTodoDesc(e.target.value)}
        placeholder="Create a new todo..."
        aria-label="Create a new todo"
        className=" bg-white dark:bg-gray-700 block h-12 w-full py-2 px-4 outline-none text-gray-700 dark:text-gray-50 placeholder-gray-700 dark:placeholder-gray-50 text-xl "
      />
      <button type="submit" className="hidden">Submit</button>
    </form>
  );
};

export default NewTodo;
