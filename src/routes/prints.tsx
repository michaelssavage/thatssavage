import { createFileRoute } from "@tanstack/react-router";
import partyCollage from "assets/prints/clothes/collage.jpg";
import fitnessCollage from "assets/prints/fitness/collage.jpg";
import miscCollage from "assets/prints/misc/bottles.jpg";
import maskCollage from "assets/prints/otherwear/masks.jpg";
import workWearCollage from "assets/prints/workwear/collage.jpg";
import { CollagePic } from "components/collage-pic";
import {
  clothesImages,
  fitnessImages,
  miscArray,
  otherWear,
  workWear,
} from "content";

const collagePics = [
  {
    title: "Parties",
    description:
      "Hen & Stag parties, seasonal printing, funny and special occasion prints",
    tint: "bg-lemon-yellow text-ink",
    collagePic: partyCollage,
    images: clothesImages,
  },
  {
    title: "Fitness",
    description:
      "GAA Club logos, fitness t-shirts, Rugby Teams, Gym Equipment, 5-a-side",
    tint: "bg-cobalt text-paper",
    collagePic: fitnessCollage,
    images: fitnessImages,
  },
  {
    title: "Outerwear",
    description:
      "Masks, neck ties, hats, snoods, shorts, tote bags, school bags",
    tint: "bg-fluoro-pink text-ink",
    collagePic: maskCollage,
    images: otherWear,
  },
  {
    title: "Workwear",
    description: "Aprons, bodywarmers, jackets, hi-vis jackets",
    tint: "text-ink",
    collagePic: workWearCollage,
    images: workWear,
  },
  {
    title: "Miscellaneous",
    description: "Water bottles, wallets, umbrellas, slippers, yoga mats",
    tint: "bg-lemon-yellow text-ink",
    collagePic: miscCollage,
    images: miscArray,
  },
];

const title = "Prints | That's Savage";
const description =
  "Party prints, club and fitness kits, outerwear, workwear, and one-off bits like bottles and bags.";

export const Route = createFileRoute("/prints")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: PrintsRoute,
});

function PrintsRoute() {
  return (
    <main className="sheet">
      <header className="py-8">
        <h1>Prints</h1>
        <p className="mb-0 max-w-prose text-xl italic">
          Hard to beat prices for every printing occasion. Open a card to see
          more!
        </p>
      </header>
      <div className="flex flex-col gap-4">
        {collagePics.map((collage, index) => (
          <CollagePic
            key={collage.title}
            collage={collage}
            firstFigureNumber={
              1 +
              collagePics
                .slice(0, index)
                .reduce((total, { images }) => total + images.length, 0)
            }
          />
        ))}
      </div>
    </main>
  );
}
