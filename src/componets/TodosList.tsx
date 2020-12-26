import { useContext, useState } from "react";
import { TodosContext } from "../context/TodosContext";
import {Todo, TodosContextType } from '../types/TodoTypes'
import FilterMenu from "./FilterMenu";
import TodoItem from "./TodoItem";

const TodosList = () => {
  const { todos, clearCompleted } = useContext(TodosContext) as unknown as TodosContextType;

  const [filterBy, setFilterBy] = useState<String>("all");

  const filters: () => Todo[] = () => {
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
    <>
      <ul className="m-4 bg-white dark:bg-gray-700 rounded-lg divide-y divide-gray-400 shadow-lg">
        {filters().map((todo) => {
          return <TodoItem todo={todo} key={todo.id} />;
        })}
        <li className=" flex justify-between items-center p-4 text-gray-600 dark:text-gray-50">
          <span>{todos.length} items left</span>
         <span className="hidden sm:block" >
         <FilterMenu filterBy={filterBy} setFilterBy={setFilterBy} />
         </span>
          <button
            onClick={clearCompleted}
            className="p-1 cursor-pointer hover:underline focus:text-blue-500 focus:outline-none"
          >
            Clear Completed
          </button>
        </li>
      </ul>
      <div className="max-w-xl mx-4 mt-8 mb-4 bg-gray-100 dark:bg-gray-700 rounded-lg divide-y divide-gray-400 h-full  flex justify-center  items-center p-4 text-gray-700 dark:text-gray-50 sm:hidden">
        <FilterMenu filterBy={filterBy} setFilterBy={setFilterBy}  />
      </div>
    </>
  );
};

export default TodosList;
