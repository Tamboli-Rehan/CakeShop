import React from 'react';
import HeroBanner from '../Components/HeroBanner';
import visitHeroBanner from '../assets/images/visit-hero-banner.jpg';

const Visit = () => {
  return (
    <>
      <HeroBanner heading="Visit Us" imageFile={visitHeroBanner} />
      <section className="main-content visit">
        <h3>Hours</h3>
        <p>DAILY 7AM - 8PM</p>
        <h3>Phone</h3>
        <p><a href="tel:9152132162">9152132162</a></p>
        <h3>Email</h3>
        <p><a href="mailto:rehan.j.tamboli112@gmail.com">rehan.j.tamboli112@gmail.com</a></p>
        <h3>Location</h3>
        <p>01 xyz building shop no.10 Cafe Cake Shop</p>
      </section>
    </>
  );
}

export default Visit;