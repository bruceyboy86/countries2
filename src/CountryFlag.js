import React from "react";

const CountryFlag = (props) => {
  return (
    <figure>
      <img
        aria-label={"flag of " + props.country[0].name.common}
        alt={"flag of " + props.country[0].name.common}
        src={props.country[0].flags.png}
      />
    </figure>
  );
};

export default CountryFlag;
