import Pre from "./pre";

export const mdxComponents = {
  pre: ({ children }) => <Pre {...children.props} />,
};
