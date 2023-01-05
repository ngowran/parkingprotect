import React from "react";
import { RiNumber1 } from "react-icons/ri";
import { RiNumber2 } from "react-icons/ri";
import { RiNumber3 } from "react-icons/ri";
import Heading from "./Heading";

const feature = [
    {
        description: "Efficient Report Generation and Navigation System to Local Authority ",
        icon: RiNumber1,
    },
    {
        description: "Educational content, statistics and real stories",
        icon: RiNumber2,
    },
    {
        description: "Blue badge permit validation and Disabled Parking Abuse Detection",
        icon: RiNumber3,
    },
]

export default function Features() {
    return (
        <div className="py-16" id="features">
            <div className="p-5">
                <Heading title="Features" />
            </div>
            <br></br>
            <div className="grid md:grid-cols-3 grid-cols-1 p-4">
                {feature.map((feature, index) => {
                    return (
                        <div className="p-4">
                            <div key={index} className="rounded-lg  text-center p-4" style={{ backgroundColor: "#38639F" }}>
                                <feature.icon className="h-10 text-white text-bold w-10 p-2 mx-auto rounded-full" style={{ backgroundColor: "#83A5D3" }} />
                                <br></br>
                                <p className="font-medium text-white">
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