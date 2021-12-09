import Pre from './pre'
export const mdxComponents = {
  pre: ({ children }) => <Pre {...children.props} />,
  p: (props) => <p className=" text-gray-700" {...props} />,
  // h1: (props) => <h1 className="subpixel-antialiased" {...props} />
  
}
