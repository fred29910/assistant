import React from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css'; // Use your chosen theme

// Make sure to import the necessary languages
import 'prismjs/components/prism-python'; // or any other language you need

type CodeBlockProps = {
    code: string;
    language: string;
  };

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language }) => {
  React.useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <pre>
      <code className={`language-${language}`}>
        {code}
      </code>
    </pre>
  );
};

export default CodeBlock;
