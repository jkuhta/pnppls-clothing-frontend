import React, { useState } from "react";
import "./Dropdown.css";

const Dropdown = ({ selectedItem, handleItemClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const dropdownItems = [
    {
      id: "rating",
      name: "Featured",
    },
    {
      id: "reviews",
      name: "Reviews",
    },
    {
      id: "price_up",
      name: "Price: low to high",
    },
    {
      id: "price_down",
      name: "Price: high to low",
    },
    // {
    //   name: "Newest",
    // },
  ];

  return (
    <div className="dropdown">
      <button onClick={toggleMenu}>
        <p className="dropdown-button-name">
          {selectedItem === "featured"
            ? "Featured"
            : selectedItem === "reviews"
            ? "Reviews"
            : selectedItem === "price_up"
            ? "Price: low to high"
            : selectedItem === "price_down"
            ? "Price: high to low"
            : "Featured"}
        </p>

        <i className="bx bx-sort-alt-2"></i>
      </button>
      {isOpen && (
        <ul className="dropdown-content">
          {dropdownItems.map((item, index) => (
            <li
              key={index}
              onClick={() => {
                handleItemClick(item.id);
                setIsOpen(false);
              }}
            >
              <span
                className={
                  item.id === selectedItem
                    ? "dropdown-check"
                    : "dropdown-check hiddden"
                }
              >
                <i className="fa-solid fa-check"></i>
              </span>
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
