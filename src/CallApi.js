import React, { useState, useEffect } from "react";
import axios from "axios";
import Input from "./Input";
import Region from "./Region";

const CountryFlag = (props) => {
  return (
    <>
      <div>
        <img
          src={props.country[0].flags.png}
          alt={"flag of " + props.country[0].name.common}
        />
      </div>
    </>
  );
};

const CountryTitle = (props) => {
  return <h1>{props.title}</h1>;
};

const CountryOfficialName = (props) => {
  return <h2>Official name: {props.name}</h2>;
};

const CountryNativeName = (props) => {
    const names = () => {
      return Object.values(props.name).map(v => <li>{v.official}</li>)
    }
    return (
      <>
      <h3>Native name(s): </h3>
      <ul>
        {names()}
      </ul>
    </>
  );
};

const PopulationDensity = (props) => {
  return (
    <div>population density: {props.population}</div>
  )
}

const JapaneseTranslation = (props) => {
  return (
    <div>Japanese Translation: {props.japanese}</div>
  )
}

const CallApi = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [countries, setcountries] = useState(null);
  const [region, setRegion] = useState("Europe");
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    async function fetchData() {
      const options = {
        method: "GET",
        url: !!searchInput
          ? `https://restcountries.com/v3.1/name/${searchInput}?fullText=true`
          : `https://restcountries.com/v3.1/all`
      };

      setIsLoading(true);

      await axios
        .request(options)
        .then((response) => {
          setcountries(
            response.data.filter((cntry) => cntry.region === region)
          );
          setHasError(false);
        })
        .catch(() => setHasError(true))
        .finally(() => {
          setIsLoading(false)
        });
    }
    fetchData().catch(console.error);
  }, [searchInput, region]);

  let selectedCountry = countries?.filter((c) => c.name.common === searchInput);

  return (
    <>
      <Region region={region} setRegion={setRegion} />
      {countries && (
        <>
          <Input
            searchInput={searchInput}
            countries={countries}
            setSearchInput={setSearchInput}
          />
          {!isLoading && hasError && <div>no match</div>}
          {isLoading && <div>spinner</div>}
          {searchInput && selectedCountry[0] && (
            <>
              <CountryTitle title={selectedCountry[0].name.common} />
              <CountryFlag country={selectedCountry} />
              <CountryOfficialName name={selectedCountry[0].name.official} />
              <PopulationDensity population={selectedCountry[0].population}/>
              {selectedCountry[0].translations.jpn && <JapaneseTranslation japanese={selectedCountry[0].translations.jpn?.official}/> }
              <CountryNativeName name={selectedCountry[0].name.nativeName} />
            </>
          )}

          <div>
            <p>
              {/* {countries.map(c => 
                  c.population
                )} */}
              ---a .map(c ={">"} anchor for each item, onClick sets the
              searchinput ) of filtered countries here---
            </p>
          </div>
        </>
      )}
    </>
  );
};

export default CallApi;
