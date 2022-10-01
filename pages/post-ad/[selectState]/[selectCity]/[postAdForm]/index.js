import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { BsCurrencyBitcoin } from "react-icons/bs";
import { FaClock, FaDollarSign, FaThLarge } from "react-icons/fa";
import PostAd from "../../../../../components/Dashboard/PostAd";
import Layout from "../../../../../components/Layout";

function PostAdFormPage() {
  // const router = useRouter();
  // const { selectState, selectCity, postAdForm } = router.query;
  // const [countryName, setCountryName] = useState("");

  // useEffect(() => {
  //   const shortCountry = () => {
  //     switch (selectState) {
  //       case "united-states":
  //         setCountryName("US");
  //         break;
  //       case "europe":
  //         setCountryName("EU");
  //         break;
  //       case "africa":
  //         setCountryName("AF");
  //         break;
  //       case "latin-america-and-caribbean":
  //         setCountryName("LA&CB");
  //         break;
  //       case "asia,-pacific,-and-middle-east":
  //         setCountryName("AP&ME");
  //         break;
  //       case "canada":
  //         setCountryName("CA");
  //         break;
  //       case "australia-and-oceania":
  //         setCountryName("AU&OC");
  //         break;
  //       default:
  //         setCountryName("O");
  //         break;
  //     }
  //   };

  //   shortCountry();
  // }, [selectState]);

  return (
    <Layout>
      <div className="pb-20">
        <div className="flex justify-end flex-wrap">
          <p className="flex items-center gap-1 uppercase">
            <span>
              <FaDollarSign />
            </span>
            CR: $0
          </p>
          <span className="px-1">|</span>
          <p className="flex items-center gap-1 link uppercase">
            <span>
              <BsCurrencyBitcoin />
            </span>
            Buy Credit
          </p>
          <span className="px-1">|</span>
          <p className="flex items-center gap-1 link uppercase">
            <span>
              <FaThLarge />
            </span>
            Dashboard
          </p>
        </div>

        <PostAd />

        {/* <div className="font-roboto font-thin mx-auto lg:mx-[300px]">
          <h1 className="text-center text-[32px] text-white">Post an Ad</h1>
          <div className="my-4 border-t border-gray-800/50"></div>
          <p className="text-custom-yellow2 font-sans font-normal">
            Not enough credit. Please{" "}
            <span className="link font-bold">Buy Credit</span>
          </p>
        </div> */}

        {/* <p className="">
          {countryName} {">"} {selectCity} {">"} {postAdForm}
        </p> */}
      </div>
    </Layout>
  );
}

export default PostAdFormPage;
