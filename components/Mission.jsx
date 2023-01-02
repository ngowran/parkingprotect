import React from "react";
import people from "../public/people.png";
import Image from "next/image";

export default function Mission() {
    return (
        <div className="py-16" id="mission">
            <div className="grid md:grid-cols-2 grid-cols-1">
                <div className="text-center md:text-left p-5">
                    <h1 className="text-6xl  font-bold">Our Mission</h1>
                    <br></br>
                    <p className="text-2xl ">
                        Parking Protect's mission is to support disabled
                        people's right to accessible parking by providing a service to report acessible parking
                        abuse in our communities.
                    </p>
                </div>
                <div className="align-top text-center mx-auto">
                    <Image src={people} alt="people" height={500} width={500} />
                </div>
            </div>
        </div>
    );
}