import { getMdxNode, getMdxPaths } from "next-mdx/server";
import { useHydrate } from "next-mdx/client";
import { mdxComponents } from "../../components/mdxComponents";
import { useAuth0 } from "@auth0/auth0-react";

export default function PostPage({ post }) {
  const { loginWithPopup, isAuthenticated, logout, user } = useAuth0();
  const content = useHydrate(post, {
    components: mdxComponents,
  });

  return (
    <div className="site-container">
      <article>
        <h1 className="text-4xl font-bold">{post.frontMatter.title}</h1>
        <p className="mt-5">{post.frontMatter.excerpt}</p>
        <hr className="my-4" />
        <div className="prose">{content}</div>
      </article>
      <form className="mt-10">
        <textarea
          rows="3"
          className="border border-gray-400 w-full block p-4 rounded"
        ></textarea>
        <div className="mt-4">
          {isAuthenticated ? (
            <div className="flex items-center">
              <button className="btn-blue">Send</button>
              <img
                src={user.picture}
                width={30}
                className="rounded-full mx-2"
              />
              <span>{user.name}</span>
              <button
                type="button"
                onClick={() =>
                  logout({ returnTo: process.env.NEXT_PUBLIC_URL + "/blog" })
                }
                className="btn-red ml-auto"
              >
                {" "}
                Logout
              </button>
            </div>
          ) : (
            <div>
              <button
                className="btn-blue"
                type="button"
                onClick={() => loginWithPopup()}
              >
                {" "}
                Login
              </button>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}

export async function getStaticPaths() {
  return {
    paths: await getMdxPaths("post"),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const post = await getMdxNode("post", context);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
  };
}
