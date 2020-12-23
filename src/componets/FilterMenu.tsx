interface FilterMenuProps{
  filterBy:String,
  setFilterBy:(str:string)=>void
}

const FilterMenu: React.FC<FilterMenuProps> = ({filterBy,setFilterBy}) => {
  return (
    <div className="space-x-4">
      <button
        onClick={(e) => setFilterBy("all")}
        aria-label="Filter by all todo"
        className={`p-1 cursor-pointer hover:underline focus:outline-none ${
          filterBy === "all" ? "text-blue-500" : ""
        } `}
      >
        All
      </button>
      <button
        onClick={(e) => setFilterBy("active")}
        aria-label="Filter by active todo"
        className={`p-1 cursor-pointer hover:underline  focus:outline-none ${
          filterBy === "active" ? "text-blue-500" : ""
        } `}
      >
        Active
      </button>
      <button
        onClick={(e) => setFilterBy("completed")}
        aria-label="Filter by completed todo"
        className={`p-1 cursor-pointer hover:underline  focus:outline-none ${
          filterBy === "completed" ? "text-blue-500" : ""
        } `}
      >
        {" "}
        Completed
      </button>
    </div>
  );
};

export default FilterMenu;
