import React from "react";
import { useState } from "react";

const CopyButton = ({ children, content }) => {
  const [isCopied, setIsCopied] = useState(false);
  const copyToClipboard = async () => {
    setIsCopied(true);
    const element = document.createElement("textarea");
    element.value = content;
    document.body.append(element);
    element.select();
    document.execCommand("copy");
    element.remove();
    setTimeout(() => setIsCopied(false), 1300);
  };
  return (
    <button
      onClick={copyToClipboard}
      disabled={isCopied}
      className="group-hover:block hidden px-4 py-2 rounded-lg bg-gray-50 text-black font-medium"
    >
      {isCopied ? "Copied to clipboad" : children}
    </button>
  );
};

export default CopyButton;
