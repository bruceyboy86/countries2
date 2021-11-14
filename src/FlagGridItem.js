import React from "react";

const FlagGridItem = (props) => {
  return (
    <>
      <img
        className="flagGridItem"
        value={props.countryName}
        src={props.flag}
        alt={"flag of " + props.countryName}
        onClick={(e) => props.setSearchInput(e.target.attributes.value.value)}
      />
      {props.countryName}
    </>
  );
};

export default FlagGridItem;
