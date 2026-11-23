import { PageLink } from "components/page-link";

export function NotFound() {
  return (
    <main className="sheet mt-8">
      <article className="frame p-8">
        <h1>404: this page does not exist</h1>
        <PageLink to="/">Back home</PageLink>
      </article>
    </main>
  );
}
