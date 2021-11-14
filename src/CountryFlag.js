import React from "react";

const CountryFlag = (props) => {
  return (
    <>
      <div>
        <img
          src={props.country[0].flags.png}
          alt={"flag of " + props.country[0].name.common} />
      </div>
    </>
  );
};

export default CountryFlag;