import React from "react";

const Clear = (props) => {
  return <button className="clearButton" onClick={() => props.setSearchInput("")}>Clear</button>;
};

export default Clear;