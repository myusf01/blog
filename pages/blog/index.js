import Link from 'next/link'
// Components
import resultPost from '../../lib/getGitContent'
import HeroImage from '../../components/heroImage'
import Head from "next/head";


function blogPage({ posts }) {
  return (
    <div className="site-container ">
      <Head>
        <meta property="og:title" content="muhammed yusuf" key="ogtitle" />
        <meta property="og:url" content={`https://myusuf.net/blog`} key="ogurl" />
        <meta property="og:image" content={`https://myusuf.net/_next/image?url=/img/ben.jpg&w=1200&q=75`} key="ogimage" />
        <meta property="og:type" content="article" />
        <meta property="og:description" content="yazılım öğrenmeye çalışıyorum" key="ogdesc" />
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta name="twitter:url" content={`https://myusuf.net/blog`}></meta>
        <meta name="twitter:title" content="muhammed yusuf"></meta>
        <meta name="twitter:description" content="yazılım öğrenmeye çalışıyorum"></meta>
      </Head>
      <div className="space-y-4">
        {posts.map(post => {
          return (
            <article
              key={post.name}
              className="max-w-xl mx-auto space-y-1"
            >
              <Link href="/blog/[slug]" as={`/blog/${post.slug}`}>
                <a>
                  <HeroImage
                    frontMatter={post.frontMatter}
                    className="mx-auto rounded-xl"
                  />
                </a>
              </Link>
              <h2 className="text-2xl font-bold">
                <Link href="/blog/[slug]" as={`/blog/${post.slug}`}>
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

// export async function getStaticProps() {
//   return {
//     props: {
//       posts: await resultPost()
//     }
//   }
// }
export async function getServerSideProps() {
  return {
    props: {
      posts: await resultPost()
    }
  }
}
export default blogPage
