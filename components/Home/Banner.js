import React from "react";
import Image from "next/image";
import { modelsData } from "../data/modelsData";

function Banner() {
  return (
    <div className="mb-8">
      <div className="">
        <h1 className="text-custom-yellow text-[40px] font-semibold">
          Discreet Personal Classified Website that works
        </h1>
        <p className="">
          Backpage is no more 2022 but Backpage Alternative is here. Highly
          strict to child abuse, trafficking. Nothing wrong to visit a personal
          classified for your search for a dating partner. Backpage Alternative
          (BackpageAlter.com) is much like Backpage (backpage.com) in 2022 with
          option to post ads in multiple cities and categories. Our sponsored
          posts get 10 to 100 times more response than regular posts, stay out
          of competition in personal ads.
        </p>
      </div>

      <div className="my-[15px]">
        <p className="text-center tracking-[7px] font-light text-slate-200">
          ---- cover <span className="px-[6px]"></span> stars ----
        </p>

        <div className="mt-4 flex justify-center items-center">
          {modelsData &&
            modelsData.map((model, i) => (
              <div
                key={i}
                className="border-2 border-black relative w-[100px] h-[100px]"
              >
                <Image
                  src={model.image}
                  alt={model.name}
                  layout="fill"
                  // objectFit="cover"
                />
              </div>
            ))}
        </div>
      </div>

      <div className="mt-4 flex gap-[30px]">
        <div className="">
          <p className=" text-gray-800 bg-custom-blue rounded-md py-[11px] pl-[193px] pr-[35px]">
            Post your own ad {">"} get emails and calls {">"} Select one {"> "}
            Start dating. You must be 18+
          </p>
        </div>

        <div className="">
          <button className="bg-custom-yellow3 px-[7px] py-[6px]  text-gray-800  uppercase rounded hover:bg-custom-yellow4 focus:bg-custom-yellow4 transition duration-200 focus:ring-4 ring-yellow-800">
            Post Ad Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
