import { Link, useParams } from "react-router-dom";  // To use link for navigation and useParams to get URL parameters
import PropTypes from "prop-types";  // To define prop types for this component
import { useEffect, useState } from "react";

// Define and export the Single component which displays individual item details.
export const People = () => {
  // Access the global state using the custom hook.

  const [peopleDetails, setPeopleDetails] = useState({})


  const { peopleId } = useParams()
    
    useEffect(()=> async ()=> {
        try{
		const response = await 		
		fetch("https://www.swapi.tech/api/people/" + peopleId)
		const data = await response.json()
		setPeopleDetails(data.result.properties)
		
	} catch(error){
		console.log(error)
	}
    },[])



  return (
    <>
      <div className="container mx-auto row text-center mt-3">
        <img className="col-md-6" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyNNRbJpZZxfrD9yeiURcJfeVFUgKrFY2XBQ&s" alt="luke" />
        <div className="col-md-6">
          <h1 className="mb-3">{peopleDetails.name}</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae rerum quas corporis odit quos soluta alias omnis corrupti. Quibusdam minus, cupiditate aliquid quos alias odio reprehenderit eum odit suscipit iusto aspernatur molestiae repellendus officiis a architecto similique eligendi eius? Aperiam laudantium architecto, laboriosam totam obcaecati possimus voluptate, adipisci, tempora quos quis at praesentium atque deleniti facilis. A quia natus quidem adipisci earum eveniet, accusantium sunt ad quo? Impedit voluptas officiis quis alias iusto maxime aperiam laboriosam minus aspernatur, error corrupti aut dolor repellat doloribus reiciendis quae! Nemo aliquid eius repellat nostrum alias perspiciatis tempora exercitationem, quas quibusdam incidunt aut mollitia!</p>
        </div>
      </div>
      <div className="container mt-5 d-flex gap-5 justify-content-center text-center" style={{borderTop: "solid 1px red"}}>
        <div className="d-flex flex-column align-content-center mt-3">
          <h5 className="align-center" style={{color: "red"}}>Name</h5>
          <h6 style={{color: "red"}}>{peopleDetails.name}</h6>
        </div>
        <div className="d-flex flex-column align-content-center mt-3">
          <h5 className="align-center" style={{color: "red"}}>Birth Year</h5>
          <h6 style={{color: "red"}}>{peopleDetails.birth_year}</h6>
        </div>
        <div className="d-flex flex-column align-content-center mt-3">
          <h5 className="align-center" style={{color: "red"}}>Gender</h5>
          <h6 style={{color: "red"}}>{peopleDetails.gender}</h6>
        </div>
        <div className="d-flex flex-column align-content-center mt-3">
          <h5 className="align-center" style={{color: "red"}}>Height</h5>
          <h6 style={{color: "red"}}>{peopleDetails.height}</h6>
        </div>
        <div className="d-flex flex-column align-content-center mt-3">
          <h5 className="align-center" style={{color: "red"}}>Skin Color</h5>
          <h6 style={{color: "red"}}>{peopleDetails.skin_color}</h6>
        </div>
        <div className="d-flex flex-column align-content-center mt-3">
          <h5 className="align-center" style={{color: "red"}}>Eye Color</h5>
          <h6 style={{color: "red"}}>{peopleDetails.eye_color}</h6>
        </div>
      </div>

    </>
  );
};

// Use PropTypes to validate the props passed to this component, ensuring reliable behavior.
People.propTypes = {
  // Although 'match' prop is defined here, it is not used in the component.
  // Consider removing or using it as needed.
  match: PropTypes.object
};
