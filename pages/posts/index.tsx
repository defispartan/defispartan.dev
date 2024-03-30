import Link from "next/link";
import { allDocs, Doc } from "contentlayer/generated";

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
      <h1>Content</h1>
      {posts.map((post) => (
        <div key={post.slug}>
          <h2>
            <Link href={`/${post.slug}`}>{post.title}</Link>
          </h2>
        </div>
      ))}
    </div>
  );
}
