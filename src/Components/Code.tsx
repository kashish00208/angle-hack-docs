import React from "react";

interface CodeProps {
  children: React.ReactNode;
}

const Code: React.FC<CodeProps> = ({ children }) => {
  return (
    <pre className="bg-gray-300 text-black p-4 rounded-xl overflow-x-auto mb-4 my-4 text-sm">
      <code>{children}</code>
    </pre>
  );
};

export default Code;
