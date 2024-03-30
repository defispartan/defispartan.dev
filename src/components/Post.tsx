import { Doc } from "contentlayer/generated";

export default function Post({ doc }: { doc: Doc }) {
  return (
    <article>
      <h1>{doc.title}</h1>
      <div>{doc.description}</div>

      <div dangerouslySetInnerHTML={{ __html: doc.body.raw }} />
    </article>
  );
}
