import Pre from './pre'
import Image from "next/image";
export const mdxComponents = {
  pre: ({ children }) => <Pre   {...children.props} />,
  p: (props) => <p className="text-gray-700" {...props} />,
  img: (props) => <Image {...props} layout="responsive" loading="lazy" />
  // h1: (props) => <h1 className="subpixel-antialiased" {...props} />

}
