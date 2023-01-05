import React from "react";
import Link from "next/link";

export default function Footer() {
    const kevinLink = "https://kevinjtomescu.com/";
    const niamhLink = "https://github.com/ngowran/";

    return (
        <div style={{ backgroundColor: '#83A5D3' }} className=" text-white text-center py-5">
            <p className="text-2xl">Made by <Link href={kevinLink} passHref={true} target={"_blank"}>KJT</Link> and <Link href={niamhLink} passHref={true} target={"_blank"}>NG</Link> </p>
        </div>
    )
}