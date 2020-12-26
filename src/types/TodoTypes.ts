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

export type TodoActionType = | { type: 'ADD-TODO', payload: Todo } |
{ type: 'DELETE-TODO', payload: String } |
{ type: 'TOGGLE-COMPLETED', payload: String } |
{ type: 'CLEAR-COMPLETED' } |
{ type: 'DRAG', payload: { id: String, new_id: String } }

export interface TodoContextProps{
  children:React.ReactNode,
  todos:Todo[],
}