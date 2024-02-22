import React from "react";
import MenuList from "../Components/MenuList";
import HeroBanner from "../Components/HeroBanner";
import menuHeroBanner from "../assets/images/menu-hero-banner.jpg";
import AccordionExpandIcon from "../Components/Accordion";
import { Style } from "@mui/icons-material";
import ToppingLists from "../Components/ToppingLists";

const Menu = () => {
  return (
    <>
      <HeroBanner heading="Our Menu" imageFile={menuHeroBanner} />
      <section className="main-content menu">
        <h3>Cakes</h3>
        <p className="menu-info">
          <span className="bold">Cake Selections:</span> Chocolate Cake, Vanilla
          Cake, Red Velvet Cake,Carrot Cake, Ice Cake,Coconut Cake
        </p>
        <p className="menu-info">
          <span className="bold">House Made Cream 150 ₹:</span> Vanilla
          Buttercream:Description: Smooth and creamy, vanilla buttercream is a
          classic frosting made with butter, powdered sugar, and vanilla
          extract. It has a rich vanilla flavor and a light, fluffy texture that
          pairs perfectly with any cake.
        </p>
        <AccordionExpandIcon
          name={"Vanilla Cake:"}
          description={
            " Description: Delicate and subtly sweet, vanilla cake is a timeless classic loved by many. Its light and fluffy texture make it versatile and perfect for any occasion. Toppings: Vanilla buttercream frosting, fresh berries, edible flowers, sprinkles, chocolate chips, or caramel drizzle."
          }
        />
        {/* <h4>Vanilla Cake:</h4> */}
        {/* <h5>
          Description: Delicate and subtly sweet, vanilla cake is a timeless
          classic loved by many. Its light and fluffy texture make it versatile
          and perfect for any occasion. Toppings: Vanilla buttercream frosting,
          fresh berries, edible flowers, sprinkles, chocolate chips, or caramel
          drizzle.
        </h5> */}
        <MenuList type="Vanilla Cake" />
        <p className="menu-info">Additional Flavours will be charged Extra</p>
        <AccordionExpandIcon
          name={"Chocolate Cake:"}
          description={
            "Description: Rich, moist, and decadent, chocolate cake is a classic favorite for chocolate lovers. Made with cocoa powder or melted chocolate, it offers a deep chocolate flavor that is irresistible."
          }
        />
        {/* <h4>Chocolate Cake:</h4> */}
        {/* <h5>
          Description: Rich, moist, and decadent, chocolate cake is a classic
          favorite for chocolate lovers. Made with cocoa powder or melted
          chocolate, it offers a deep chocolate flavor that is irresistible.
        </h5> */}
        <MenuList type="Chocolate Cake" />
        <p className="menu-info">
          <AccordionExpandIcon
            name={"Toppings:"}
            description={
              "Chocolate ganache, chocolate frosting, chocolate shavings, whipped cream, strawberries, raspberries, or cherries."
            }
            accordionStyle={{backgroundColor:"black"}}
          />
          {/* Toppings: Chocolate ganache, chocolate frosting, chocolate shavings,
          whipped cream, strawberries, raspberries, or cherries. */}
        </p>
        <h4>Red Velvet Cake:</h4>
        <h5>
          Description: Red velvet cake is known for its striking red color and
          velvety texture. It has a hint of cocoa flavor and a slightly tangy
          taste, thanks to the addition of buttermilk and vinegar.
        </h5>
        <MenuList type="Red Velvet Cake" />
        <p className="menu-info">
          Toppings: Cream cheese frosting, chopped nuts (such as pecans or
          walnuts), chocolate curls, or white chocolate shavings.
        </p>
        <h4>Ice Cake:</h4>
        <MenuList type="Ice Cake" />
        <p className="menu-info">
          Free refills available for any of our drip coffees and Nitro Cold
          Brew.
        </p>
        <hr />
        <h3>Toppings</h3>
        <h4>Fresh Fruit</h4>
        <ToppingLists type="Fresh Fruit" />
        <h4>Specialty Toppings:</h4>
        <ToppingLists type="Specialty Toppings" />
      </section>
    </>
  );
};

export default Menu;
