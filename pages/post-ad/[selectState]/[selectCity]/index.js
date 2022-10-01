import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { countriesData } from "../../../../components/data/countriesData";
import Layout from "../../../../components/Layout";

function SelectCityPage() {
  const router = useRouter();
  const { selectState, selectCity } = router.query;

  const stateValue = selectState && selectState.split("-").join(" ");
  const cityValue = selectCity && selectCity.split("-").join(" ");
  // const x = state.split("-").join(" ");

  // function stateValue(x) {
  //   // return x.charAt(0).toUpperCase() + x.slice(1);
  //   return x.replace(/^(.)|\s+(.)/g, (c) => c.toUpperCase());
  // }

  // console.log("query", stateValue(x));

  const country = countriesData.find(
    (country) =>
      country.name.toLowerCase() === stateValue && stateValue.toLowerCase()
  );

  const states = country?.states?.find(
    (state) => state.name.toLowerCase() === cityValue && cityValue.toLowerCase()
  );

  return (
    <Layout>
      <div className="pb-14 min-h-[760px]">
        <h1 className="text-[32px] text-center font-medium">Select a City</h1>

        <div className="columns-1 lg:columns-3">
          {states?.cities.map((city, i) => (
            <h2 key={i} className="text-[24px] link capitalize">
              <Link
                href={`/post-ad/${selectState}/${selectCity}/${city
                  .split(" ")
                  .join("-")
                  .toLowerCase()}`}
              >
                {city}
              </Link>
            </h2>
          ))}
          {/* {country?.states.map((state, i) => (
            <h2 key={i} className="text-[24px] link">
              {state.name}
            </h2>
          ))} */}
          {/* {countriesData.map((country, i) => (
            <div key={i} className="text-[24px] link">
              {country.name}
            </div>
          ))} */}
        </div>
      </div>
    </Layout>
  );
}

export default SelectCityPage;
