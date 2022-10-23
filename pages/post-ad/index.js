import Link from "next/link";
import React from "react";
import { countriesData } from "../../components/data/countriesData";
import Layout from "../../components/Layout";

function PostAdPage() {
  return (
    <Layout>
      <div className="pb-14 min-h-[760px]">
        <h1 className="text-[32px] text-center font-medium">Post an Ad</h1>

        <div className="">
          <div className="text-[24px] flex gap-3 ">
            <p className="link">
              <Link href="/post-ad/free-ad">Post free ad</Link>
            </p>
            <span className="text-white">( Mainly free )</span>
          </div>
          <div className="text-[24px] flex gap-3 ">
            <p className="link">
              <Link href="/post-ad/local-ad">Post local ad</Link>
            </p>
            <span className="text-white">( Paid Premium And Sponsor ads )</span>
          </div>
          <div className="text-[24px] flex gap-3 ">
            <p className="link">
              <Link href="/post-ad/multiple-location-ad">
                Post in multiple cities
              </Link>
            </p>
            <span className="text-white">( Paid Premium And Sponsor ads )</span>
          </div>
        </div>
      </div>
    </Layout>
  );

  // return (
  //   <Layout>
  //     <div className="pb-14 min-h-[760px]">
  //       <h1 className="text-[32px] text-center font-medium">
  //         Select a country
  //       </h1>

  //       <div className="columns-1 lg:columns-3">
  //         {countriesData.map((country, i) => (
  //           <h2 key={i} className="text-[24px] link">
  //             <Link
  //               href={`/post-ad/${country.name
  //                 .split(" ")
  //                 .join("-")
  //                 .toLowerCase()}`}
  //             >
  //               {country.name}
  //             </Link>
  //           </h2>
  //         ))}
  //       </div>
  //     </div>
  //   </Layout>
  // );
}

export default PostAdPage;
