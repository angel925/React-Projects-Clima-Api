import React from "react";
import PropTypes from "prop-types";

const Error = ({ mensaje }) => {
  return (
    <div>
        <p className="msg msg-error z-depth-3 scale-transition">
          {mensaje}
        </p>
    </div>
  );
};

Error.propTypes = {
  mensaje : PropTypes.string.isRequired
}

export default Error;
