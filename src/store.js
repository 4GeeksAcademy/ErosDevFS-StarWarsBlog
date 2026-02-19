export const initialStore = () => {
  return {
    message: null,
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ],
    peopleFavorites: []
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'add_task':

      const { id, color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };
    case 'add_peopleFavorites':
      
      let updateFavorites = []
      if(store.peopleFavorites.includes(action.payload)){
        updateFavorites = store.peopleFavorites.filter(person => person !== action.payload)
      } else{
        updateFavorites = [...store.peopleFavorites, action.payload]
      }

      return {
        ...store,
        peopleFavorites: updateFavorites
      };

    default:
      throw Error('Unknown action.');
  }
}
