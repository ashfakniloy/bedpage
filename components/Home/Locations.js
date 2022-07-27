import React from "react";
import Link from "next/link";
import { countriesData } from "../data/countriesData";
// import { countriesData } from "../data/countriesData";

function Locations() {
  return (
    <div className="container mt-4">
      <div className="my-2">
        <input
          type="text"
          placeholder="Search Cities"
          className="w-full py-2 px-8 outline-none border focus:border-white focus:ring-2 focus:ring-black focus:rounded-sm"
        />
      </div>

      <div className="mt-3 px-1 space-y-4 columns-2 gap-4">
        {countriesData &&
          countriesData.map((country, i) => (
            <div key={i} className="break-inside-avoid">
              <div className="bg-black p-[5px] text-white text-2xl font-semibold rounded">
                {country.name}
              </div>
              <div className="mt-2 space-y-4 columns-3">
                {country.states &&
                  country.states.map((state, i) => (
                    <div key={i} className="break-inside-avoid">
                      <div className="">
                        <p className="text-custom-red font-semibold">
                          {state.name}
                        </p>
                        <div className="mt-1 space-y-2">
                          {state.cities &&
                            state.cities.map((city, i) => (
                              <div key={i} className="ml-2">
                                <Link
                                  href={city
                                    .split("/")
                                    .join("")
                                    .split(" ")
                                    .join("-")
                                    .split(".")
                                    .join("")
                                    .toLowerCase()}
                                  passHref
                                >
                                  <p className="text-[15px] link capitalize">
                                    {/* {city.replace(/-/g, " ")} */}
                                    {city.split("-").join(" ")}
                                  </p>
                                </Link>
                              </div>
                            ))}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Locations;
