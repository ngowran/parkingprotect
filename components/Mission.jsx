import React from "react";
import people from "../public/people.png";
import Image from "next/image";
import Heading from "./Heading";
import { motion } from "framer-motion";

export default function Mission() {
  return (
    <div className="flex flex-col relative space-y-16 overflow-hidden h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <div className="absolute grid md:grid-cols-2 grid-cols-1">
        <div className="text-center md:text-left p-5">
          <Heading title="Our Mission" />
          <br></br>
          <p className="text-md md:text-xl tracking-tight pl-4">
            Our mission at Parking Protect is to empower people with
            disabilities by providing an AI powered, user-friendly app that
            allows for easy reporting of accessible parking misuse and promotes
            accessibility for all.
            <br />
            <br /> We strive to foster a more inclusive community by holding
            accountable those who abuse accessible parking and highlighting the
            importance of accessibility for those who need it.
          </p>
        </div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          initial={{ opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.2,
            type: "spring",
            stiffness: 120,
            duration: 3,
            bounce: 0.5,
          }}
          className="align-top text-center m-auto p-4"
        >
          <Image src={people} alt="people" className="w-50 h-50" />
        </motion.div>
      </div>
    </div>
  );
}
