import { useContext, useState } from "react";
import { TodosContext,Todo } from "../context/TodosContext";
import FilterMenu from "./FIlterMenu";
import TodoItem from "./TodoItem";

interface TodoListContext{
  todos:Todo[],
  clearCompleted:()=>void
}

const TodosList = () => {
  const { todos, clearCompleted } = useContext(TodosContext);

  const [filterBy, setFilterBy] = useState<String>("all");

  const filters:()=>Todo[] = () => {
    let newTodos;
    switch (filterBy) {
      case "all":
        newTodos = todos.filter((todo) => todo.toShow === true);
        return newTodos;
      case "active":
        newTodos = todos.filter((todo) => todo.completed === false);
        return newTodos;
      case "completed":
        newTodos = todos.filter((todo) => todo.completed === true);
        return newTodos;
      default:
        return todos;
    }
  };

  return (
    <ul className="m-4 bg-gray-700 rounded-lg divide-y divide-gray-400">
      {filters().map((todo) => {
        return <TodoItem todo={todo} key={todo.id} />;
      })}
      <li className=" flex justify-between items-center p-4 text-gray-50">
        <span>{todos.length} items left</span>
        <FilterMenu filterBy={filterBy} setFilterBy={setFilterBy} />
        <button
          onClick={clearCompleted}
          className="p-1 cursor-pointer hover:underline focus:text-blue-500 focus:outline-none"
        >
          Clear Completed
        </button>
      </li>
    </ul>
  );
};

export default TodosList;