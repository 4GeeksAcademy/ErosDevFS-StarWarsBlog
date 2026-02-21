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
    peopleFavorites: [],
    planetsFavorites: [],
    vehiclesFavorites: []
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
      
      let updatePeopleFavorites = []
      if(store.peopleFavorites.includes(action.payload)){
        updatePeopleFavorites = store.peopleFavorites.filter(person => person !== action.payload)
      } else{
        updatePeopleFavorites = [...store.peopleFavorites, action.payload]
      }

      return {
        ...store,
        peopleFavorites: updatePeopleFavorites
      };

     case 'add_planetsFavorites':
      
      let updatePlanetsFavorites = []
      if(store.planetsFavorites.includes(action.payload)){
        updatePlanetsFavorites = store.planetsFavorites.filter(planet => planet !== action.payload)
      } else{
        updatePlanetsFavorites = [...store.planetsFavorites, action.payload]
      }

      return {
        ...store,
        planetsFavorites: updatePlanetsFavorites
      };

      case 'add_vehiclesFavorites':
      
      let updateVehiclesFavorites = []
      if(store.vehiclesFavorites.includes(action.payload)){
        updateVehiclesFavorites = store.vehiclesFavorites.filter(vehicle => vehicle !== action.payload)
      } else{
        updateVehiclesFavorites = [...store.vehiclesFavorites, action.payload]
      }

      return {
        ...store,
        vehiclesFavorites: updateVehiclesFavorites
      };

    default:
      throw Error('Unknown action.');
  }
}
