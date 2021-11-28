export default async function getGitContent() {
  let items = [];

  try {
    const response = await fetch(
      "https://api.github.com/repos/myusf01/blog/contents/content/posts",
      {
        method: "get",
        headers: {
          Authorization: "token " + process.env.GITHUB_ACCESS_KEY,
        },
      }
    );
    items = await response.json();
  } catch (_) {}

  return {
    items,
  };
}
