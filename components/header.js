import Link from "next/link";
export default function header() {
  return (
    <header className="site-container py-6 font-bold text-lg">
      <nav className="space-x-4">
        <Link href="/">
          <a>About</a>
        </Link>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
      </nav>
    </header>
  );
}
