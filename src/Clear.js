import React from "react";

const Clear = (props) => {
  return <button onClick={() => props.setSearchInput("")}>Clear</button>;
};

export default Clear;