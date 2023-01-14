import React from "react";
import people from "../public/people.png";
import Image from "next/image";
import Heading from "./Heading";
import {motion} from "framer-motion"

export default function Mission() {
  return (
    <section id="mission" className="py-32">
      <div>
        <div className="grid md:grid-cols-2 grid-cols-1">
          <div className="text-center md:text-left p-5">
            <Heading title="Our Mission" />
            <br></br>
            <p className="text-2xl tracking-tight pl-4">
            Empower individuals with disabilities by creating a user-friendly app that allows for easy reporting of accessible parking misuse and promotes accessibility for all.<br/><br/> We strive to create a more inclusive community by holding accountable those who abuse accessible parking and highlighting the importance of accessibility for those who need it.
            </p>
          </div>
          <motion.div whileHover={{scale: 1.2}} whileTap={{scale: 0.8}}
          initial={{ opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            type: "spring",
            stiffness: 120,
            duration: 3,
            bounce: 0.5,
          }}
           className="align-top text-center m-auto">
            <Image src={people} alt="people" height={500} width={500} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
