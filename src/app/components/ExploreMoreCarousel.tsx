"use client";
import { motion } from "framer-motion";
import { FeaturedDropsCard } from ".";
import { useRef, useState, useEffect } from "react";
import ghost from "../../../public/ghost.png";

export default function ExploreMoreCarousel() {
  const constraintsRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (constraintsRef.current)
      setWidth(
        constraintsRef.current.scrollWidth - constraintsRef.current.offsetWidth
      );
  }, []);

  console.log(width);

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
        className="grid grid-flow-col auto-cols-max gap-2 ml-5 sm:ml-8"
        drag="x"
        dragConstraints={{ right: 0, left: -width - 10 }}
        whileDrag={{ cursor: "grabbing" }}
        onMouseDown={(e) => e.preventDefault()}
      >
        {Array.from({ length: 8 }, (_, i) => {
          return <FeaturedDropsCard img={ghost} name="Jelly" key={i} />;
        })}
      </motion.div>
    </motion.div>
  );
}
