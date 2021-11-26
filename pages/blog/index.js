/* eslint-disable @next/next/no-img-element */
import { getAllNodes } from "next-mdx/server";
import Link from "next/link";
// Components
import HeroImage from "../../components/heroImage";

function blogPage({ posts }) {
  return (
    <div className="site-container ">
      <div className="space-y-4">
        {posts.map((post) => {
          return (
            <article key={post.url} className="max-w-xl mx-auto">
              <h2 className="text-xl font-bold">
                <Link href={post.url}>
                  <a>{post.frontMatter.title}</a>
                </Link>
              </h2>
              <Link href={post.url}>
                <a>
                  <HeroImage
                    frontMatter={post.frontMatter}
                    className="mx-auto"
                  />
                </a>
              </Link>
              <div className="text-gray-400">
                <span>{post.frontMatter.date}</span>
              </div>
              <p>{post.frontMatter.excerpt}</p>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      posts: await getAllNodes("post"),
    },
  };
}
export default blogPage;
