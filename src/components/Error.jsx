import React from "react";

const Error = ({ mensaje }) => {
  return (
    <div>
        <p className="msg msg-error z-depth-3 scale-transition">
          {mensaje}
        </p>
    </div>
  );
};

export default Error;
