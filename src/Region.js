const Region = (props) => {
  return (
    <div>
      <label htmlFor="regionSearch">Choose a Region: </label>
      <select
        name="regions"
        id="regionSearch"
        aria-label="Choose a Region for a selection of countries"
        onChange={(e) => {
          props.setRegion(e.target.value),
          props.setRegionChange(true)
        }}
        value={props.region}
      >
        <option aria-label="Africa" value="Africa">Africa</option>
        <option aria-label="Americas" value="Americas">Americas</option>
        <option aria-label="Asia" value="Asia">Asia</option>
        <option aria-label="Europe" value="Europe">Europe</option>
        <option aria-label="Oceania" value="Oceania">Oceania</option>
      </select>
    </div>
  );
};

export default Region;
