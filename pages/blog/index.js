import Link from 'next/link'
// Components
import resultPost from '../../lib/getGitContent'
import HeroImage from '../../components/heroImage'

function blogPage({ posts }) {
  return (
    <div className="site-container ">
      <div className="space-y-4">
        {posts.map(post => {
          return (
            <article
              key={post.name}
              className="max-w-xl mx-auto space-y-1"
            >
              <Link href={post.path}>
                <a>
                  <HeroImage
                    frontMatter={post.frontMatter}
                    className="mx-auto rounded-xl"
                  />
                </a>
              </Link>
              <h2 className="text-2xl font-bold">
                <Link href={post.path}>
                  <a>{post.frontMatter.title}</a>
                </Link>
              </h2>
              <div className="text-gray-400">
                <span>{post.frontMatter.date}</span>
              </div>
              <p>{post.frontMatter.excerpt}</p>
            </article>
          )
        })}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {
      posts: await resultPost()
    }
  }
}
export default blogPage
