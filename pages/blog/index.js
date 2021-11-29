/* eslint-disable @next/next/no-img-element */
// import { getAllNodes } from "next-mdx/server";
import Link from "next/link";
// Components
import resultPost from "../../lib/getGitContent";
import HeroImage from "../../components/heroImage";

function blogPage({ posts, frontMatter }) {
  return (
    <div className="site-container ">
      <div className="space-y-4">
        {posts.map((post) => {
          return (
            <article
              key={frontMatter.name}
              className="max-w-xl mx-auto space-y-1"
            >
              <Link href={frontMatter.name}>
                <a>
                  <HeroImage
                    frontMatter={frontMatter}
                    className="mx-auto rounded-xl"
                  />
                </a>
              </Link>
              <h2 className="text-2xl font-bold">
                <Link href={post.url}>
                  <a>{frontMatter.title}</a>
                </Link>
              </h2>
              <div className="text-gray-400">
                <span>{frontMatter.date}</span>
              </div>
              <p>{frontMatter.excerpt}</p>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  console.log("data", await resultPost());

  return {
    props: {
      posts: await resultPost(),
      frontMatter: [],
    },
  };
}
export default blogPage;
