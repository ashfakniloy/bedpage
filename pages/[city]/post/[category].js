import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "../../../components/Layout";
import { countriesData } from "../../../components/data/countriesData";

function CategoryPage() {
  const router = useRouter();
  const { city } = router.query;

  // const result = countriesData.map((country) =>
  //   country.states.map((cities) =>
  //     cities.cities.filter((value) => value === city && cities)
  //   )
  // );

  const cityName = city && city.split("_").join("/").split("-").join(" ");

  // useEffect(() => {
  //   const result =
  //     countriesData &&
  //     countriesData.map((country) =>
  //       country.states.map(
  //         (state) => state.cities.filter((ct) => ct === cityName && cityName)
  //         // map((ct) => ct.filter((value) => value === cityName))
  //         // state.cities.map((singleCity) => {
  //         //   const city = singleCity
  //         //     // .split("/")
  //         //     // .join("")
  //         //     .split("/")
  //         //     .join("_")
  //         //     .split(" ")
  //         //     .join("-")
  //         //     .split(".")
  //         //     .join("")
  //         //     .split("'")
  //         //     .join("")
  //         //     .toLowerCase();

  //         //   if (cityName === city) {
  //         //     console.log(cities);
  //         //   }
  //         // })
  //       )
  //     );

  //   console.log(result);
  // }, [cityName]);

  return (
    <Layout>
      <div className="h-[770px]"></div>
    </Layout>
  );
}

export default CategoryPage;
