import { getMdxNode, getMdxPaths } from "next-mdx/server";
import { useHydrate } from "next-mdx/client";
import { mdxComponents } from "../../components/mdxComponents";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";

export default function PostPage({ post }) {
  const {
    loginWithPopup,
    isAuthenticated,
    logout,
    user,
    getAccessTokenSilently,
  } = useAuth0();

  const [text, textSet] = useState("");
  const [url, urlSet] = useState(null);
  useEffect(() => {
    const url = window.location.origin + window.location.pathname;
    urlSet(url);
  }, []);
  const content = useHydrate(post, {
    components: mdxComponents,
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    const userToken = await getAccessTokenSilently();

    const response = await fetch("/api/comment", {
      method: "POST",
      body: JSON.stringify({ text, userToken, url }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
  };

  return (
    <div className="site-container">
      <article>
        <h1 className="text-4xl font-bold">{post.frontMatter.title}</h1>
        <p className="mt-5">{post.frontMatter.excerpt}</p>
        <hr className="my-4" />
        <div className="prose">{content}</div>
      </article>
      <form className="mt-10" onSubmit={onSubmit}>
        <textarea
          rows="3"
          className="border border-gray-400 w-full block p-4 rounded"
          onChange={(e) => {
            textSet(e.target.value);
          }}
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
