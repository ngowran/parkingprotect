import { BsLinkedin } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Heading from "./Heading";

const features = [
  {
    name: "@parkingprotect",
    link: "https://www.instagram.com/parkingprotect/",
    icon: FaInstagram,
  },
  {
    name: "info@parking-protect.com",
    link: "mailto:info@parking-protect.com",
    icon: TfiEmail,
  },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/enactusdcu/",
    icon: BsLinkedin,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-32">
      <div>
        <div className="mx-auto text-center max-w-2xl px-2 pt-16">
          <Heading title="Contact Us" />
          <p className="mt-4 text-xl font-medium">
            We are always looking for new ways to improve our service. If you
            have any questions or suggestions, please get in touch!
          </p>
        </div>

        <div className="mt-10 mb-12 mx-auto items-center justify-center flex">
          <dl className="mx-auto space-y-10 md:grid md:grid-cols-3 gap-5  md:gap-y-12 md:space-y-0">
            {features.map((feature, index) => (
              <div key={index} className="relative mx-auto">
                <AnimatePresence mode="wait">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                      delay: 0.2,
                      type: "spring",
                      stiffness: 120,
                      duration: 3,
                      bounce: 0.5,
                    }}
                    whileHover={{ scale: 1.1 }}
                    className="mx-auto"
                  >
                    <dt>
                      <a href={feature.link} target="blank">
                        <div className="absolute flex h-12 w-12 items-center justify-center rounded-md dark-blue hover:bg-blue-600/60 text-white text-center">
                          <feature.icon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        </div>
                        <p className="ml-16 text-lg font-medium leading-10 text-gray-900">
                          {feature.name}
                        </p>
                      </a>
                    </dt>
                  </motion.div>
                </AnimatePresence>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
