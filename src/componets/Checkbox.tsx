import {useState} from 'react';
const Checkbox = () => {
  const [completed, setCompleted] = useState(false);
  return (
    <>
      <input
        type="checkbox"
        className="h-6 w-6  appearance-none rounded-full outline-none checkbox"
        checked={completed}
        onChange={(e) => setCompleted(e.target.checked)}
      />
    </>
  );
};

export default Checkbox;
