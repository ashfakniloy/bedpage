import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "../../../components/Layout";
import { countriesData } from "../../../components/data/countriesData";
import { API_URL } from "../../../config";
import Link from "next/link";

const testTitle = [
  {
    name: "Title 1",
  },
  {
    name: "Title 2",
  },
  {
    name: "Title 3",
  },
  {
    name: "Title 4",
  },
  {
    name: "Title 5",
  },
  {
    name: "Title 6",
  },
];

function CategoryPage({ data }) {
  const router = useRouter();
  const { category, city } = router.query;

  // const result = countriesData.map((country) =>
  //   country.states.map((cities) =>
  //     cities.cities.filter((value) => value === city && cities)
  //   )
  // );

  const cityName = city && city.split("_").join("/").split("-").join(" ");

  // useEffect(() => {
  //   const result =
  //     countriesData &&
  //     countriesData.map((country) =>
  //       country.states.map(
  //         (state) => state.cities.filter((ct) => ct === cityName && cityName)
  //         // map((ct) => ct.filter((value) => value === cityName))
  //         // state.cities.map((singleCity) => {
  //         //   const city = singleCity
  //         //     // .split("/")
  //         //     // .join("")
  //         //     .split("/")
  //         //     .join("_")
  //         //     .split(" ")
  //         //     .join("-")
  //         //     .split(".")
  //         //     .join("")
  //         //     .split("'")
  //         //     .join("")
  //         //     .toLowerCase();

  //         //   if (cityName === city) {
  //         //     console.log(cities);
  //         //   }
  //         // })
  //       )
  //     );

  //   console.log(result);
  // }, [cityName]);

  const categoryFiltered = category?.split("-").join(" ");

  useEffect(() => {
    const url = `${API_URL}/post/get/${city}/${category}`;
    console.log(url);
    const fetchData = async () => {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
    };

    fetchData();
  }, []);

  return (
    <Layout>
      <div className="h-[770px]">
        <h1 className="text-[32px] font-semibold">
          <span className="capitalize">{categoryFiltered}</span> in{" "}
          <span className="capitalize">{city}</span>
        </h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
          reprehenderit assumenda perferendis minima beatae placeat dolorem
          voluptate! Illo vitae eveniet ratione veniam sit eaque quasi
          repellendus fuga mollitia, nemo enim aspernatur veritatis esse
          temporibus? Amet pariatur iure libero, at fugit ratione numquam
          molestias enim laborum nihil saepe, ducimus recusandae beatae.
        </p>

        <div className="my-5">
          {testTitle.map((title, i) => (
            <div
              key={i}
              className=" odd:bg-custom-gray8 even:bg-custom-gray2 -mx-4 p-3"
            >
              <Link href="/">
                <span className=" text-custom-yellow2 hover:text-white hover:underline text-lg">
                  {title.name}
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

// export async function getServerSideProps({ query }) {
//   const { city, category } = query;
//   // console.log(city, category);
//   const url = `${API_URL}/post/get/${city}/${category}`;
//   const res = await fetch(url);

//   const data = await res.json();

//   console.log(data);

//   return {
//     props: {},
//   };
// }

export default CategoryPage;
