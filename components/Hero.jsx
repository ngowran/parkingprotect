import React from "react";
import ppapp from "../public/ppapp.png";
import Image from "next/image";
import Heading from "./Heading";
import { AiFillApple } from "react-icons/ai";
import { FaGooglePlay } from "react-icons/fa";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="flex flex-col space-y-16 overflow-hidden relative h-screen justify-center items-center text-center">
      <div className="absolute m-auto items-center justify-center xl:pt-24">
        <div className="grid md:grid-cols-2">
          <div className="text-center md:text-left p-5 mx-auto lg:pl-16 max-sm:mb-20 pt-12">
            <Heading title="Protecting Peoples Places" />
            <br></br>
            <p className="text-2xl text-white py-6 tracking-tight">
              Learn more about our mission{" "}
              <span className="underline decoration-darkBlue italic tracking-tightest">
                today
              </span>
              !{" "}
            </p>
            <br></br>
            <div className="flex justify-center md:justify-start">
              <button
                className="bg-blue-900 text-white rounded-full px-12 py-2 mr-4 hover:scale-105 shadow-xl"
                onClick={() => alert("Coming soon!")}
              >
                <AiFillApple className="inline-block mr-2 lg:text-3xl text-2xl" />
                App Store
              </button>
              <button
                className="bg-blue-900 text-white rounded-full px-12 py-2  hover:scale-105 shadow-xl"
                onClick={() => alert("Coming soon!")}
              >
                <FaGooglePlay className="inline-block mr-2 lg:text-2xl" />
                Play Store
              </button>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            viewport={{ once: true }}
            className="mx-auto overflow-hidden w-40 md:w-96"
          >
            <Image src={ppapp} alt="app screenshot" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
