import React from "react";

import Image from "next/image";
import { TeamData } from "./TeamData";
import { AnimatePresence, motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import Heading from "./Heading";

const Team = () => {
  return (
    <section id="team" className="py-32">
      <div className="w-160 md:w-320 lg:w-400 mx-auto text-center">
        <div className="text-center p-5">
        <Heading title="Meet the Team" />
        <br></br>
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8 px-16">
          {TeamData.map((team, index) => {
            return (
              <div key={index} className="relative">
                <Image
                  src={team.image}
                  alt="/"
                  className="rounded object-cover h-80 lg:h-full"
                />
                {/* Overlay */}
                <a href={team.url} target="blank">
                  <div className="flex justify-center w-full h-full items-center absolute top-0 left-0 right-0 bottom-0 hover:bg-black/50 group">
                    <p className="text-gray-300 hidden group-hover:block text-s">
                      <FaLinkedin className="mx-auto" size={30} />
                      <br />
                      {team.name}
                      <br />
                      {team.role}
                    </p>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;
