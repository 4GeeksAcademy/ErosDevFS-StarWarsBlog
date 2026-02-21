import React from "react";
import CardPeople from "../components/CardPeople.jsx";
import CardPlanets from "../components/CardPlanets.jsx";
import { useEffect, useState } from "react";
import CardVehicles from "../components/CardVehicles.jsx";

export const Home = () => {

	const [peopleList, setPeopleList] = useState([])
	const [planetsList, setPlanetsList] = useState([])
	const [vehiclesList, setVehiclesList] = useState([])



	useEffect(() => {
		getPeopleList()
		getPlanetsList()
		getVehiclesList()
	}, [])

	async function getPeopleList() {

		try {
			const response = await
				fetch("https://swapi.dev/api/people/")
			const data = await response.json()
			setPeopleList(data.results)

		} catch (error) {
			console.log(error)
		}
	}

	async function getPlanetsList() {

		try {
			const response = await
				fetch("https://swapi.dev/api/planets/")
			const data = await response.json()
			setPlanetsList(data.results)

		} catch (error) {
			console.log(error)
		}
	}

	async function getVehiclesList() {

		try {
			const response = await
				fetch("https://swapi.dev/api/vehicles/")
			const data = await response.json()
			setVehiclesList(data.results)

		} catch (error) {
			console.log(error)
		}
	}



	return (
		<>
			<div className="container mt-5">
				<h1 className="mb-5" style={{ color: "red" }}>Characters</h1>
				<div className="row flex-nowrap overflow-x-scroll gap-5">
					{peopleList.map(people => <CardPeople uid={people.url.replace("https://swapi.dev/api/people/", "").replace("/", '')} key={people.url.replace("https://swapi.dev/api/people/", "").replace("/", '')} name={people.name} hairColor={people.hair_color} eyeColor={people.eye_color} gender={people.gender} />)}

				</div>
			</div>

			<div className="container mt-5">
				<h1 className="mb-5" style={{ color: "red" }}>Planets</h1>
				<div className="row flex-nowrap overflow-x-scroll gap-5">
					{planetsList.map(planet => <CardPlanets uid={planet.url.replace("https://swapi.dev/api/planets/", "").replace("/", '')} key={planet.url.replace("https://swapi.dev/api/planets/", "").replace("/", '')} name={planet.name} population={planet.population} terrain={planet.terrain} />)}

				</div>
			</div>

			<div className="container mt-5">
				<h1 className="mb-5" style={{ color: "red" }}>Vehicles</h1>
				<div className="row flex-nowrap overflow-x-scroll gap-5">
					{vehiclesList.map(vehicle => <CardVehicles uid={vehicle.url.replace("https://swapi.dev/api/vehicles/", "").replace("/", '')} key={vehicle.url.replace("https://swapi.dev/api/vehicles/", "").replace("/", '')} name={vehicle.name} model={vehicle.model} manufacturer={vehicle.manufacturer} />)}

				</div>
			</div>
		</>
	);
}; 