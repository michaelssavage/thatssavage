import deantaIMuineachan from "assets/deanta-i-muineachan.png";
import { PageLink } from "components/page-link";
import { irishDate } from "utils/irish-date";

const item =
  "flex w-fit mb-2 items-center gap-2 text-paper no-underline hover:underline [&_svg]:size-6 [&_svg]:shrink-0";

const heading = "mb-4 text-lemon-yellow";

export const Footer = () => (
  <footer className="mt-16 overflow-hidden bg-ink text-paper">
    <div className="sheet py-8">
      <div className="grid gap-8 md:grid-cols-4">
        <section>
          <h3 className={heading}>Printed in Monaghan</h3>
          <a href="tel:+353872105305" className={item}>
            Call: +353 87 210 5305
          </a>
          <a href="mailto:declansavo@hotmail.com" className={item}>
            Email: declansavo@hotmail.com
          </a>
          <a
            href="https://wa.me/353872105305"
            className={item}
            target="_blank"
            rel="noreferrer"
          >
            Text: WhatsApp
          </a>
        </section>

        <section>
          <h3 className={heading}>Find us</h3>
          <a
            href="https://www.facebook.com/thatssavage"
            target="_blank"
            rel="noreferrer"
            className={item}
          >
            Facebook
          </a>
          <a
            href="https://www.instagram.com/thatssavage.print"
            target="_blank"
            rel="noreferrer"
            className={item}
          >
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/in/declan-savage-a972b424"
            target="_blank"
            rel="noreferrer"
            className={item}
          >
            LinkedIn
          </a>
        </section>

        <div className="flex flex-col items-center justify-center max-md:order-last">
          <img
            src={deantaIMuineachan}
            alt="Déanta i Muineachán (Made in Monaghan) stamp"
            className="stamp-spin size-40"
          />
        </div>

        <section>
          <h3 className={heading}>Notices</h3>
          <p className="my-2">
            Created by{" "}
            <a
              href="https://www.linkedin.com/in/liam-savage-72b532101"
              target="_blank"
              rel="noreferrer"
            >
              Liam
            </a>
            {" & "}
            <a
              href="https://www.michaelsavage.ie"
              target="_blank"
              rel="noreferrer"
            >
              Michael
            </a>
            {" & "}
            <a
              href="https://www.meganmoylan.com"
              target="_blank"
              rel="noreferrer"
            >
              Megan
            </a>
          </p>
          <p>
            Loved by{" "}
            <a
              href="https://www.instagram.com/the_jiving_strongman/?hl=en"
              target="_blank"
              rel="noreferrer"
            >
              Declan
            </a>
            {` · ${irishDate().year}`}
          </p>
          <PageLink
            to="/terms-and-conditions"
            className="mt-2 bg-paper text-ink hover:bg-lemon-yellow"
          >
            Terms & Conditions
          </PageLink>
        </section>
      </div>
    </div>
    <div className="footer-wordmark-crop" aria-hidden="true">
      <p className="footer-wordmark mb-0 text-center">SAVAGE</p>
    </div>
  </footer>
);
