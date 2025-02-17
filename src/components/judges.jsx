import { HoverEffect } from "./ui/judges-hover";
import { IoLogoInstagram } from "react-icons/io5";
import { SiLinkedin } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";

export default function CardHoverEffectDemo() {
  return (
    <>
      <div>
        <h1 className="text-center text-5xl text-white font-bold mt-16 ">
          Meet Our<span className="text-purple-600"> Judges</span>
        </h1>
        <p className="text-xl text-center text-white font-semibold mt-6">
          Industry experts who will evaluate your innovative solutions
        </p>
      </div>
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={sponsors} />
      </div>{" "}
    </>
  );
}
export const sponsors = [
  {
    title: "To be Revealed Soon",
    description: "/assets/images/judge.png",
    icon1: <SiLinkedin />,
    icon2: <IoLogoInstagram />,
    icon3: <FaXTwitter />,
  },
  {
    title: "To be Revealed Soon",
    description: "/assets/images/judge.png",
    icon1: <SiLinkedin />,
    icon2: <IoLogoInstagram />,
    icon3: <FaXTwitter />,
  },
  {
    title: "To be Revealed Soon",
    description: "/assets/images/judge.png",
    icon1: <SiLinkedin />,
    icon2: <IoLogoInstagram />,
    icon3: <FaXTwitter />,
  },
];
