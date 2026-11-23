import { createFileRoute, Link } from "@tanstack/react-router";
import bride from "assets/customers/bride.jpg";
import clonmany from "assets/customers/clonmany.jpg";
import country from "assets/customers/country-fit.jpg";
import disney from "assets/customers/disney.jpg";
import keren from "assets/customers/keren-hen.jpg";
import eireStamp from "assets/eire-stamp.png";
import tapeOne from "assets/tape/tape-1.png";
import tapeTwo from "assets/tape/tape-2.png";
import { Figure } from "components/figure";
import { PageLink } from "components/page-link";
import { cards } from "content/card-array";

const customers = [
  {
    img: bride,
    alt: "Bride in white on steps",
    caption: "The bride and her tribe",
  },
  {
    img: country,
    alt: "Country fit dancers",
    caption: "The Country Fit dancers in their club tops",
  },
  {
    img: disney,
    alt: "Hen do with disney character",
    caption: "A Disney-themed hen",
  },
  {
    img: clonmany,
    alt: "Clonmany green and red tops",
    caption: "Clonmany, kitted out in green and red",
  },
  {
    img: keren,
    alt: "Hen tops with cocktail glasses",
    caption: "Disney hen night, all in matching tops",
  },
];

const tapes = [tapeOne, tapeTwo];

const garments = ["T-shirts", "Hoodies", "Jerseys", "Hats"];

const tickerWords = [
  "Workwear",
  "Hens",
  "Stags",
  "Clubs",
  "Grads",
  "Fitness",
  "Totes",
  "Teddies",
];

const printTilts = [
  "-rotate-3",
  "rotate-2",
  "-rotate-1",
  "rotate-3",
  "-rotate-2",
];
const printOffsets = ["lg:mt-0", "lg:mt-8", "lg:mt-2", "lg:mt-16", "lg:mt-4"];

const heroFigureNumber = 1;
const firstCardFigureNumber = heroFigureNumber + 1;
const posterFigureNumber = firstCardFigureNumber + cards.length;
const firstCustomerFigureNumber = posterFigureNumber + 1;

export const Route = createFileRoute("/")({
  component: HomeRoute,
});

const TickerGroup = ({ hidden = false }: { hidden?: boolean }) => (
  <ul className="ticker-group" aria-hidden={hidden || undefined}>
    {tickerWords.map((word) => (
      <li key={word}>
        {word}
        <span aria-hidden="true">✦</span>
      </li>
    ))}
  </ul>
);

function HomeRoute() {
  return (
    <main>
      <div className="sheet mt-4">
        <section className="frame relative grid gap-8 bg-blush p-10 text-ink md:pr-24 lg:grid-cols-5 lg:items-center lg:p-8 lg:pr-24">
          <div className="barcode absolute inset-y-8 right-8 max-md:hidden">
            <div aria-hidden="true" className="barcode-bars" />
            <ul className="barcode-text label" aria-label="What we print on">
              {garments.map((garment) => (
                <li key={garment}>{garment}</li>
              ))}
            </ul>
          </div>
          <div className="lg:order-2 lg:col-span-3">
            <h1 className="hyphens-none">
              No minimum
              <br className="max-xl:hidden" /> order.
            </h1>
            <p className="mb-4 text-2xl italic">
              There are enough rules in life. That&apos;s showbiz baby!
            </p>
            <p className="button mb-4">T-shirts from €20 · Hoodies from €35</p>
            <div className="flex flex-wrap items-center gap-4">
              <Link to="/contact" className="button">
                Get a quote →
              </Link>
              <PageLink to="/prints">See the prints</PageLink>
            </div>
          </div>

          <div className="relative w-fit lg:order-1 lg:col-span-2">
            <div aria-hidden="true" className="halftone-fade" />
            <Figure
              n={heroFigureNumber}
              label="Mr. Savage himself"
              className="relative"
            >
              {/* TODO(owner): self-portrait.png is the only off-palette element on the site (salmon and light blue fills). Ask about a riso recolour. */}
              <img
                src="/self-portrait.png"
                alt="Self portrait"
                fetchPriority="high"
                className="size-72 object-contain lg:size-80"
              />
            </Figure>
          </div>
        </section>
      </div>

      <div className="ticker mt-8" aria-label="Who we print for">
        <div className="ticker-track">
          <TickerGroup />
          <TickerGroup hidden />
        </div>
      </div>

      <div className="sheet">
        <section className="frame mt-16 grid md:grid-cols-2 xl:grid-cols-3">
          <article className="p-8 md:col-span-2 xl:col-span-1">
            <h2>From sketch to sleeve</h2>
            <p className="dropcap">
              Over 10 years of design and garment printing means we can draw the
              logo, make a sample, and print the finished garment using
              whichever method suits it best.
            </p>
            <PageLink to="/about">How we print</PageLink>
          </article>
          <article className="tile-divider relative bg-cobalt p-8 text-paper">
            <img
              src={eireStamp}
              alt=""
              aria-hidden="true"
              className="eire-stamp absolute top-4 right-4 size-28"
            />
            <h2 className="pr-28">Irish owned</h2>
            <p>
              We take pride in where we are from and what we do. By supporting
              us you are supporting local. Tabhair aire duit féin (look after
              yourself) and skip the mega online marketplaces.
            </p>
            <PageLink to="/about">About us</PageLink>
          </article>
          <article className="tile-divider tile-divider-pair bg-lemon-yellow p-8">
            <h2>Ready when you need it</h2>
            {/* TODO(owner): confirm the number of working days with the owner, then restore the "Fast turnaround" heading with that number. Do not invent one. */}
            <p>
              Tell us the date — a hen, a match, a graduation — and we&apos;ll
              work back from it.
            </p>
            <PageLink to="/about">FAQs</PageLink>
          </article>
        </section>

        <section className="mt-16">
          <h2 className="mb-8">What we can do</h2>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {cards.map(({ img, label }, index) => (
              <Figure
                key={label}
                n={firstCardFigureNumber + index}
                label={label}
                className={
                  index === 0
                    ? "col-span-2 lg:row-span-2"
                    : index === cards.length - 1
                      ? "col-span-2 lg:col-span-1"
                      : ""
                }
              >
                <img
                  src={img}
                  alt={label}
                  width={720}
                  height={720}
                  loading="lazy"
                  className={`w-full object-cover ${index === 0 ? "aspect-square lg:aspect-auto lg:min-h-0 lg:flex-1" : "aspect-square"}`}
                />
              </Figure>
            ))}
            <Figure
              n={posterFigureNumber}
              label="Poster prints"
              className="max-sm:col-span-2"
            >
              <div className="flex aspect-square max-sm:aspect-auto flex-col justify-between gap-4 grain bg-fluoro-pink p-4 text-ink">
                <p className="mb-0 font-chango text-3xl leading-tight lg:max-xl:text-xl">
                  “Be Grand Hi!”
                </p>
                <p className="mb-0 font-chango text-3xl leading-tight lg:max-xl:text-xl">
                  “That&apos;s a Holy Tarra”
                </p>
                <p className="label mb-0">Irish sayings on paper</p>
              </div>
            </Figure>
          </div>
          <div className="mt-8">
            <PageLink to="/prints">View more</PageLink>
          </div>
        </section>

        <section className="frame shadow-hard mt-16 grid gap-8 bg-lemon-yellow p-8 text-ink lg:grid-cols-2 lg:items-center">
          <p className="poster-line mb-0">
            One hoodie
            <br />
            or a hundred
          </p>
          <div>
            <p className="price-line mb-2">T-shirts from €20–25</p>
            <p className="price-line mb-4">Jumpers &amp; hoodies from €35</p>
            <p>
              Rough starting prices, with no minimum order. Tell us what you
              need and we&apos;ll work out the rest.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link to="/contact" className="button button-paper">
                Contact us →
              </Link>
              <a
                href="https://wa.me/353872105305"
                target="_blank"
                rel="noreferrer"
                className="page-link"
              >
                WhatsApp us
              </a>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="mb-8">Some of our happy customers</h2>
          <div className="grid grid-cols-2 items-start gap-8 lg:grid-cols-5 lg:gap-4">
            {customers.map(({ img, alt, caption }, index) => (
              <Figure
                key={alt}
                n={firstCustomerFigureNumber + index}
                label={caption}
                italic
                className={`${printTilts[index]} ${printOffsets[index]}`}
              >
                <div className="photo-print group">
                  <img
                    src={tapes[index % tapes.length]}
                    alt=""
                    aria-hidden="true"
                    className="tape"
                  />
                  <div
                    className={`halftone ${index % 2 === 0 ? "" : "halftone-flip"}`}
                  >
                    <img
                      src={img}
                      alt={alt}
                      loading="lazy"
                      className="block aspect-4/5 w-full object-cover grayscale transition-[filter] duration-300 group-hover:grayscale-0"
                    />
                  </div>
                </div>
              </Figure>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
