import React from "react";
import { Doc, allDocs } from "contentlayer/generated";
import Post from "@/components/Post";

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
        <Post doc={doc} />
      </div>
    );
  }
}

export default Page;
