import React from "react";

const Square = ({ value, onClick }) => {
  const style = value ? `${value}` : `${value}`;
  return (
    <div className={style} onClick={onClick}>
      <p>{value}</p>
    </div>
  );
};

export default Square;
