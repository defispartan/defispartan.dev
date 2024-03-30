import { Doc } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer/hooks";
import "@/styles/Posts.module.css";

export default function Post({ doc }: { doc: Doc }) {
  const MdxContent = getMDXComponent(doc.body.code);

  return (
    <div>
      <h1>{doc.title}</h1>
      <section>
        <MdxContent />
      </section>
    </div>
  );
}
