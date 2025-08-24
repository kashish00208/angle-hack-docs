import React from "react";

interface CodeProps {
  children: React.ReactNode;
}

const Code: React.FC<CodeProps> = ({ children }) => {
  return (
    <pre className="bg-gray-100 text-white p-4 rounded-xl overflow-x-auto mb-4">
      <code>{children}</code>
    </pre>
  );
};

export default Code;
