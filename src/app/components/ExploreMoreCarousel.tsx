"use client";
import { motion } from "framer-motion";
import { FeaturedDropsCard } from ".";
import { useRef, useState, useEffect } from "react";
import ghost from "../../../public/ghost.png";
import jelly from "../../../public/jelly.png";
import cigar from "../../../public/cigar.png";
import paint from "../../../public/painting_hand.png";

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

export default function ExploreMoreCarousel() {
  const constraintsRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (constraintsRef.current)
      setWidth(
        constraintsRef.current.scrollWidth - constraintsRef.current.offsetWidth
      );
  }, [constraintsRef.current?.scrollWidth]);

  return (
    <motion.div className="overflow-hidden" ref={constraintsRef}>
      <motion.div
        ref={constraintsRef}
        transition={{
          type: "tween",
          ease: "easeOut",
          duration: Math.round(width / 22),
          repeat: Infinity,
          repeatDelay: 3,
          delay: 2,
        }}
        style={{ touchAction: "none" }}
        animate={{ x: [null, -width, 0] }}
        className="grid grid-flow-col auto-cols-max gap-x-6 ml-5 sm:ml-8"
        drag="x"
        dragConstraints={{ right: 0, left: -width - 10 }}
        whileDrag={{ cursor: "grabbing" }}
        onMouseDown={(e) => e.preventDefault()}
      >
        {carouimg.map((item, i) => {
          return <FeaturedDropsCard {...item} key={i} />;
        })}
      </motion.div>
    </motion.div>
  );
}
