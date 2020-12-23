import { useContext } from "react";
import { useDrag, useDrop } from "react-dnd";
import { TodosContext, Todo } from "../context/TodosContext";

interface TodoItemProps {
  todo: Todo;
}


const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const { deleteTodo, toggleCompleted, moveItem } = useContext(TodosContext)
  const [, drag] = useDrag({
    item: {
      id: todo.id,
      type: "item",
    },
    collect: (monitor) => {
      return {
        isDragging: !!monitor.isDragging(),
      };
    },
  });
  const [, drop] = useDrop({
    accept: "item",
    drop: (item, monitor) => moveItem(item.id, todo.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <li ref={drop} className="list-item w-full p-4 outline-none text-gray-50 ">
      <div ref={drag} className="flex justify-start items-center">
        <div className=" flex">
        <input type="checkbox" className="h-6 w-6  appearance-none rounded-full outline-none checkbox" aria-label="Mark completed todo" checked={todo.completed} onChange={() => toggleCompleted(todo.id)} />
        <span className={`block h-6 w-6 check-img ${todo.completed===false?'opacity-0':'opacity-100'} `}>      </span>
      </div>
        <p
          className={`px-4 py-2 h-12 text-xl ${
            todo.completed === true ? "line-through text-gray-300" : ""
          }`}
        >
          {todo.text}
        </p>

        <button
          onClick={() => deleteTodo(todo.id)}
          className="ml-auto focus:outline-none delete-btn"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 fill-current text-gray-50  transform scale-110 "
          >
            <path
              fillRule="evenodd"
              d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
            />
          </svg>
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
