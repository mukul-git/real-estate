import React from "react";
import "./PropertyCard.css";

const PropertyCard = ({ property }) => {
  return (
    <>
      <div className="card">
        <div className="image_container">
          <img src={property.image} className="image" alt="img" />
        </div>
        <div className="details">
          <div className="details__name">Name : {property.name}</div>
          <div className="details__city">
            <span style={{ fontWeight: "bold" }}>City</span> : {property.city}
          </div>
          <div className="details__owner">
            <span style={{ fontWeight: "bold" }}>Owner</span> : {property.owner}
          </div>
          <div className="details__price">
            <span style={{ fontWeight: "bold" }}>Price</span> : {property.price}
          </div>
          <div className="details__type">
            <span style={{ fontWeight: "bold" }}>Type</span> : {property.type}
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertyCard;
