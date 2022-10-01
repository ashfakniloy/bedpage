import Link from "next/link";
import React from "react";
import { countriesData } from "../../components/data/countriesData";
import Layout from "../../components/Layout";

function PostAdPage() {
  return (
    <Layout>
      <div className="pb-14 min-h-[760px]">
        <h1 className="text-[32px] text-center font-medium">
          Select a country
        </h1>

        <div className="columns-1 lg:columns-3">
          {countriesData.map((country, i) => (
            <h2 key={i} className="text-[24px] link">
              <Link
                href={`/post-ad/${country.name
                  .split(" ")
                  .join("-")
                  // .split(",")
                  // .join("")
                  .toLowerCase()}`}
              >
                {country.name}
              </Link>
            </h2>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default PostAdPage;
