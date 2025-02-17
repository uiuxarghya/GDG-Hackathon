import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCode, FaBrain, FaLeaf } from "react-icons/fa";
import { MdOutlineCastForEducation } from "react-icons/md";
import { GrRestroomWomen } from "react-icons/gr";
import { AiOutlineMedicineBox } from "react-icons/ai";

const Card = ({ title, icon, children }) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="track-card group/canvas-card flex items-center justify-center 
                 dark:border-white/[0.2] max-w-sm w-full mx-auto p-4 h-[10rem] 
                 relative mt-12 rounded-lg bg-opacity-20 backdrop-blur-md 
                 border border-purple-500/50 shadow-md"
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 flex flex-col items-center">
        <motion.div
          className="text-center mb-2"
          initial={{ opacity: 0.6, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {icon}
        </motion.div>

        <motion.h2
          className="text-gray-50 text-xl font-bold transition-all duration-300"
          initial={{ opacity: 0.7 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.1, color: "#c084fc" }}
        >
          {title}
        </motion.h2>
      </div>

      {/* Subtle glowing effect on idle */}
      <motion.div
        initial={{ opacity: 0.2 }}
        animate={{ opacity: 0.5 }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut",
          yoyo: true,
        }}
        className="absolute inset-0 rounded-lg bg-purple-800 opacity-5 blur-md"
      />
    </motion.div>
  );
};

// Example usage
const App = () => {
  return (
    <>
      <div>
        <h1 className="track-heading mt-24 text-5xl text-center text-white font-bold">
          Explore <span className="text-purple-600">Tracks</span>
        </h1>
      </div>
      <div className="flex flex-wrap justify-center gap-6 p-8">
        <Card title="Web3" icon={<FaCode size={40} color="#c084fc" />}></Card>

        <Card
          title="AI & ML"
          icon={<FaBrain size={40} color="#c084fc" />}
        ></Card>

        <Card
          title="Sustainability"
          icon={<FaLeaf size={40} color="#c084fc" />}
        ></Card>
        <Card
          title="Healthcare"
          icon={<AiOutlineMedicineBox size={40} color="#c084fc" />}
        ></Card>
        <Card
          title="Education"
          icon={<MdOutlineCastForEducation size={40} color="#c084fc" />}
        ></Card>
        <Card
          title="Women Safety"
          icon={<GrRestroomWomen size={40} color="#c084fc" />}
        ></Card>
      </div>
    </>
  );
};

export default App;
