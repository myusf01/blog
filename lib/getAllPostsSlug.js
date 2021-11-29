import getGitContent from "./getGitContent";

export default async function getAllPostsSlug() {
  const content = await getGitContent();
  return content.map((post) => {
    return {
      params: {
        slug: post.name.replace(".mdx", ""),
      },
    };
  });
}
