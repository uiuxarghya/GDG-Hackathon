import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

const timelineData = [
  { title: "Registration Begins - February 15, 2025", content: "Start your journey by signing up for the GDG Hackathon. Don't miss this chance to showcase your skills!" },
  { title: "Registration Ends - March 15, 2025", content: "Ensure your team has completed registration before the deadline. Late entries won't be accepted." },
  { title: "Idea Submission - March 20, 2025 - March 25, 2025", content: "Submit your innovative idea online. Shortlisted teams will advance to the next round." },
  { title: "Finalists Announced - March 27, 2025", content: "The list of selected teams for the final hackathon will be revealed. Stay tuned!" },
  { title: "Hackathon Begins - April 1, 2025", content: "The 36-hour coding marathon kicks off. Innovate, create, and build your best projects." },
  { title: "Project Submission Deadline - April 2, 2025", content: "All projects must be submitted via Devfolio for evaluation. Ensure you meet all criteria." },
  { title: "Award Ceremony & Wrap-Up - April 2, 2025", content: "Celebrate the achievements of participants and winners. May the best team win!" },
];

const EventTimeline = () => {
  const ref = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.getBoundingClientRect().height);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <motion.div className="w-full font-sans md:px-10 bg-transparent">
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h1 className="text-5xl text-center mb-12 font-bold">
          Event <span className="text-purple-700">Timeline</span>
        </h1>
      </div>
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {timelineData.map((item, index) => (
          <motion.div 
            key={index} 
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <motion.div 
                className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center"
                whileInView={{ scale: [0, 1] }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </motion.div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
            </div>
            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <div className="p-5 bg-white/80 dark:bg-black/40 backdrop-blur-md rounded-lg shadow-lg">
                <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.content}</p>
              </div>
            </div>
          </motion.div>
        ))}
        <div
          style={{ height: `${height}px` }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-gradient-to-b from-transparent via-neutral-200 dark:via-neutral-700 to-transparent"
        >
          <motion.div
            style={{ height: heightTransform, opacity: opacityTransform }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent rounded-full"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default EventTimeline;
