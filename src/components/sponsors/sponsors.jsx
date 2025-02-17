import { HoverEffect } from "../ui/card-hover-effect";
import Devfolio from '../../assets/images/devfolio.png'
import EthIndia from '../../assets/images/eth.png'
import JetBrains from '../../assets/images/jetbrains.jpg'
import Xyz from '../../assets/images/xyz.png'
import { image } from "@heroui/react";

export default function CardHoverEffectDemo() {
  return (
    (<>
    <div>
      <h1 className="text-center text-5xl text-white font-bold mt-16 ">Our <span className="text-purple-600"> Sponsors</span></h1>
    </div>
    <div className="max-w-5xl mx-auto px-8">

      <HoverEffect items={sponsors} />
    </div> </>
    )
  );
}
export const sponsors = [
  {
    title: "Devfolio",
    image: Devfolio,
    link: "https://stripe.com",
  },
  {
    title: "ETH India",
    image : EthIndia ,
    link: "https://netflix.com",
  },
  {
    title: ".xyz",
    image : Xyz ,
    link: "https://google.com",
  },
  {
    title: "JetBrains",
    image : JetBrains ,
    link: "https://meta.com",
  },
  
];
