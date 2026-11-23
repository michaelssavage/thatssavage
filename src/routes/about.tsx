import { createFileRoute } from "@tanstack/react-router";
import { Fold } from "components/fold";
import { PageLink } from "components/page-link";

const faqs = [
  {
    question: "How much does a t-shirt/ jumper/ hoodie cost?",
    tint: "bg-lemon-yellow text-ink",
    answer:
      "As a really rough estimate, T-shirts start from €20-25 upwards while jumpers and hoodies from €35 upwards. The prices depends on many factors like how many items you want, what size of clothing, the amount of colours and type of printing you want, and how fast you need the job done among other things. Bulk orders apply and the more items you buy the lower the price will be per item of clothing. This is why it is best to get in contact for a quote.",
  },
  {
    question: "How long does a print job take?",
    tint: "bg-cobalt text-paper",
    answer:
      "If the garment you require is in stock, it may only take 1-2 days. If your order needs to be specifically ordered in, it may take up to two weeks for an order to be completed. During busy periods like Christmas shipping times can vary to That's Savage.",
  },
  {
    question: "Do you supply clothes for print?",
    tint: "bg-fluoro-pink text-ink",
    answer:
      "Of course! Discuss with us what sort of color and size clothing you want and we can order in the vast majority of garments for printing for you from our suppliers in Ireland and the UK. If you have a football jersey required for printing, its best that is supplied by the customer.",
  },
  {
    question: "Can I bring my own clothes to get printed?",
    tint: "text-ink",
    answer:
      "Absolutely, if you want to supply garments that you'd prefer printed, that's not a problem.",
  },
];

const panel = "p-8";

const title = "About | That's Savage";
const description =
  "Custom print garments and logo design from Monaghan, with over 10 years at it and no minimum order.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: AboutRoute,
});

function AboutRoute() {
  return (
    <main className="sheet">
      <header className="mt-8">
        <h1>About us</h1>
        <p className="italic">By That&apos;s Savage · Muineachán (Monaghan)</p>
        <p className="dropcap max-w-4xl text-xl">
          <b>That&apos;s Savage</b> specialize in high quality, custom print
          garments and logo design. With over 10 years experience in design and
          garment printing, we are confident that we can supply a tailor made
          print to your liking. There are no minimum order requirements meaning
          that we can print special one off garments while also catering for
          much larger orders.
        </p>
      </header>

      <section className="frame mt-8 grid bg-cobalt p-8 text-paper lg:grid-cols-12 lg:gap-8">
        <h2 className="lg:col-span-4">Meet Declan Savage</h2>
        <div className="max-w-prose lg:col-span-8">
          <p>
            Declan has been designing since university, and That&apos;s Savage
            is his own print and design studio.
          </p>
          <p className="mb-0">
            He is also head printer at{" "}
            <a
              href="https://www.derekeakinltd.com/"
              target="_blank"
              rel="noreferrer"
            >
              Derek Eakin Ltd
            </a>
            , a family-owned clothing and footwear business based in Cootehill,
            County Cavan.
          </p>
        </div>
      </section>

      <div className="grid gap-8 py-8 lg:grid-cols-12">
        <section className="lg:col-span-6">
          <h2 className="mb-8">FAQs</h2>
          <div className="flex flex-col gap-4">
            {faqs.map(({ question, tint, answer }) => (
              <Fold
                key={question}
                tint={tint}
                summary={<h3 className="mb-0">{question}</h3>}
              >
                <p className="mb-0 max-w-prose">{answer}</p>
              </Fold>
            ))}
          </div>
        </section>

        <aside className="frame grid self-start lg:col-span-6">
          <div className={panel}>
            <h2>Hot off the press</h2>
            <p className="mb-0">
              Every print is made especially for you, whether it&apos;s a single
              garment or a big batch. Put your ma&apos;s face on a t-shirt!
            </p>
          </div>

          <div className={`${panel} tile-divider-top bg-lemon-yellow`}>
            <h3>Poster prints</h3>
            <p className="mb-0">
              Not just garments. We also print posters, including our own Irish
              sayings on paper. Get in touch if you&apos;d like a poster made,
              or a custom design printed for your wall.
            </p>
          </div>

          <div className={`${panel} tile-divider-top bg-fluoro-pink`}>
            <p>
              A wealth of experience allows us to design a product, produce a
              model and manufacture a high quality garment with the most
              suitable print method.
            </p>
            <p>For more details, a visual and a quote:</p>
            <PageLink to="/contact">Get in touch</PageLink>
          </div>
        </aside>
      </div>
    </main>
  );
}
