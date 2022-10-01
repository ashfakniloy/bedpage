import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { FaGlobeAmericas } from "react-icons/fa";

function Location({ setLocationArray }) {
  const router = useRouter();
  const { selectState, selectCity, postAdForm } = router.query;

  const [countryName, setCountryName] = useState("");
  const state = selectCity?.split("-").join(" ");
  const city = postAdForm?.split("-").join(" ");

  useEffect(() => {
    const shortCountry = () => {
      switch (selectState) {
        case "united-states":
          setCountryName("US");
          break;
        case "europe":
          setCountryName("EU");
          break;
        case "africa":
          setCountryName("AF");
          break;
        case "latin-america-and-caribbean":
          setCountryName("LA&CB");
          break;
        case "asia-pacific-and-middle-east":
          setCountryName("AP&ME");
          break;
        case "canada":
          setCountryName("CA");
          break;
        case "australia-and-oceania":
          setCountryName("AU&OC");
          break;
        default:
          setCountryName("");
          break;
      }
    };

    shortCountry();

    setLocationArray([countryName, state, city]);
  }, [selectState, countryName, state, city, setCountryName, setLocationArray]);

  return (
    <div className="flex items-center gap-[93px] mb-4">
      <p>Location:</p>
      <div className="bg-slate-200 text-slate-600 px-4 py-1 flex items-center gap-1 rounded font-normal text-[15px]">
        <span className="text-base">
          <FaGlobeAmericas />
        </span>

        <p className="capitalize">
          {countryName} {">"} {state} {">"} {city}
        </p>
      </div>
    </div>
  );
}

export default Location;
