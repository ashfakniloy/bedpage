import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { countriesData } from "../../../components/data/countriesData";
import Layout from "../../../components/Layout";

function SelectStatePage() {
  const router = useRouter();
  const { selectState } = router.query;

  const stateValue = selectState && selectState.split("-").join(" ");

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

  return (
    <Layout>
      <div className="pb-14 min-h-[760px]">
        <h1 className="text-[32px] text-center font-medium">
          Select State/Territory
        </h1>

        <div className="colummns-1 lg:columns-3">
          {country?.states.map((state, i) => (
            <h2 key={i} className="text-[24px] link">
              <Link
                href={`/post-ad/${selectState}/${state.name
                  .split("/")
                  .join("_")
                  .split(" ")
                  .join("-")
                  .split(".")
                  .join("")
                  .split("'")
                  .join("")
                  .toLowerCase()}`}
              >
                {state.name}
              </Link>
            </h2>
          ))}
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

export default SelectStatePage;
