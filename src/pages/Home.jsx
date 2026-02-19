import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React from "react";
import Card from "../components/Card.jsx";
import { useEffect, useState } from "react";

export const Home = () => {

	const [peopleList, setPeopleList] = useState([])

  const {store, dispatch} =useGlobalReducer()

  useEffect(()=>{
	getPeopleList()
  },[])

async function getPeopleList(){

	try{
		const response = await 		
		fetch("https://www.swapi.tech/api/people/")
		const data = await response.json()
		setPeopleList(data.results)
		
	} catch(error){
		console.log(error)
	}
  }



	return (
	
		<div className="container mt-5">
			<h1 className="mb-5" style={{color: "red"}}>Characters</h1>
			<div className="row flex-nowrap overflow-x-scroll gap-5">
				{peopleList.map(people=> <Card key={people.uid} name={people.name} hairColor="red" eyeColor="blue" gender="man"/>)}
				
			</div>
		</div>

	);
}; 