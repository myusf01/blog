import { Prism } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

const Pre = ({ children, className }) => {
  const lang = className.split("-")[1];
  return (
    <Prism
      language={lang}
      style={atomDark}
      showLineNumbers="true"
      wrapLongLines="true"
    >
      {children}
    </Prism>
  );
};
export default Pre;
