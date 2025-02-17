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
    link: "https://stripe.com",
  },
  {
    title: "ETH India",
    description:
      "Gold Sponsor",
    link: "https://netflix.com",
  },
  {
    title: "Sponsor 3",
    description:
      "Coming Soon",
    link: "https://google.com",
  },
  {
    title: "Sponsor 4",
    description:
      "Coming Soon",
    link: "https://meta.com",
  },
  {
    title: "Sponsor 5",
    description:
      "Coming Soon",
    link: "https://amazon.com",
  },
  {
    title: "Sponsor 6",
    description:
      "Coming Soon",
    link: "https://microsoft.com",
  },
];
