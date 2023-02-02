import React from "react";
import { RiNumber1 } from "react-icons/ri";
import { RiNumber2 } from "react-icons/ri";
import { RiNumber3 } from "react-icons/ri";
import Heading from "./Heading";

const feature = [
  {
    description:
      "Efficient Report Generation and Navigation System to Local Authority ",
    icon: RiNumber1,
  },
  {
    description:
      "Blue badge permit validation and Disabled Parking Abuse Detection",
    icon: RiNumber2,
  },
  {
    description: "Educational content, statistics and real stories.",
    icon: RiNumber3,
  },
];

export default function Features() {
  return (
      <div className="flex flex-shrink flex-col relative space-y-16 overflow-hidden h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
        <div className="absolute top-20 md:top-36">
          <Heading title="Features" />
        </div>
        <br></br>
        <div className="grid md:grid-cols-3 grid-cols-1 p-2 absolute">
          {feature.map((feature, index) => {
            return (
              <div key={index} className="p-4">
                <div
                  key={index}
                  className="rounded-lg  text-center p-4 w-full h-full  shadow-lg"
                  style={{ backgroundColor: "#174484" }}
                >
                  <feature.icon
                    className="h-10 text-white text-bold w-10 p-2 mb-6 mx-auto rounded-full max-sm:w-6 max-sm:h-6"
                    style={{ backgroundColor: "#83A5D3" }}
                  />
                  
                  <p className="font-medium text-white text-2xl max-sm:text-xs">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

  );
}
