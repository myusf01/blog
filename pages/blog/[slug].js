import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import matter from 'gray-matter'

//Components
import { mdxComponents } from '../../components/mdxComponents'
import Form from '../../components/form'
import CustomImage from "../../components/customImage";
import ArticleInfo from "../../components/articleInfo";
import Head from "next/head";
import Comments from '../../components/comments'
import useComments from '../../hooks/useComments'
import findPostByPath from '../../lib/findPostByPath'

export default function PostPage({ post }) {
  const [comments, onSubmit, text, textSet] = useComments()

  return (
    <>
      <Head>
        <title>muhammed yusuf - {post.scope.title}</title>
        <meta property="og:title" content={post.scope.title} key="ogtitle" />
        <meta property="og:url" content={`https://myusuf.net/${post.postPath}`} key="ogurl" />
        <meta property="og:image" content={`https://myusuf.net/_next/image?url=/${post.scope.image}&w=3840&q=75`} key="ogimage" />
        <meta property="og:type" content="article" />
        <meta property="og:description" content={post.scope.excerpt} key="ogdesc" />
        <meta name="twitter:card" content="summary_large_image"></meta>
      </Head>
      <article className='site-4xl-container '>
        <CustomImage
          source={post.scope.image}
          width={900}
          height={600}
          alt={post.scope.excerpt} />

        <div className="site-container">

          <ArticleInfo
            title={post.scope.title}
            date={post.scope.date}
            excerpt={post.scope.excerpt} />

          <div className="max-w-full prose">
            <MDXRemote {...post} components={mdxComponents} />
          </div>
        </div>
      </article>
      <div className="site-container">
        <Form onSubmit={onSubmit} textSet={textSet} text={text} />
        <Comments comments={comments} />
      </div>
    </>
  )
}

export async function getServerSideProps({ params }) {
  const postPath = params.slug
  const source = await findPostByPath(postPath)
  const { content, data } = matter(source.rawSource)

  const mdxSource = await serialize(content, {
    scope: data
  })
  const url = params
  console.log(url);
  if (!source) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      post: { postPath, ...mdxSource }

    }
  }
}
