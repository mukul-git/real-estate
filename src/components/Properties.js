import React, { useEffect, useState } from "react";
import PropertyCard from "./PropertyCard";
import { useSelector } from "react-redux";
import "./Properties.css";
import { Link } from "react-router-dom";

const Properties = () => {
  const [propertyType, setPropertyType] = useState(null);
  const [priceRange, setPriceRange] = useState(null);
  const [propertiesToRender, setPropertiesToRender] = useState([]);
  const properties = useSelector((state) => state.Properties.properties);

  const handleDropdownChange = (type) => {
    setPropertyType(type);
  };

  const handlePriceFilterClick = (range) => {
    setPriceRange(range);
  };

  const handleClearFilters = () => {
    setPropertyType(null);
    setPriceRange(null);
  };

  useEffect(() => {
    let filteredProperties = properties;

    if (priceRange) {
      filteredProperties = filteredProperties.filter((elem) => {
        const price = elem.price;
        if (priceRange === "under_1000000") {
          return price < 1000000;
        }
        if (priceRange === "100000-10000000") {
          return price >= 100000 && price <= 10000000;
        }
        if (priceRange === "over_10000000") {
          return price > 10000000;
        }
        return true;
      });
    }

    setPropertiesToRender(filteredProperties);
  }, [propertyType, priceRange, properties]);

  const options = [
    "Flat",
    "Bungalow",
    "Residential Land",
    "Commercial Land",
    "Shop",
  ];

  return (
    <>
      <div className="filter">
        <div className="price_filter">
          <button
            onClick={() => handlePriceFilterClick("under_1000000")}
            className="property_under_100000"
          >
            Properties under 10,00,000
          </button>
          <button
            onClick={() => handlePriceFilterClick("100000-10000000")}
            className="property_100000-10000000"
          >
            Properties between 1,00,000 to 1,00,00,000
          </button>
          <button
            onClick={() => handlePriceFilterClick("over_10000000")}
            className="property_over_10000000"
          >
            Properties over 1,00,00,000
          </button>
        </div>
        <div className="type_filter">
          <div className="select-dropdown">
            <select
              onChange={(e) => handleDropdownChange(e.target.value)}
              className="select-dropdown-select"
              value={propertyType || ""}
            >
              <option value="">Select Type</option>
              {options.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
        <button onClick={handleClearFilters} className="clear_filters">
          Clear Filters
        </button>
      </div>
      <div className="card_container">
        {propertiesToRender.length > 0 ? (
          propertiesToRender.map((elem) => (
            <Link
              key={elem.id}
              style={{ color: "inherit", textDecoration: "none" }}
              to={`/property/${elem.id}`}
            >
              <PropertyCard property={elem} />
            </Link>
          ))
        ) : (
          <p>No properties found.</p>
        )}
      </div>
    </>
  );
};

export default Properties;
