export const initialState = [];

export function todoReducer(state, action) {
  switch (action.type) {

    case "ADD":
      return [
        action.payload,
        ...state
      ];

    case "DELETE":
      return state.filter(todo => todo.id !== action.payload);

    case "TOGGLE":
      return state.map(todo =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );

    case "EDIT":
      return state.map(todo =>
        todo.id === action.payload.id
          ? { ...todo, title: action.payload.title }
          : todo
      );

    default:
      return state;
  }
}