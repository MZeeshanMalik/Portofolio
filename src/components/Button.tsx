import React from "react";

function Button({
  children,
  onclick,
}: {
  children: React.ReactNode;
  onclick: () => void;
}) {
  return (
    <div>
      <button
        onClick={onclick}
        className="flex flex-col  text-black font-bold py-2 px-2  p-2 rounded m-1 border-b-2 w-full "
      >
        {children}
      </button>
    </div>
  );
}

export default Button;
