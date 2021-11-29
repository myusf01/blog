import { getMdxNode, getMdxPaths } from "next-mdx/server";
import { useHydrate } from "next-mdx/client";

//Components
import { mdxComponents } from "../../components/mdxComponents";
import Form from "../../components/form";
import Comments from "../../components/comments";
import useComments from "../../hooks/useComments";
import getAllPostsSlug from "../../lib/getAllPostsSlug";

export default function PostPage({ post }) {
  const [comments, onSubmit, text, textSet] = useComments();
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
      <Form onSubmit={onSubmit} textSet={textSet} text={text} />
      <Comments comments={comments} />
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
