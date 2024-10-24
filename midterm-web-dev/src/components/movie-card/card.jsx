import React from "react";
import "./card.css";
const Card = ({ card }) => {
    return (
        <div className="card-container">
            <div className="card-image-container">
                <img src={card.movieSrc} className="movie" />
            </div>

            <div className="card-details">
                <h5 className="card-heading">{card.heading}</h5>
                <p className="discription">{card.discription}</p>
                <h4 className="Rating">{card.Rating}</h4>
            </div>
        </div>
    );
};

export default Card;
