"use client";
import React from "react";
import '../css/tracks.css'
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from '../ui/canvas-reveal-effect'

export default function CanvasRevealEffectDemo() {
  return (<>
    <div>
      <h1 className=" text-5xl text-center text-white font-bold">Explore <span className="text-purple-600">Tracks</span></h1>
    </div>
    <div
      className="py-12 flex  flex-wrap flex-row items-center justify-center  w-full gap-4 mx-auto px-8">
      <Card title="Web3">
        <CanvasRevealEffect animationSpeed={5.1} containerClassName="bg-emerald-900" />
      </Card>
      <Card title="Green Tech">
        <CanvasRevealEffect
          animationSpeed={3}
          containerClassName="bg-black"
          colors={[
            [236, 72, 153],
            [232, 121, 249],
          ]}
          dotSize={2} />
      </Card>
      <Card title="Healthcare">
        <CanvasRevealEffect
          animationSpeed={3}
          containerClassName="bg-sky-600"
          colors={[[125, 211, 252]]} />
      </Card>
      <Card title=" Artificial Intelligence and Machine Learning ">
        <CanvasRevealEffect
          animationSpeed={3}
          containerClassName="bg-black"
          colors={[
            [236, 72, 153],
            [232, 121, 249],
          ]}
          dotSize={2} />
      </Card>
      <Card title="Women Safety">
        <CanvasRevealEffect
          animationSpeed={3}
          containerClassName="bg-sky-600"
          colors={[[125, 211, 252]]} />
      </Card>
      <Card title="Open Innovation">
        <CanvasRevealEffect animationSpeed={5.1} containerClassName="bg-emerald-900" />
      </Card>
    </div>
  </>);
}

const Card = ({
  title,
  icon,
  children
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    (<div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="track-card group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4  h-[10rem] relative mt-12">

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0">
            {children}
          </motion.div>
        )}
      </AnimatePresence>
      <div className="relative z-20">
        <div
          className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2
          className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
      </div>
    </div>)
  );
}