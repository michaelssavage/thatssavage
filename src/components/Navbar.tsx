import { Link, useLocation } from "@tanstack/react-router";
import { DateLine } from "components/date-line";
import { Masthead } from "components/masthead";

const contents = [
  { name: "Home", link: "/", tint: "bg-ink text-paper" },
  { name: "Prints", link: "/prints", tint: "bg-cobalt text-paper" },
  { name: "About", link: "/about", tint: "bg-fluoro-pink text-ink" },
  { name: "Contact", link: "/contact", tint: "bg-lemon-yellow text-ink" },
] as const;

const Rule = () => (
  <div className="sheet" aria-hidden="true">
    <div className="rule-double" />
  </div>
);

export const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <>
      <header>
        <DateLine />
        <Masthead />
      </header>
      <Rule />
      <nav aria-label="Contents" className="sheet py-2">
        <ul className="m-0 grid list-none grid-cols-2 border-t border-l border-ink p-0 md:grid-cols-4">
          {contents.map(({ name, link, tint }) => (
            <li key={link} className="border-r border-b border-ink">
              <Link
                to={link}
                aria-current={pathname === link ? "page" : undefined}
                className={`label flex min-h-12 items-center justify-center no-underline aria-[current=page]:underline aria-[current=page]:decoration-2 aria-[current=page]:underline-offset-4 hover:underline ${tint}`}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <Rule />
    </>
  );
};
