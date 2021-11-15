import React from "react";

const CountryNativeName = (props) => {
  const names = () => {
    const names = [...new Set(Object.values(props.name).map(v => v.official))]
    return names.map((name,i) => <li aria-label={name} key={name+i}>{name}</li>)
  };
  return (
    <>
      <h3>Native name(s): </h3>
      <ul aria-label="native names list">
        {names()}
      </ul>
    </>
  );
};

export default CountryNativeName;