import { Doc } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer/hooks";
import styles from "@/styles/Posts.module.css";

export default function Post({ doc }: { doc: Doc }) {
  const MdxContent = getMDXComponent(doc.body.code);

  return (
    <div>
      <h1 className={styles.title}>{doc.title}</h1>
      <div className={styles.markdownContainer}>
        <MdxContent />
      </div>
    </div>
  );
}
