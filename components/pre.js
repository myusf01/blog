import { Prism } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

const Pre = ({ children, className }) => {
  const lang = className.split("-")[1];
  const codeTagProps = {
    style: {
      fontFamily: '"JetBrains Mono", monospace'
    }

  }
  return (
    <Prism
      language={lang}
      style={atomDark}
      showLineNumbers="true"
      wrapLongLines="true"
      codeTagProps={codeTagProps}
    >
      {children}
    </Prism >
  );
};
export default Pre;
