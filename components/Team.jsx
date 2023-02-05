import React from "react";

import Image from "next/image";
import { TeamData } from "./TeamData";
import { AnimatePresence, motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import Heading from "./Heading";

const Team = () => {
  return (
    <div className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
      <div className="text-center top-[20%] md:top-24 xl:top-24">
        <Heading title="Our Team" />
        <br></br>
      </div>
      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/40 scrollbar-thumb-[#1f3c88] ">
        {TeamData.map((team, index) => {
          return (
            <article
              key={index}
              className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[250px] md:w-[150px] xl:w-[600px] snap-center bg-[#FAF9F6] p-10 hover:opacity-100 transition-opacity duration-200 overflow-hidden"
            >
              <a href={team.url} target="blank">
                <motion.div
                  initial={{ opacity: 0, y: -100 }}
                  transition={{ duration: 1.2 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className=""
                >
                  <Image
                    src={team.image}
                    alt="/"
                    className="mx-auto rounded-full h-32 w-32 object-cover xl:w-[200px] xl:h-[200px]"
                  />
                </motion.div>
              </a>
              <div className="flex flex-col items-center space-y-2">
                <h3 className="text-lg font-medium text-gray-900">
                  {team.name}
                </h3>
                <p className="text-sm text-gray-500">{team.role}</p>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Team;
