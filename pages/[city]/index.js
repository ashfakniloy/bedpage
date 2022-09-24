import { useRouter } from "next/router";
import React, { useState, useLayoutEffect } from "react";
import Layout from "../../components/Layout";
import Services from "../../components/City/Services";
import Description from "../../components/Home/Description";

import { countriesData } from "../../components/data/countriesData";

function PostPage() {
  const [showPage, setShowPage] = useState(false);

  const router = useRouter();
  const { city: cityName } = router.query;

  if (typeof document === "undefined") {
    React.useLayoutEffect = React.useEffect;
  }

  useLayoutEffect(() => {
    // if (!router.isReady) return;

    countriesData.map((country) =>
      country.states.map((state) =>
        state.cities.map((singleCity) => {
          const city = singleCity
            // .split("/")
            // .join("")
            .split("/")
            .join("_")
            .split(" ")
            .join("-")
            .split(".")
            .join("")
            .split("'")
            .join("")
            .toLowerCase();

          if (cityName === city) {
            setShowPage(true);
          }
        })
      )
    );
  }, [cityName]);

  if (!showPage) {
    return <p className="text-black p-2">404 Noting Found</p>;
  }

  return (
    <Layout>
      <Services />
      <Description />
    </Layout>
  );
}

export default PostPage;
