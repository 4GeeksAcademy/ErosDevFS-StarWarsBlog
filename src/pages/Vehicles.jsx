import { Link, useParams } from "react-router-dom";  // To use link for navigation and useParams to get URL parameters
import PropTypes from "prop-types";  // To define prop types for this component
import { useEffect, useState } from "react";

// Define and export the Single component which displays individual item details.
export const Vehicles = () => {
  // Access the global state using the custom hook.

  const [vehiclesDetails, setVehiclesDetails] = useState({})


  const { vehiclesId } = useParams()
    
    useEffect(()=> async ()=> {
        try{
        const response = await 		
        fetch("https://www.swapi.tech/api/vehicles/" + vehiclesId)
        const data = await response.json()
        setVehiclesDetails(data.result.properties)
        
    } catch(error){
        console.log(error)
    }
    },[])



  return (
    <>
      <div className="container mx-auto row text-center mt-3">
        <img className="col-md-6" src="https://www.pixelstalk.net/wp-content/uploads/images6/Starwars-HD-Wallpaper-Free-download.jpg" alt="vehicles" />
        <div className="col-md-6">
          <h1 className="mb-3">{vehiclesDetails.name}</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae rerum quas corporis odit quos soluta alias omnis corrupti. Quibusdam minus, cupiditate aliquid quos alias odio reprehenderit eum odit suscipit iusto aspernatur molestiae repellendus officiis a architecto similique eligendi eius? Aperiam laudantium architecto, laboriosam totam obcaecati possimus voluptate, adipisci, tempora quos quis at praesentium atque deleniti facilis. A quia natus quidem adipisci earum eveniet, accusantium sunt ad quo? Impedit voluptas officiis quis alias iusto maxime aperiam laboriosam minus aspernatur, error corrupti aut dolor repellat doloribus reiciendis quae! Nemo aliquid eius repellat nostrum alias perspiciatis tempora exercitationem, quas quibusdam incidunt aut mollitia!</p>
        </div>
      </div>
      <div className="container mt-5 d-flex gap-5 justify-content-center text-center" style={{borderTop: "solid 1px red"}}>
        <div className="d-flex flex-column align-content-center mt-3">
          <h5 className="align-center" style={{color: "red"}}>Name</h5>
          <h6 style={{color: "red"}}>{vehiclesDetails.name}</h6>
        </div>
        <div className="d-flex flex-column align-content-center mt-3">
          <h5 className="align-center" style={{color: "red"}}>Model</h5>
          <h6 style={{color: "red"}}>{vehiclesDetails.model}</h6>
        </div>
        <div className="d-flex flex-column align-content-center mt-3">
          <h5 className="align-center" style={{color: "red"}}>Manufacturer</h5>
          <h6 style={{color: "red"}}>{vehiclesDetails.manufacturer}</h6>
        </div>
        <div className="d-flex flex-column align-content-center mt-3">
          <h5 className="align-center" style={{color: "red"}}>Passengers</h5>
          <h6 style={{color: "red"}}>{vehiclesDetails.passengers}</h6>
        </div>
        <div className="d-flex flex-column align-content-center mt-3">
          <h5 className="align-center" style={{color: "red"}}>Cargo Capacity</h5>
          <h6 style={{color: "red"}}>{vehiclesDetails.cargo_capacity}</h6>
        </div>
        <div className="d-flex flex-column align-content-center mt-3">
          <h5 className="align-center" style={{color: "red"}}>Vehicle Class</h5>
          <h6 style={{color: "red"}}>{vehiclesDetails.vehicle_class}</h6>
        </div>
      </div>

    </>
  );
};

// Use PropTypes to validate the props passed to this component, ensuring reliable behavior.
Vehicles.propTypes = {
  // Although 'match' prop is defined here, it is not used in the component.
  // Consider removing or using it as needed.
  match: PropTypes.object
};
