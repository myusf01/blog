import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import matter from 'gray-matter'

//Components
import { mdxComponents } from '../../components/mdxComponents'
import Form from '../../components/form'
import Comments from '../../components/comments'
import findPostByPath from '../../lib/findPostByPath'
// Hooks
import useComments from '../../hooks/useComments'
import usePosts from '../../hooks/usePosts'

export default function PostPage({ post }) {
  const [comments, onSubmit, text, textSet] = useComments()
  const [posta] = usePosts()

  return (
    <div className="site-container">
      <article className='text-gray-800'>
        <h1 className="text-4xl font-bold">{post.scope.title}</h1>
        <p className="mt-5">{post.scope.excerpt}</p>
        <hr className="my-4" />
        <div className="prose">
          <MDXRemote {...post} components={mdxComponents} lazy/>
        </div>
      </article>
      <Form onSubmit={onSubmit} textSet={textSet} text={text} />
      <Comments comments={comments} />
    </div>
  )
}

export async function getServerSideProps({ params }) {
  const postPath = params.slug
  const source = await findPostByPath(postPath)
  const { content, data } = matter(source.rawSource)

  const mdxSource = await serialize(content, { scope: data })

  if (!source) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      post: mdxSource
    }
  }
}
