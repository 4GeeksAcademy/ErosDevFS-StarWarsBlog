import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import Card from "../components/Card.jsx";
import { useEffect } from "react";

export const Home = () => {

	const [peopleList, setPeopleList] = useState([])

  const {store, dispatch} =useGlobalReducer()

  useEffect(()=>{
	getPeopleList()
  },[])

function getPeopleList(){
	fetch("https://www.swapi.tech/api")
	.then(response=> response.json())
	.then(data=> setPeopleList(data.results))
  }

	return (
		<div className="container mt-5">
			<h1 className="" style={{color: "red"}}>Characters</h1>
			{Map.peopleList((people) =>{
				<Card name={people.name} hairColor="red" eyeColor="blue" gender="man"/>
			})}
		</div>
	);
}; 