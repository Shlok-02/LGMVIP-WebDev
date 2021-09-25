import React from "react";



function Card(props){
    return (
        <div className="card">
            <img src={props.avatar} alt="avatar img"/>
            <h3>{props.firstName} {props.lastName}</h3>
            <p style={{
                margin:"10px auto"
            }}> <strong>{props.email} </strong></p>
            <p style={{marginBottom:"20px"}}>fames ac turpis egestas maecenas pharetra convallis posuere morbi leo</p>
        </div>
    )
}

export default Card;