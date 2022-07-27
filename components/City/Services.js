import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { servicesData } from "../data/servicesData";

function Services() {
  const router = useRouter();
  const { city } = router.query;

  return (
    <div className="p-2 space-y-4 columns-4 font-arial">
      {servicesData &&
        servicesData.map((service, i) => (
          <div key={i} className="break-inside-avoid">
            <div className="bg-black px-3 text-white font-semibold rounded-full">
              {service.name}
            </div>
            <ul className="mt-2 ml-10 space-y-4 list-disc">
              {service.categories &&
                service.categories.map((category, i) => (
                  <li
                    key={i}
                    className="text-[15px] capitalize underline cursor-pointer"
                  >
                    <Link
                      href={`/${city}/post/${category
                        .split("/")
                        .join("")
                        .split(" ")
                        .join("-")
                        .split(".")
                        .join("")
                        .toLowerCase()}`}
                    >
                      {category}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        ))}
    </div>
  );
}

export default Services;
