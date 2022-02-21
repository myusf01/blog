import Head from "next/head";
import CustomImage from "../components/customImage";

export default function HomePage() {
  return (
    <>
      <Head>
        <meta property="og:title" content="muhammed yusuf" key="ogtitle" />
        <meta property="og:url" content={`https://myusuf.net/blog`} key="ogurl" />
        <meta property="og:image" content={`https://myusuf.net/_next/image?url=/img/ben.jpg&w=1200&q=75`} key="ogimage" />
        <meta property="og:type" content="article" />
        <meta property="og:description" content="yazılım öğrenmeye çalışıyorum" key="ogdesc" />
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta name="twitter:url" content={`https://myusuf.net/blog`}></meta>
        <meta name="twitter:title" content="muhammed yusuf"></meta>
        <meta name="twitter:description" content="yazılım öğrenmeye çalışıyorum"></meta>
      </Head>
      <div className="site-container">
        <div className="space-y-4">
          <h1 className="text-2xl font-bold">merhaba ben muhammed yusuf.</h1>
          <p>deneyimlerimi paylaşmak için buradayım.</p>
          <p>
            bir miktar fotoğrafçılık, bir miktar yazılım ve bazen de tıbbi
            aciller.
          </p>
        </div>
      </div>
      <div className="site-4xl-container mt-20">
        <CustomImage source={'img/ben.jpg'} width={900} height={600} alt="it's is me" className="rounded-lg" />
      </div>
    </>
  );
}
