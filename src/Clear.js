import React from "react";

const Clear = (props) => {
  return <button onClick={() => props.setSearchInput("")}>clear button</button>;
};

export default Clear;