"use client";

import { Chrono } from "react-chrono";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
} from "framer-motion";
import { useRef } from "react";

const roadmap = [
  {
    ico: "#1",
    title: "TOKEN DEPLOYMENT",
    desc: "$SPARKZ our utility token deployment on Ethereum to create more adoption on our marketplace and which will support other Blockchain ",
  },
  {
    ico: "#2",
    title: "SOCIAL MEDIA LAUNCH 1.0",
    desc: "Creating hype alongside creating a strong community as much as we could before the actual launch",
  },
  {
    ico: "#3",
    title: "MARKETING WEEK",
    desc: "Rewarding captivating threads from members. Sponsored marketing across all social media to bring more sight to our project. Airdrop and other activities",
  },
  {
    ico: "#4",
    title: "WEBSITE LAUNCH",
    desc: "Our website will be launched with great insight for everyone to see how our marketplace and access to other tools we building on our marketplace before it goes live after $SPARKZ Presale.",
  },
  {
    ico: "#5",
    title: "SPARKZ WHITEPAPER",
    desc: "An explanatory whitepaper about $SPARKZ STORE and our utility token ($SPARKZ) which aims to educate its readers about our mission for the best interest of the community regarding to our marketplace.",
  },
  {
    ico: "#6",
    title: "SOCIAL MEDIA LAUNCH 2.0",
    desc: "We reached out to several top projects to partner up with promotion of our project and preparation with other CEX and DEX for our token launch and listing.",
  },
  {
    ico: "#7",
    title: "PARTNERSHIP WEEK",
    desc: "We reached out to several top projects to partner up with promotion of our project and preparation with other CEX and DEX for our token launch and listing.",
  },
  {
    ico: "#8",
    title: "SPARKZ AMBASSADORS",
    desc: "This is for our ambassador reward program to recruit good and intelligent representatives for our marketplace.",
  },
  {
    ico: "#9",
    title: "CONTEST / GAMES",
    desc: "Several discord games were launched to entertain our community during our first games week.",
  },
  {
    ico: "#10",
    title: "AMA",
    desc: "Our first AMA, Answering community questions, sharing vital information to everyone on our space. Telling them more about our Marketplace.",
  },
  {
    ico: "#11",
    title: "PRESALE",
    desc: "You can buy our utility token on our launchpad first. You can then spend this token on our marketplace. Other projects can also use our launchpad to sell their tokens.",
  },
  {
    ico: "#12",
    title: "AIRDROP DISTRIBUTION",
    desc: "All allocated airdrop will be sent out to the community that made the list through tasks and some selected active members who supported  us.",
  },
  {
    ico: "#13",
    title: "MARKETPLACE GOES LIVE",
    desc: "$Sparkz marketplace will go live to enable users to sell/buy items on our marketplace. You can become a vendor by purchasing a space.",
  },
  {
    ico: "#14",
    title: "ROADMAP 2.2",
    desc: "MVP of $Sparkz app release",
  },
];

export default function AboutTimeline() {
  return (
    <div className="w-full  text-white">
      <Chrono
        mode="VERTICAL_ALTERNATING"
        hideControls={true}
        theme={{
          primary: "#ffffff",
          secondary: "#FF00FF",
          cardBgColor: "transparent",
        }}
        slideShow
        timelinePointShape="circle"
        scrollable={false}
      >
        {roadmap.map((road, index) => (
          <RoadmapCard road={road} index={index} />
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
      className="p-[0.1rem] bg-gradient-to-r from-[#0CEAFF] to-[#FF00FF] w-full"
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
