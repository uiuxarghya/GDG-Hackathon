import { HoverEffect } from "../ui/card-hover-effect";

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
    description:
      "Gold Sponsor",
    link: "https://devfolio.co/",
  },
  {
    title: "ETH India",
    description:
      "Gold Sponsor",
    link: "https://ethindia2024.devfolio.co/",
  },
  {
    title: "Sponsor 3",
    description:
      "Coming Soon",
    link: "#",
  },
  {
    title: "Sponsor 4",
    description:
      "Coming Soon",
    link: "#",
  },
  {
    title: "Sponsor 5",
    description:
      "Coming Soon",
    link: "#",
  },
  {
    title: "Sponsor 6",
    description:
      "Coming Soon",
    link: "#",
  },
];
