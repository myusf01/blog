import Link from "next/link";

export default function SVG({ href, src, height, width }) {
  return (
    <Link href={href}>
      <a>
        <img src={src} height={height} width={width} />
      </a>
    </Link>
  );
}
