import { Link } from "@tanstack/react-router";

export const Masthead = () => (
  <div className="sheet pt-4 pb-2">
    <Link to="/" className="masthead-link text-ink no-underline">
      <span className="masthead-word">THAT&apos;S SAVAGE</span>
    </Link>
    <p className="mt-4 mb-0 text-center italic">
      Custom garment printing, poster print, &amp; logo design ·{" "}
      <span lang="ga">Dearadh Éireannach</span> (Irish design)
    </p>
  </div>
);
