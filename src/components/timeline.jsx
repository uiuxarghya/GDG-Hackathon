import React, { useEffect, useState } from "react";
import "../styles/timeline.css";

const Timeline = () => {
  const timelineData = [
    {
      title: "Registration Opens",
      date: "February 23 , 2025",
      details:
        "Begin your journey by registering for GDG Hackathon. Don't miss out on this opportunity to showcase your skills!",
    },
    {
      title: "Registration Closes",
      date: "March 20 , 2025",
      details:
        "Make sure you have registered for the Hackathon before the Registration Period ends",
    },
    {
      title: "First Round",
      date: "March 20 , 2025 - March 25 , 2025",
      details:
        "An online preliminary round to test your mettle. Make your Team and submit your idea and wait till we annouce the Shortlisted Teams",
    },
    {
      title: " Acceptance Letter Rollout",
      date: "March 27 , 2025",
      details:
        "Your team is accepted to attend the Hackathon, how awesome is that? Make sure you have RSVP'd to attend the Finals ",
    },
    {
      title: " Hacking Period Starts",
      date: "April 5 , 2025",
      details:
        "The coding marathon begins! Get ready for 36 hours of innovation, creativity, and intense development.",
    },
    {
      title: " Project Submission",
      date: "April 6 , 2025",
      details:
        "Submit your projects via Devfolio and wait for the Judges to evaluate your Project",
    },
    {
      title: " Closing Ceremony",
      date: "April 6 , 2025",
      details:
        "Submit your projects and prepare for the final presentations. May the best team win!",
    },
  ];

  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const items = document.querySelectorAll(".timeline li");
      const newVisibleItems = [];

      items.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          newVisibleItems.push(index);
        }
      });

      setVisibleItems(newVisibleItems);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="container">
      <h1 className="text-5xl text-white text-center mb-12 mt-12 font-bold">
        Event <span className="text-purple-700">Timeline</span>
      </h1>
      <section className="timeline mb-20">
        <ul>
          {timelineData.map((item, index) => (
            <li
              key={index}
              className={visibleItems.includes(index) ? "in-view" : ""}
            >
              <div className=" flex flex-col   w-[450px] h-auto timeline-box">
                <h1 className=" text-3xl text-purple-700 font-bold mt-2">
                  {item.title}
                </h1>
                <p className=" text-xl text-purple-500 font-bold p-1 mt-1">
                  {item.date}
                </p>
                <p1 className="text-md text-gray-400 font-normal p-1 mt-1 ">
                  {item.details}
                </p1>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Timeline;
