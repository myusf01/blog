import Image from "next/image";
export default function CustomImage({ source, width, height, alt, className }) {

    return <div
        className={`overflow-hidden rounded-2xl ${className}`}>
            
        <Image
            src={`/${source}`}
            width={width}
            height={height}
            layout='responsive'
            alt={alt} />
    </div>
}