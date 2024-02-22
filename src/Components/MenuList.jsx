import React from "react";
import menu from "../data/menu";

const MenuList = ({ type }) => {
  return (
    <>
      <div className="menu-list">
        {[...menu]
          .filter((menuItem) => menuItem.type === type)
          .map((menuItem) => {
            return (
              <div className="menu-item" key={menuItem.id}>
                <span className="item-name">{menuItem.itemName}</span>
                <span className="price">{menuItem.price1} & {menuItem.price2}</span>
                <span style={{display:"flex", alignItems:"center", justifyContent:"space-evenly"}}>
                  <button style={{fontSize:"10px"}} className="button margin-top">Pay for {menuItem.price1}</button>
                  <button style={{fontSize:"10px"}} className="button margin-top">Pay for {menuItem.price2}</button>
                </span>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default MenuList;
