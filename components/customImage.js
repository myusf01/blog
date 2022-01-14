import Image from "next/image";
export default function CustomImage({ source, width, height, alt }) {

    return <div className="overflow-hidden rounded-2xl">
        <Image src={`/${source}`} width={width} height={height} layout='responsive' alt={alt} />
    </div>
}