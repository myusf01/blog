import SVG from '../components/svgLink'

export default function footer() {
  return (
    <footer className="site-container mx-auto">
      <hr className="max-w-md mx-auto border-gray-300" />
      <div className="space-y-1 text-center my-4 ">
        <span className="block">
          رَبِّ اِنّ۪ي لِمَٓا اَنْزَلْتَ اِلَيَّ مِنْ خَيْرٍ فَق۪يرٌ{' '}
        </span>
        <span className="block">
          Rabbim doğrusu bana indireceğin her hayra muhtacım.
        </span>
        <div className="max-w-xs mx-auto">
          <div className="flex justify-center items-center space-x-2 my-2">
            <SVG
              href="https://github.com/myusf01"
              src="/svg/github.svg"
              height={20}
              width={20}
            />
            <SVG
              href="https://www.instagram.com/myuusfy1/"
              src="/svg/instagram.svg"
              height={20}
              width={20}
            />
            <SVG
              href="https://www.linkedin.com/in/muhammed-yusuf"
              src="/svg/linkedin.svg"
              height={20}
              width={20}
            />
          </div>
        </div>
      </div>
    </footer>
  )
}
