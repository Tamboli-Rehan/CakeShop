import React from "react";
import toppings from "../data/fruit-toppings";

const ToppingLists = ({ type }) => {
  return (
    <>
      <div className="menu-list">
        {[...toppings]
          .filter((menuItem) => menuItem.type === type)
          .map((menuItem) => {
            return (
              <div className="menu-item" key={menuItem.id}>
                <span className="item-name">{menuItem.itemName}</span>
                <span className="price">Price: {menuItem.price}</span>
                <span style={{display:"flex", alignItems:"center", justifyContent:"space-evenly"}}>
                  <button style={{fontSize:"10px"}} className="button margin-top">Pay: {menuItem.price}</button>
                </span>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default ToppingLists;
