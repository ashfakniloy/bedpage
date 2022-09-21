import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { servicesData } from "../data/servicesData";

function Services() {
  const router = useRouter();
  const { city } = router.query;

  console.log(router.query);

  // console.log(city);

  // const { asPath } = useRouter();

  // const pageName = (path) =>
  //   path
  //     .substring(path.lastIndexOf("/") + 1)
  //     .split("-")
  //     .join(" ");

  // pageName(asPath);

  // console.log(pageName(asPath));

  return (
    <div className="mt-6 space-y-8 columns-3">
      {servicesData &&
        servicesData.map((service, i) => (
          <div key={i} className="break-inside-avoid">
            <div className="text-custom-yellow2 font-semibold">
              {service.name}
            </div>
            <ul className="mt-2 space-y-4">
              {service.categories &&
                service.categories.map((category, i) => (
                  <li
                    key={i}
                    className="text-[15px] ml-[18px] capitalize cursor-pointer hover:underline"
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
