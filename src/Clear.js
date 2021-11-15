import React from "react";

const Clear = (props) => {
  return <button aria-label="clear the search" className="clearButton" onClick={() => props.setSearchInput("")}>Clear</button>;
};

export default Clear;