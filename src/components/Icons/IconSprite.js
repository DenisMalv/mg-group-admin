import React from "react";
import iconssprite from "../../img/icons/icons-sprite.svg";

const Icon = ({ name, color, stroke, width, height, classlist,id, onClick,}) => (
  <svg className={classlist} id={id} color={color} stroke={stroke} width={width} height={height} onClick={onClick}>
    <use xlinkHref={`${iconssprite}#${name}`} />
  </svg>
);

export default Icon