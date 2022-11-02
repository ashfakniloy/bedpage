import React from "react";
import Layout from "../components/Layout";
import useGetData from "../hooks/useGetData";

function MyAdsPage() {
  // const { fetchedData } = useGetData("/post/get/dashboard");

  // console.log("fetched", fetchedData);

  return (
    <Layout>
      <div className="font-roboto pb-[700px] font-thin">
        <h1 className="text-center text-[32px] text-white mb-1 uppercase">
          MY ADS
        </h1>
        <div className="flex gap-10 lg:gap-0 justify-between  font-semibold uppercase tracking-wider text-[15px]">
          <div className="flex flex-wrap gap-[6px]">
            <p className="link">Dating</p>
            <span> | </span>
            <p className="link">Men</p>
            <span> | </span>
            <p className="link">Business</p>
            <span> | </span>
            <p className="link">Health</p>
            <span> | </span>
            <p className="link">Service</p>
            <span> | </span>
            <p className="link">Tech</p>
            <span> | </span>
            <p className="link">Others</p>
          </div>
          <div className="lg:pr-[230px] ">Bill</div>
        </div>
      </div>
    </Layout>
  );
}

export default MyAdsPage;
