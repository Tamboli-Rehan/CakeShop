import React from "react";
import { Link } from "react-router-dom";
import ImageGallery from "../Components/ImageGallery";

const Home = () => {
  return (
    <>
      <section className="main-content home">
        <section className="content-container welcome">
          <p>
            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien
            pellentesque habitant morbi tristique senectus et netus et
            malesuada. Vestibulum rhoncus est pellentesque elit ullamcorper
            dignissim. Venenatis tellus in metus vulputate eu. */}
            "A <span className="span">Slice</span> of Heaven: Discover the Artistry in Every <span className="span">Bite</span>"
          </p>
        </section>
        <section className="content-container image-gallery">
          <ImageGallery />
        </section>
        <section className="content-container info">
          <div className="info-container menu-info">
            <h2>Want a Bite of our Cakes? </h2>
            <Link to="/register" className="button">
              Please register fast!!!
            </Link>
          </div>
          <div className="info-container wifi-info">
            <h2>Free Wifi available to all customers!</h2>
            <p>
              Password is:- <span className="wifi-password span">CakeHubBites</span>
            </p>
          </div>
        </section>
      </section>
    </>
  );
};

export default Home;
