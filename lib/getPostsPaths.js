import resultPost from "./getGitContent";


export default async function getPostsPaths() {
    const allPosts = await resultPost()
    return await Promise.all(allPosts.map(async (post) => {
        return post.slug
    }))
}