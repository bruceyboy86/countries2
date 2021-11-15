import React, { useState, useEffect } from "react";
import axios from "axios";
import Region from "./Region";
import CountryFlag from "./CountryFlag";
import CountryTitle from "./CountryTitle";
import CountryOfficialName from "./CountryOfficialName";
import PopulationDensity from "./PopulationDensity";
import JapaneseTranslation from "./JapaneseTranslation";
import CountryNativeName from "./CountryNativeName";
import FlagGridItem from "./FlagGridItem";
import Clear from "./Clear";

const CallApi = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [countries, setcountries] = useState(null);
  const [region, setRegion] = useState("Europe");
  const [searchInput, setSearchInput] = useState("");
  const [regionChange, setRegionChange] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const options = {
        method: "GET",
        url: !!searchInput
          ? `https://restcountries.com/v3.1/name/${searchInput}?fullText=true`
          : `https://restcountries.com/v3.1/all`,
      };

      setIsLoading(true);

      await axios
        .request(options)
        .then((response) => {
          setcountries(
            response.data.filter((cntry) => cntry.region === region)
          );
          setHasError(false);
          !!regionChange && setSearchInput("");
        })
        .catch(() => setHasError(true))
        .finally(() => {
          setIsLoading(false);
          setRegionChange(false);
        });
    }
    fetchData().catch(console.error);
  }, [searchInput, region, regionChange]);

  let selectedCountry = countries?.filter((c) => c.name.common === searchInput);

  return (
    <>
      <Region
        region={region}
        setRegion={setRegion}
        setRegionChange={setRegionChange}
      />
      {isLoading && <div id="spinnerContainer"><div id="spinner"></div></div>}
      {countries && (
        <>
          {!isLoading && hasError && <div>no match</div>}
          {!isLoading && searchInput && selectedCountry[0] && (
            <>
              <CountryTitle title={selectedCountry[0].name.common} />
              <CountryFlag country={selectedCountry} />
              <CountryOfficialName name={selectedCountry[0].name.official} />
              <PopulationDensity population={selectedCountry[0].population} />
              {selectedCountry[0].translations.jpn && (
                <JapaneseTranslation
                  japanese={selectedCountry[0].translations.jpn?.official}
                />
              )}
              <CountryNativeName name={selectedCountry[0].name.nativeName} />
              <Clear setSearchInput={setSearchInput} />
            </>
          )}
          {!isLoading && !searchInput && (
            <div role="region" aria-label="flag grid" id="FlagGrid">
              {countries.map((c) => {
                return (
                  <div key={c.name.common}>
                    <FlagGridItem
                      flag={c.flags.png}
                      countryName={c.name.common}
                      setSearchInput={setSearchInput}
                    />
                  </div>
                );
              })}
            </div>
          )}
        </>
      )}
    </>
  );
};

export default CallApi;
