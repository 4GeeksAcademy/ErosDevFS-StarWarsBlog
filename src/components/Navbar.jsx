import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";



export const Navbar = () => {

	const {store, dispatch} = useGlobalReducer()

	return (
		<nav className="navbar">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0"><img className="rounded float-start" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4qfkQB1jmnNbbKRyM36lxn1gFsWRPnQW83Q&s" style={{ height: "60px", width: "60px" }} alt="starwars" /></span>
				</Link>
				
					<div className="btn-group" role="group">
						<button className="btn btn-primary dropdown-toggle px-4 py-2" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites <span className="bg-secondary px-1">{store.peopleFavorites.length + store.planetsFavorites.length + store.vehiclesFavorites.length}</span>
						</button>
						<ul className="dropdown-menu">
							{store.peopleFavorites.map((people, index)=>{
								return <div key={index}  className="d-flex justify-content-between"><li className="dropdown-item">{people}</li> <button onClick={()=>dispatch({
									type: 'add_peopleFavorites',
									payload: people
								})} className="me-2" style={{backgroundColor: "white", border: "none"}}><i className="fa-solid fa-trash"></i></button></div> 
							})}
							
							{store.planetsFavorites.map((planet, index)=>{
								return <div key={index}  className="d-flex justify-content-between"><li className="dropdown-item">{planet}</li> <button onClick={()=>dispatch({
									type: 'add_planetsFavorites',
									payload: planet
								})} className="me-2" style={{backgroundColor: "white", border: "none"}}><i className="fa-solid fa-trash"></i></button></div> 
							})}

							{store.vehiclesFavorites.map((vehicle, index)=>{
								return <div key={index}  className="d-flex justify-content-between"><li className="dropdown-item">{vehicle}</li> <button onClick={()=>dispatch({
									type: 'add_vehiclesFavorites',
									payload: vehicle
								})} className="me-2" style={{backgroundColor: "white", border: "none"}}><i className="fa-solid fa-trash"></i></button></div> 
							})}
						</ul>
					</div>
				
			</div>
		</nav>
	);
};