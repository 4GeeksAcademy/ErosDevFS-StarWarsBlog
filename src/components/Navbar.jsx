import { Link } from "react-router-dom";


export const Navbar = () => {

	return (
		<nav className="navbar">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0"><img className="rounded float-start" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4qfkQB1jmnNbbKRyM36lxn1gFsWRPnQW83Q&s" style={{ height: "60px", width: "60px" }} alt="starwars" /></span>
				</Link>
				<div className="ml-auto">
					<div className="btn-group" role="group">
						<button className="btn btn-primary dropdown-toggle px-4 py-2" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites <span className="bg-secondary px-1">0</span>
						</button>
						<ul className="dropdown-menu">
							<li><a className="dropdown-item" href="#">Dropdown link</a></li>
							<li><a className="dropdown-item" href="#">Dropdown link</a></li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};