import React from "react";
import Image from "next/image";
import logo from "../public/parkingblue.png";
import { motion } from "framer-motion";

const Resources = [
  {
    des: "Enactus DCU Website",
    link: "https://www.enactusdcu.com/",
  },
  {
    des: "Enactus Ireland Website",
    link: "https://www.enactus.ie/",
  },

];

export default function Footer() {
  return (
    <div className="bg-white p-4 text-penBlue shadow-inner shadow-stone-400/50">
      <div className="grid mt-4 md:grid-cols-12 grid-cols-1 gap-3">
        <motion.div whileHover={{ scale: 1.2 }} className="col-span-4">
          <a
            target={"_blank"}
            href="https://www.enactusdcu.com/"
          >
            <Image
              src={logo}
              alt="Parking Protect Logo"
              className="w-32 rounded-sm  mx-auto mb-8"
            />
          </a>
        </motion.div>
        <div className="col-span-5   text-left">
          <p className="text-md">
            <span className="font-bold text-darkBlue text-xl">Parking Protect</span>
          </p>
          <p className="text-sm">
            <span className="font-bold">An Enactus DCU Project</span>,
            DCU Glasnevin
          </p>
          <br />
          <br />
          <p className="text-xs">
            <span className="font-bold">Site by:</span>{" "}
            <a
              href="https://www.linkedin.com/in/niamh-gowran-6b3b24221/"
              target={"_blank"}
              className="hover:text-red-500"
            >
              Niamh Gowran
            </a>
            <span className="font-bold"> & </span>{" "}
            <a
              href="https://www.linkedin.com/in/kevin-james-tomescu/"
              target={"_blank"}
              className="hover:text-red-500"
            >
              Kevin Tomescu
            </a>
          </p>
        </div>
        <div className="col-span-3">
          <p className="text-md">
            <span className="font-bold">Resources:</span>
          </p>
          {Resources.map((item, index) => {
            return (
              <motion.a
                whileHover={{ scale: 1.1 }}
                className="hover:text-darkBlue hover:font-bold block"
                href={item.link}
                target={"_blank"}
              >
                {item.des}
              </motion.a>
            );
          })}
        </div>
      </div>
    </div>
  );
}