import Link from "next/link";
import { allDocs, Doc } from "contentlayer/generated";
import styles from "@/styles/Posts.module.css";
import { FaHome } from "react-icons/fa";

function compareDatesDescending(a: Doc, b: Doc): number {
  const dateA = new Date(a.publishedDate as string);
  const dateB = new Date(b.publishedDate as string);

  if (dateA > dateB) return -1;
  if (dateA < dateB) return 1;
  return 0;
}

export default function ListPage() {
  const posts: Doc[] = allDocs.sort((a, b) => {
    return compareDatesDescending(a, b);
  });

  return (
    <div>
      <Link href="/" className={styles.homeIcon}>
        <div className={styles.homeIcon}>
          <FaHome />
        </div>
      </Link>
      <h1 className={styles.title}>Blog</h1>
      {posts.map((post) => (
        <div key={post.slug} className={styles.title}>
          <Link className={styles.postLink} href={`${post.slug}`}>
            {post.title}
          </Link>
        </div>
      ))}
    </div>
  );
}
