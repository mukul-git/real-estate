import React from "react";
import "./PropertyDetails.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const PropertyDetails = () => {
  const { id } = useParams();
  const properties = useSelector((state) => state.Properties.properties);
  const property = properties?.[id - 1];

  const handleAddToCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const isAlreadyInCart = cart.some((item) => item.id === property.id);

    if (isAlreadyInCart) {
      alert(`${property?.name} is already in your cart!`);
    } else {
      cart.push(property);

      localStorage.setItem("cart", JSON.stringify(cart));

      alert(`Added ${property?.name} to cart!`);
    }
  };

  return (
    <div className="container">
      <div className="details_container">
        <div className="details_container__column1">
          <img className="image" src={property?.image} alt={property?.name} />
          <div className="name">{property?.name}</div>
        </div>
        <div className="details_container__column2">
          <div className="price">{property?.price}</div>
          <div className="city">{property?.city}</div>
          <div className="owner">{property?.owner}</div>
          <div className="type">{property?.type}</div>
          <button className="add_to_cart_button" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
