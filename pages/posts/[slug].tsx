import React from "react";
import { Doc, allDocs } from "contentlayer/generated";
import Post from "@/components/Post";
import Link from "next/link";
import { FaArrowLeft, FaHome } from "react-icons/fa";
import styles from "@/styles/Posts.module.css";

interface PageProps {
  slug: string;
  doc?: Doc;
}

interface Context {
  query: {
    slug: string;
  };
}

class Page extends React.Component<PageProps> {
  static async getInitialProps({ query }: Context) {
    const { slug } = query;
    const doc = allDocs.find((doc) => doc.slugAsParams === slug);
    if (!doc) {
      return {
        notFound: true,
      };
    }

    return { slug, doc };
  }

  render() {
    const { doc } = this.props;
    if (!doc || !doc.published) return <div>404</div>;
    return (
      <div>
        <Link href="/" className={styles.homeIcon}>
          <div className={styles.homeIcon}>
            <FaHome />
          </div>
        </Link>
        <Link href="/posts" className={`${styles.homeIcon} ${styles.backIcon}`}>
          <div className={styles.homeIcon}>
            <FaArrowLeft />
          </div>
        </Link>
        <Post doc={doc} />
      </div>
    );
  }
}

export default Page;
