import { HoverEffect } from "../ui/prizes-hover"
import Bronze from '../../assets/images/bronze.png'
import Gold from '../../assets/images/gold.png'
import Silver from '../../assets/images/silver.png'


export default function CardHoverEffectDemo() {
  return (
    (<>
      <div>
        <h1 className="text-center text-5xl text-white font-bold mt-16 ">Check <span className="text-purple-600"> 
          Prizes</span></h1>
      </div>
      <div className="max-w-5xl mx-auto px-8">

        <HoverEffect items={sponsors} />
      </div> </>
    )
  );
}
export const sponsors = [
  {
    title: "1st Runner-Up",
    description: Bronze,
    amount: "To be Revealed Soon",
  },
  {
    title: "Winner",
    description: Gold,
    amount: "To be Revealed Soon",
  },
  {
    title: "2nd Runner-Up",
    description: Silver,
    amount: "To be Revealed Soon",
  },
  
];
