import { Fragment, useEffect, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { IoLogoAppleAppstore, IoLogoGooglePlaystore } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/parking.png";
import { AiFillApple } from "react-icons/ai";
import { FaGooglePlay } from "react-icons/fa";

const navigation = [
  { name: "Features", href: "#features", current: false },
  { name: "Our Mission", href: "#mission", current: false },
  { name: "Our Team", href: "#team", current: false },
  { name: "Contact", href: "#contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Nav() {
  const [showModal, setShowModal] = useState(false);
  const [nav, setNav] = useState(false);
  const [colour, setColour] = useState("#5A87C5 ");

  /*useEffect(() => {
    const changeColour = () => {
      if (window.scrollY >= 520) {
        setColour("#174484");
      } else {
        setColour("transparent");
      }
    };
    window.addEventListener("scroll", changeColour);
  }, []);*/

  return (
    <Disclosure
      as="nav"
      style={{ backgroundColor: `${colour}` }}
      className="bg-transparent fixed left-0 w-full z-10 top-0 shadow-sm ..."
    >
      {({ open }) => (
        <>
          <div
            className=" mx-auto max-w-7xl px-2 sm:px-6 lg:px-8"
          >
            <div
              className="relative flex h-16 items-center justify-between"
            >
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:dark-blue hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="bg-transparent pt-3 flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Link href="#hero">
                    <Image
                      src={logo}
                      width={75}
                      height={75}
                      className="block h-8 w-auto "
                      alt="Logo"
                    />
                  </Link>
                </div>
                <div className="pl-7 hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "dark-blue text-white"
                            : "text-zinc-800 hover:bg-darkBlue hover:text-white",
                          "px-5 py-2 rounded-md text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              {/*Join button*/}
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                <button
                  type="button"
                  onClick={() => setShowModal(true)}
                  className="rounded-md dark-blue p-2 text-white hover:text-white hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <p className="font-mono ...">Download</p>
                </button>
              </div>
              {showModal ? (
                <>
                  <div className=" flex overflow-x-hidden overflow-y-auto fixed inset-0 z-60 outline-none focus:outline-none">
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                      <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">

                        <button
                          className="p-1 ml-auto border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                          onClick={() => setShowModal(false)}
                        >
                          <span className="text-black h-6 w-6 text-2xl block ">
                            ×
                          </span>
                        </button>

                        <div className="p-5 text-center grid grid-cols-4 md:grid-flow-row">

                          <div className="col-span-4">

                            <p className="text-center">Download soon!</p>

                            <br></br>
                          </div>
                          <div className="col-span-2 ...">
                            <button
                              type="button"
                              className="bg-blue-900 text-white rounded-full px-12 py-2 mr-4 hover:scale-105 shadow-xl"
                            >
                              <AiFillApple className="inline-block mr-2 lg:text-3xl text-2xl" />

                            </button>
                          </div>
                          <div className="col-span-2 ...">
                            <button
                              type="button"
                              className="bg-blue-900 text-white rounded-full px-12 py-2 mr-4 hover:scale-105 shadow-xl"
                            >
                              <FaGooglePlay className="inline-block mr-2 lg:text-2xl" />

                            </button>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : null}

            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "dark-blue text-white"
                      : "text-zinc-800 hover:dark-blue hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}