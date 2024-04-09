"use client";

import { Chrono } from "react-chrono";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const roadmap = [
  {
    ico: "#1",
    title: "SOCIAL MEDIA LAUNCH 1.0",
    desc: "Creating hype alongside creating a strong community as much as we could before the actual launch",
  },
  {
    ico: "#2",
    title: "MARKETING WEEK",
    desc: "Rewarding captivating threads from members. Sponsored marketing across all social media to bring more sight to our project. Airdrop and other activities",
  },
  {
    ico: "#3",
    title: "WEBSITE LAUNCH",
    desc: "Our website will be launched with great insight for everyone to see how our marketplace and access to other tools we building on our marketplace before it goes live after $SPARKZ Presale.",
  },
  {
    ico: "#4",
    title: "CONTEST / GAMES",
    desc: "Several discord games were launched to entertain our community during our first games week.",
  },
  {
    ico: "#5",
    title: "PRESALE",
    desc: "You can buy our utility token on our launchpad first. You can then spend this token on our marketplace. Other projects can also use our launchpad to sell their tokens.",
  },
  {
    ico: "#6",
    title: "AIRDROP DISTRIBUTION",
    desc: "All allocated airdrop will be sent out to the community that made the list through tasks and some selected active members who supported  us.",
  },
  {
    ico: "#7",
    title: "MARKETPLACE GOES LIVE",
    desc: "$Sparkz marketplace will go live to enable users to sell/buy items on our marketplace. You can become a vendor by purchasing a space.",
  },
  {
    ico: "#8",
    title: "ROADMAP 2.2",
    desc: "MVP of $Sparkz app release",
  },
];

export default function AboutTimeline() {
  const [hydra, setHydra] = useState(false);

  useEffect(() => {
    setHydra(true);
  }, []);
  if (!hydra) {
    return null;
  }
  return (
    <div className="w-full text-white">
      <Chrono
        mode="VERTICAL_ALTERNATING"
        hideControls={true}
        disableToolbar={true}
        theme={{
          primary: "#ffffff",
          secondary: "#FF00FF",
          cardBgColor: "transparent",
        }}
        slideShow
        classNames={{
          card: "w-full",
        }}
        cardHeight={280}
        timelinePointShape="circle"
        scrollable={true}
      >
        {roadmap.map((road, index) => (
          <RoadmapCard road={road} index={index} key={index} />
        ))}
      </Chrono>
    </div>
  );
}

const RoadmapCard = ({
  road,
  index,
}: {
  road: (typeof roadmap)[0];
  index: number;
}) => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.4, 1], [0, 1, 0]);

  const transformLeft = useTransform(
    scrollYProgress,
    [0, 0.2, 0.91, 1],
    [-100, 0, 0, -100]
  );
  const transformRight = useTransform(
    scrollYProgress,
    [0, 0.2, 0.91, 1],
    [100, 0, 0, 100]
  );

  const scrollConfig = {
    bounce: 0.6,
  };

  const leftSpring = useSpring(transformLeft, scrollConfig);
  const rightSpring = useSpring(transformRight, scrollConfig);

  return (
    <motion.div
      ref={targetRef}
      style={{
        opacity,
        translateX: index % 2 == 0 ? transformLeft : transformRight,
        x: index % 2 == 0 ? leftSpring : rightSpring,
      }}
      className="p-[0.1rem] bg-gradient-to-r from-[#0CEAFF] to-[#FF00FF]  w-full"
      key={index}
    >
      <div className="h-full w-full bg-backgroundcolor_pri py-8 px-4 space-y-5">
        <div className="w-10 text-center p-[0.1rem] bg-gradient-to-tr from-[#0CEAFF] to-[#FF00FF]">
          <div className="h-full w-full bg-backgroundcolor_pri">{road.ico}</div>
        </div>

        <h1 className="text-xl capitalize">{road.title}</h1>

        <p className="font-serrat">{road.desc}</p>
      </div>
    </motion.div>
  );
};
