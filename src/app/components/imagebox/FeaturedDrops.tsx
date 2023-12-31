"use client";
import Image, { StaticImageData } from "next/image";
import painting_hand from "../../../../public/painting_hand.png";
import { motion } from "framer-motion";

export default function FeaturedDropsCard({
  img,
  name,
}: {
  img: StaticImageData | string;
  name?: string;
}) {
  return (
    <motion.div
      whileTap={{ cursor: "grabbing" }}
      className="flex w-80 h-80"
    >
      {/* <div className=" bg-[#4E4E4E] relative px-4 text-white">
        <p className="absolute bottom-5 transform -rotate-90 inset-x-0">
          {name}
        </p>
      </div> */}

      <motion.div className="overflow-hidden">
      <Image
          src={img}
          alt="NFT"
          width={350}
          height={200}
          className="transform hover:scale-105 transition-transform duration-300 ease-in-out"
        />
      </motion.div>
    </motion.div>
  );
}
