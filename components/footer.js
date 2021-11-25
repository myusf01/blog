import SVG from "../components/svg_link";

export default function footer() {
  return (
    <footer className="w-full ">
      <hr className="max-w-md mx-auto border-gray-300" />
      <div className="space-y-1 text-center my-4 ">
        <span className="block">
          رَبِّ اِنّ۪ي لِمَٓا اَنْزَلْتَ اِلَيَّ مِنْ خَيْرٍ فَق۪يرٌ{" "}
        </span>
        <span className="block">
          Rabbim doğrusu bana indireceğin her hayra muhtacım.
        </span>
        <div className="max-w-xs mx-auto">
          <div className="flex justify-center items-center space-x-2 my-2">
            <SVG
              href="https://github.com/myusf01"
              src="/svg/github.svg"
              height={30}
              width={30}
            />
            <SVG
              href="https://www.instagram.com/myuusfy1/"
              src="/svg/instagram.svg"
              height={30}
              width={30}
            />
            <SVG
              href="https://www.linkedin.com/in/muhammed-yusuf"
              src="/svg/linkedin.svg"
              height={30}
              width={30}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
