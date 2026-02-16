import React from "react"
import rigoImageUrl from "../assets/img/rigo-baby.jpg";

function Card({name, gender, hairColor, eyeColor}) {
    return (
        <div className="card" style={{ width:"400px" }}>
            <img src={rigoImageUrl} className="card-img-top" style={{ width:"400px", height: "200px" }} alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <div className="card-text">
                    <p>Gender: {gender}
                    <br/> 
                    Hair Color: {hairColor}
                    <br/> 
                    Eye-Color: {eyeColor} 
                    </p>
                </div>
                
                <div className="d-flex justify-content-between">
                    <a href="#" className="btn btn-outline-primary">Learn More!</a>
                    <a href="#" className="btn btn-outline-warning"><i class="fa-regular fa-heart"></i></a>
                </div>

            </div>
        </div>
    )
}

export default Card