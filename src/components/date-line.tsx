import { useLocation } from "@tanstack/react-router";
import { useState } from "react";
import { irishDate } from "utils/irish-date";
import { pageNumbers } from "components/page-link";

const colourTestStrip = [
  "bg-cobalt",
  "bg-fluoro-pink",
  "bg-lemon-yellow",
  "bg-lime-green",
  "bg-ink",
];

const pageTag = (pathname: string) =>
  `P.${pageNumbers[pathname as keyof typeof pageNumbers] ?? pageNumbers["/terms-and-conditions"]}`;

export const DateLine = () => {
  const { pathname } = useLocation();
  const [folio] = useState(() => irishDate());

  return (
    <div className="rule-hairline border-t-0 border-b border-ink">
      <div className="sheet flex flex-wrap items-center justify-between gap-x-4 gap-y-1 py-2">
        <p className="label mb-0 text-ink-muted">
          <time dateTime={folio.iso}>
            <span lang="ga">{folio.ga}</span> · <span>{folio.en}</span>
          </time>
        </p>
        <div className="flex items-center gap-2">
          <div aria-hidden="true" className="test-strip">
            {colourTestStrip.map((colour) => (
              <span key={colour} className={colour} />
            ))}
          </div>
          <span className="label page-tag">{pageTag(pathname)}</span>
        </div>
      </div>
    </div>
  );
};
