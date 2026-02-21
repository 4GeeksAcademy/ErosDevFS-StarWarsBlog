import React from "react"
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";
import { useState } from "react";

function CardPeople(props) {

    const { store, dispatch } = useGlobalReducer()
    const [isActive, setIsActive] = useState(false);


    return (
        <div className="card" style={{ width: "400px" }}>
            <img src={rigoImageUrl} className="card-img-top" style={{ width: "400px", height: "200px" }} alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <div className="card-text">
                    <p>Gender: {props.gender}
                        <br />
                        Hair Color: {props.hairColor}
                        <br />
                        Eye-Color: {props.eyeColor}
                    </p>
                </div>

                <div className="d-flex justify-content-between">
                    <Link to={"/people/" + props.uid} className="btn btn-outline-primary">Learn More!</Link>
                    <button href="#" onClick={() => {dispatch({
                        type: 'add_peopleFavorites',
                        payload: props.name
                    })
                    setIsActive(!isActive)
                    }} className={` ${isActive ? "active" : ""} btn btn-outline-warning fav-btn`}><i className={`fa-${isActive ? "solid" : "regular"} fa-heart`}></i></button>
                </div>

            </div>
        </div>
    )
}

export default CardPeople