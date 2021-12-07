import resultPost from "./getGitContent";

export default async function findPostByPath(slug) {
    const allPost = await resultPost()
    const post = allPost.find(post => post.slug == slug)

    return post 
}