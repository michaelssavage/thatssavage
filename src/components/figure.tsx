import type { ReactNode } from "react";

interface FigureProps {
  n: number;
  label: string;
  italic?: boolean;
  className?: string;
  children: ReactNode;
}

export const Figure = ({
  n,
  label,
  italic = false,
  className = "",
  children,
}: FigureProps) => (
  <figure className={`m-0 flex flex-col ${className}`}>
    {children}
    <figcaption
      className={`mt-2 mb-0 ${italic ? "caption" : "label"} text-ink-muted`}
    >
      {italic ? (
        <>
          <span className="label not-italic">Fig. {n} —</span> {label}
        </>
      ) : (
        <>
          Fig. {n} — {label}
        </>
      )}
    </figcaption>
  </figure>
);
