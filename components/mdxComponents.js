/* eslint-disable jsx-a11y/alt-text */
import Pre from './pre'
import Image from "next/image";
export const mdxComponents = {
  pre: ({ children }) => <Pre   {...children.props} />,
  p: (props) => <p className="text-gray-700" {...props} />,
  Image
  // h1: (props) => <h1 className="subpixel-antialiased" {...props} />

}
