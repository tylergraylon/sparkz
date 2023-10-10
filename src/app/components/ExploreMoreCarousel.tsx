"use client";
import { motion } from "framer-motion";
import { FeaturedDropsCard } from ".";
import { useRef, useState, useEffect } from "react";
import ghost from "../../../public/ghost.png";
import jelly from "../../../public/jelly.png";
import cigar from "../../../public/cigar.png";
import paint from "../../../public/painting_hand.png";
import { StaticImageData } from "next/image";

const carouimg = [
  {
    img: ghost,
    name: "Sparkz#1500",
  },
  {
    img: cigar,
    name: "Sparkz#1500",
  },
  {
    img: ghost,
    name: "Sparkz#1500",
  },
  {
    img: jelly,
    name: "Sparkz#1500",
  },
  {
    img: cigar,
    name: "Sparkz#1500",
  },
  {
    img: paint,
    name: "Sparkz#1500",
  },
];

export default function ExploreMoreCarousel(
  {opp, data}: {opp?: boolean, 
    data: {img: string | StaticImageData}[] | null}) {
  const constraintsRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (constraintsRef.current)
      setWidth(
        (constraintsRef.current.scrollWidth - constraintsRef.current.offsetWidth) + 10
      );
  }, [constraintsRef.current?.scrollWidth]);

  return (
    <motion.div className="overflow-hidden" ref={constraintsRef}
    // style={{ width: `${width * 6}px`}}
    >
      <motion.div
        ref={constraintsRef}
        transition={{
          type: "tween",
          ease: "easeInOut",
          duration: Math.round(width / 22),
          repeat: Infinity,
          repeatDelay: 3,
          delay: 0,
          repeatType: 'loop'
        }}
        style={{ touchAction: "none",}}
        animate={opp ? { x: [-width, 0, -width] } : { x: [null, -width, 0] }}
        className={`grid grid-flow-col auto-cols-max gap-x-6 ml-5 sm:ml-8 justify-items-start`}
        drag="x"
        dragConstraints={{ right: 0, left: -width - 10 }}
        whileDrag={{ cursor: "grabbing" }}
        onMouseDown={(e) => e.preventDefault()}
      >
        { data && data.length > 0 ? (
          data.map((item, i) => {
            return <FeaturedDropsCard img={item.img} key={i} />;
          })
        ): (
            Array.from({length: 6}, (_, i) => (
              <CarouselLoader/>
            ))
        )
        }
      </motion.div>
    </motion.div>
  );
}



const CarouselLoader = () => (
  <div className="group grid animate-pulse">
    <div className="row-span-6 relative bg-[#5c5c5c] h-60"></div>
  </div>
);