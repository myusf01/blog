/* eslint-disable @next/next/no-img-element */
import { getAllNodes } from "next-mdx/server";
import Link from "next/link";
// Components
import getGitContent from "../../components/getGitContent";
import HeroImage from "../../components/heroImage";

function blogPage({ posts, gitContent }) {
  console.log(gitContent);
  return (
    <div className="site-container ">
      <div className="space-y-4">
        {posts.map((post) => {
          return (
            <article key={post.url} className="max-w-xl mx-auto space-y-1">
              <Link href={post.url}>
                <a>
                  <HeroImage
                    frontMatter={post.frontMatter}
                    className="mx-auto rounded-xl"
                  />
                </a>
              </Link>
              <h2 className="text-2xl font-bold">
                <Link href={post.url}>
                  <a>{post.frontMatter.title}</a>
                </Link>
              </h2>
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
      gitContent: await getGitContent(),
    },
  };
}
export default blogPage;
