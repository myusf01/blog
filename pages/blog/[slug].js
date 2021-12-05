import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'

//Components
import { mdxComponents } from "../../components/mdxComponents";
import Form from "../../components/form";
import Comments from "../../components/comments";
import useComments from "../../hooks/useComments";
import getPostsPaths from "../../lib/getPostsPaths";
import findPostByPath from "../../lib/findPostByPath";

export default function PostPage({ post }) {
  const [comments, onSubmit, text, textSet] = useComments();
  // const content = useHydrate(post, {
  //   components: mdxComponents,
  // });

  return (
    <div className="site-container">
      <article>
        <h1 className="text-4xl font-bold">{post.scope.title}</h1>
        <p className="mt-5">{post.scope.excerpt}</p>
        <hr className="my-4" />
        <MDXRemote {...post} components={mdxComponents}/>
        {/* <div className="prose">{content}</div> */}
      </article>
      <Form onSubmit={onSubmit} textSet={textSet} text={text} />
      <Comments comments={comments} />
    </div>
  );
}

// export async function getStaticPaths() {
//   const allPaths = await getPostsPaths()
//   const paths = Promise.all(allPaths.map(async (slug)=>({params: {slug: await slug}})))
//   return {
//     paths: await paths,
//     fallback: false,
//   };
// }
 

// export async function getStaticProps({params}) {
//   const postPath = params.slug
//   const source = await findPostByPath(postPath)
  
//   const mdxSource = await serialize(source.rawData,{scope:source.frontMatter})

//   if (!source) {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: {
//       post: mdxSource,
//     },
//   };
// }
export async function getServerSideProps({params}) {
  const postPath = params.slug
  const source = await findPostByPath(postPath)
  
  const mdxSource = await serialize(source.rawData,{scope:source.frontMatter})

  if (!source) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post: mdxSource,
    },
  };
}
