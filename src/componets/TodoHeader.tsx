import ToggleButton from "./ToggleButton";

const TodoHeader: React.FC = () => {
  return (
    <header className="flex justify-between items-center p-4">
      <h2 className="text-4xl md:text-6xl  text-white font-semibold tracking-widest">Todo</h2>
      <ToggleButton />
    </header>
  );
};

export default TodoHeader;
