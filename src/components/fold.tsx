import { ReactNode } from "react";
import { Collapsible } from "@base-ui/react/collapsible";

interface FoldProps {
  tint: string;
  summary: ReactNode;
  children: ReactNode;
}

export const Fold = ({ tint, summary, children }: FoldProps) => (
  <Collapsible.Root className="frame">
    <Collapsible.Trigger
      className={`${tint} group relative flex w-full cursor-pointer items-center gap-4 p-2 text-left hover:bg-ink hover:text-paper xs:p-4`}
    >
      <div className="flex min-w-0 flex-1 flex-col gap-4 xs:flex-row xs:items-center">
        {summary}
      </div>
      <span
        aria-hidden="true"
        className="flex size-8 shrink-0 items-center justify-center border-2 border-current font-oswald text-2xl leading-none max-xs:absolute max-xs:top-2 max-xs:right-2"
      >
        <span className="group-data-panel-open:hidden">+</span>
        <span className="hidden group-data-panel-open:inline">{"−"}</span>
      </span>
    </Collapsible.Trigger>
    <Collapsible.Panel>
      <div className="rule-hairline p-4">{children}</div>
    </Collapsible.Panel>
  </Collapsible.Root>
);
