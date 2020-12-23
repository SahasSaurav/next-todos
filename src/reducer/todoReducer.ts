export const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD-TODO': return [action.payload, ...state]
    case 'DELETE-TODO': return state.filter((todo) => todo.id !== action.payload)
    case 'TOGGLE-COMPLETED':
      //findind the index of todo to be toggle completion
      const index = state.findIndex(todo => todo.id == action.payload)
      //copy  and destructring the todo to be toggle completion
      const [selectedTodo] = state.filter(todo => todo.id == action.payload)
      const { completed } = selectedTodo
      state[index].completed = !completed
      return [...state]
    case 'CLEAR-COMPLETED': return state.filter((todo) => todo.completed === false)
    case 'DRAG':
      const dragELIndex = state.findIndex(todo => todo.id == action.payload.id) //drag element index
      const dropELIndex = state.findIndex(todo => todo.id == action.payload.new_id) //drop element index
      //store the copy of todo for swapping
      const temp1 = state[dragELIndex]
      const temp2 = state[dropELIndex]
      //swapping the position in array
      state[dropELIndex] = temp1
      state[dragELIndex] = temp2
      return [...state]
    default:
      return state;
  }
}