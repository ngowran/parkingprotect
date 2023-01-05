import React from "react";
import ppapp from "../public/ppapp.png";
import Image from "next/image";
import Heading from "./Heading";

const Hero = () => {
  return (
    <div className="py-16">
      <div className="pt-16 grid md:grid-cols-2">
        <div className="text-center md:text-left p-5">
          <Heading title="Protecting Peoples Places" />
          <br></br>
          <p className="text-2xl text-white">
            Join our mission today </p>
        </div>
        <div className="mx-auto overflow-hidden">
          <Image src={ppapp} alt="app screenshot" width={400} height={400} />

        </div>
      </div>
    </div>
  );
};

export default Hero;
