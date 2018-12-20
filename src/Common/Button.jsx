import React from "react";

const Button = ({ classes, value, name, onClick }) => {
  const cls = "btn btn-" + classes;
  return (
    <div className="col-2">
      <button className={cls} onClick={() => onClick(parseInt(value))}>
        {name}
      </button>
    </div>
  );
};

export default Button;
