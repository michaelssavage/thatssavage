import { Link, type LinkProps } from "@tanstack/react-router";

export const pageNumbers = {
  "/": 1,
  "/prints": 2,
  "/about": 3,
  "/contact": 4,
  "/terms-and-conditions": 5,
} as const;

interface PageLinkProps {
  to: keyof typeof pageNumbers;
  children: string;
  className?: string;
}

export const PageLink = ({ to, children, className = "" }: PageLinkProps) => (
  <Link
    to={to as LinkProps["to"]}
    className={`page-link ${className}`}
  >
    {children}, P.{pageNumbers[to]}
  </Link>
);
