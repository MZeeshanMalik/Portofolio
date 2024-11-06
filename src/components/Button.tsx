import React from "react";

function Button({
  children,
  onclick,
  className = "",
}: {
  children: React.ReactNode;
  onclick: () => void;
  className?: string;
}) {
  return (
    <div>
      <button
        onClick={onclick}
        className={`flex flex-col   text-black font-bold py-2 px-2 ${className}  p-2 rounded m-1 border-b-2 w-full`}
      >
        {children}
      </button>
    </div>
  );
}

export default Button;
