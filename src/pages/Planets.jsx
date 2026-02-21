import { Link, useParams } from "react-router-dom";  // To use link for navigation and useParams to get URL parameters
import { useEffect, useState } from "react";

// Define and export the Single component which displays individual item details.
export const Planets = () => {
    // Access the global state using the custom hook.

    const [planetsDetails, setPlanetsDetails] = useState({})


    const { planetsId } = useParams()

    useEffect(() => async () => {
        try {
            const response = await
                fetch("https://www.swapi.tech/api/planets/" + planetsId)
            const data = await response.json()
            setPlanetsDetails(data.result.properties)

        } catch (error) {
            console.log(error)
        }
    }, [])



    return (
        <>
            <div className="container mx-auto row text-center mt-3">
                <img className="col-md-6" src="https://wallpapers.com/images/hd/planet-earth-gfln9meqfolr6o4z.jpg" alt="planets" />
                <div className="col-md-6">
                    <h1 className="mb-3">{planetsDetails.name}</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae rerum quas corporis odit quos soluta alias omnis corrupti. Quibusdam minus, cupiditate aliquid quos alias odio reprehenderit eum odit suscipit iusto aspernatur molestiae repellendus officiis a architecto similique eligendi eius? Aperiam laudantium architecto, laboriosam totam obcaecati possimus voluptate, adipisci, tempora quos quis at praesentium atque deleniti facilis. A quia natus quidem adipisci earum eveniet, accusantium sunt ad quo? Impedit voluptas officiis quis alias iusto maxime aperiam laboriosam minus aspernatur, error corrupti aut dolor repellat doloribus reiciendis quae! Nemo aliquid eius repellat nostrum alias perspiciatis tempora exercitationem, quas quibusdam incidunt aut mollitia!</p>
                </div>
            </div>
            <div className="container mt-5 d-flex gap-5 justify-content-center text-center" style={{ borderTop: "solid 1px red" }}>
                <div className="d-flex flex-column align-content-center mt-3">
                    <h5 className="align-center" style={{ color: "red" }}>Name</h5>
                    <h6 style={{ color: "red" }}>{planetsDetails.name}</h6>
                </div>
                <div className="d-flex flex-column align-content-center mt-3">
                    <h5 className="align-center" style={{ color: "red" }}>Created</h5>
                    <h6 style={{ color: "red" }}>{planetsDetails.created}</h6>
                </div>
                <div className="d-flex flex-column align-content-center mt-3">
                    <h5 className="align-center" style={{ color: "red" }}>Diameter</h5>
                    <h6 style={{ color: "red" }}>{planetsDetails.diameter}</h6>
                </div>
                <div className="d-flex flex-column align-content-center mt-3">
                    <h5 className="align-center" style={{ color: "red" }}>Rotation Period</h5>
                    <h6 style={{ color: "red" }}>{planetsDetails.rotation_period}</h6>
                </div>
                <div className="d-flex flex-column align-content-center mt-3">
                    <h5 className="align-center" style={{ color: "red" }}>Terrain</h5>
                    <h6 style={{ color: "red" }}>{planetsDetails.terrain}</h6>
                </div>
                <div className="d-flex flex-column align-content-center mt-3">
                    <h5 className="align-center" style={{ color: "red" }}>Population</h5>
                    <h6 style={{ color: "red" }}>{planetsDetails.population}</h6>
                </div>
            </div>

        </>
    );
};

