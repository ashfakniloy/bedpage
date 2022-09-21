import React from "react";
import { useRouter } from "next/router";
import Layout from "../../../components/Layout";
import { countriesData } from "../../../components/data/countriesData";

function CategoryPage() {
  const router = useRouter();
  const { city } = router.query;

  const result = countriesData.map((country) =>
    country.states.map((cities) =>
      cities.cities.filter((value) => value === city && cities)
    )
  );

  return (
    <Layout>
      <div className="p-2">
        <div className=" border border-slate-400 rounded">
          <div className="flex justify-center gap-4 text-[14px]">
            <p>Auburn</p> |<p>Auburn</p> |<p>Auburn</p> |<p>Auburn</p> |
            <p>Auburn</p> |<p>Auburn</p> |
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default CategoryPage;
