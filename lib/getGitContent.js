import matter from 'gray-matter'
import axios from 'axios'
// split posts frontMatter info from source
async function getFrontMatter(source) {
  const { content, data } = matter(source)
  return data
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
    let rawData = await getRawData(post);
    let frontMatter = await getFrontMatter(rawData);
    let path = post.path.replace(".mdx","").replace("content","")
    return {
      name: post.name,
      path,
      downloadUrl: post.download_url,
      rawData,
      frontMatter
    }
  }))
  // allPosts.forEach(async (post) => {
  //   let rawData = await getRawData(post);
  //   let frontMatter = await getFrontMatter(rawData);
  //   // console.log({ rawData, frontMatter });
  //   let postObj = {
  //     name: post.name,
  //     path: post.path,
  //     downloadUrl: post.download_url,
  //     rawData,
  //     frontMatter,
  //   };
  //   console.log(postObj);
  //   return result.push(postObj);
  // });
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
