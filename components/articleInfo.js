export default function ArticleInfo({ title, date, excerpt }) {
    return <>
        <div className="my-6">
            <h1 className="text-4xl font-bold">{title}</h1>
            <p className="mt-5 ml-auto text-gray-400">{date}</p>
            <p className="mt-3">{excerpt}</p>
        </div>
        <hr className="my-4" />
    </>
}
