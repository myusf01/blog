import CustomImage from "../components/customImage";

export default function HomePage() {
  return (
    <>
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
