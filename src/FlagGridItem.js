import React from "react";

const FlagGridItem = (props) => {
  return (
    <figure>
      <img
        className="flagGridItem"
        value={props.countryName}
        src={props.flag}
        alt={props.countryName}
        onClick={(e) => props.setSearchInput(e.target.attributes.value.value)}
      />
      <figcaption>{"flag of " + props.countryName}</figcaption>
    </figure>
  );
};

export default FlagGridItem;