import React from "react";

const CountryNativeName = (props) => {
  const names = () => {
    return Object.values(props.name).map((v,i) => <li key={v.official+i}>{v.official}</li>);
  };
  return (
    <>
      <h3>Native name(s): </h3>
      <ul>
        {names()}
      </ul>
    </>
  );
};

export default CountryNativeName;