import React from "react";
import toppings from "../data/fruit-toppings";
import toster from "../Components/Toster";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions";

const ToppingLists = ({ type }) => {
  const dispatch = useDispatch();
  const handleAddToCart = (menuItem) => {
    dispatch(addToCart(menuItem));
  };
  return (
    <>
      <div className="menu-list">
        {[...toppings]
          .filter((menuItem) => menuItem.type === type)
          .map((menuItem) => {
            // console.log(menuItem);
            return (
              <div className="menu-item" key={menuItem.id}>
                <span className="item-name">{menuItem.itemName}</span>
                <span className="price">
                  {menuItem.price1} & {menuItem.price2}
                </span>
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                  }}
                >
                  <button
                    className="button margint-fonts"
                    onClick={() => {
                      toster(menuItem);
                      handleAddToCart(menuItem);
                    }}
                  >
                    Add To Cart
                  </button>
                </span>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default ToppingLists;
