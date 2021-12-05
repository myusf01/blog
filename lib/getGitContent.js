import matter from 'gray-matter'
import axios from 'axios'
// split posts frontMatter info from source
async function matterPost(source) {
  const { content, data } = matter(source)
  return {content,data}
}

// get source by url
async function getRawData(post) {
  const res = await axios.get(post.download_url)
  return res.data
}

async function fetchPosts() {
  const response = await axios.get(process.env.GITHUB_REPO_LINK, {
    method: 'get',
    headers: {
      Authorization: 'token ' + process.env.GITHUB_ACCESS_KEY
    }
  })
  return response.data
}

export default async function resultPost() {
  const allPosts = await fetchPosts()

  let result = await Promise.all(allPosts.map(async (post) => {
    let rawSource = await getRawData(post);
    let getMatter = await matterPost(rawSource);
    const rawData = await getMatter.content
    const frontMatter = await getMatter.data
    // let slug = post.path.replace(".mdx","").replace("content","")
    let slug = post.name.replace(".mdx","")
    return {
      name: post.name,
      path: post.path,
      slug,
      downloadUrl: post.download_url,
      rawData,
      frontMatter
    }
  }))

  return result
}

// respose.json:
// {
//   name: 'riders-of-rohan.mdx',
//   path: 'content/posts/riders-of-rohan.mdx',
//   sha: '6ab58a0b5ed56047096c4efea978346d8b27933a',
//   size: 744,
//   url: 'https://api.github.com/repos/myusf01/blog/contents/content/posts/riders-of-rohan.mdx?ref=main',
//   html_url: 'https://github.com/myusf01/blog/blob/main/content/posts/riders-of-rohan.mdx',
//   git_url: 'https://api.github.com/repos/myusf01/blog/git/blobs/6ab58a0b5ed56047096c4efea978346d8b27933a',
//   download_url: 'https://raw.githubusercontent.com/myusf01/blog/main/content/posts/riders-of-rohan.mdx',
//   type: 'file',
//   _links: {
//     self: 'https://api.github.com/repos/myusf01/blog/contents/content/posts/riders-of-rohan.mdx?ref=main',
//     git: 'https://api.github.com/repos/myusf01/blog/git/blobs/6ab58a0b5ed56047096c4efea978346d8b27933a',
//     html: 'https://github.com/myusf01/blog/blob/main/content/posts/riders-of-rohan.mdx'
//   }
// }
