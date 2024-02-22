import React from "react";
import Heading from "../../Components/Heading/Heading";

const Header = () => {
  return (
    <>
      <Heading
        title="Veluvana Bali - Owl Bambo House"
        subtitle="Sidmen,Indonesia" 
      />
      <div className="w-full md:h-[60vh] overflow-hidden rounded-xl mt-6">
        <img className="object-cover w-full" src="https://a0.muscache.com/im/pictures/miso/Hosting-812919482265584093/original/c60bc2f2-7d16-4f7d-acf2-44c2f855fb81.jpeg" alt="header image" />
      </div>
    </>
  );
};

export default Header;
