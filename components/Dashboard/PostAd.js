import { Formik, Form } from "formik";
import {
  FaAlignLeft,
  FaAt,
  FaComments,
  FaHashtag,
  FaLock,
} from "react-icons/fa";
import Link from "next/link";
import {
  TextField,
  SelectField,
  TextArea2,
  CheckboxField,
} from "../common/InputField";
import Location from "./Location";
import { useEffect, useState } from "react";

function PostAd() {
  const [locationArray, setLocationArray] = useState([]);
  // const [changeColor, setChangeColor] = useState(false)

  // useEffect(() => {
  //   setTimeout(() => {
  //     setChangeColor(!changeColor);
  //   });
  // }, [changeColor]);

  console.log("locationArray", locationArray);

  const initialvalues = {
    location: "",
    category: "",
    ad_title: "",
    description: "",
    email: "",
    contact_no: "",
    age: "",
    highlight_ad: "",
    blink_ad: "",
    sponsored_ad: "",
    city_featured: "",
    cover_star: "",
    total_bill: "",
  };

  const handleSubmit = (values, formik) => {
    console.log(values);
  };

  const categoryOptions = [
    "- - - Dating - - -",
    "I am Woman looking for Men",
    "I am Man looking for Women",
    "I am Man looking for Men",
    "I am Woman looking for Women",
    "I am Trans/Bi/Ladyboy",
    "- - - Adult - - -",
    "Adult Job",
    "Body Massage",
    "Escort (Female)",
    "Escort (Male)",
    "Female domination",
    "Shemale",
    "Striper for hire",
    "- - - Business - - -",
    "Antique",
    "Event",
    "Furniture",
    "HVAC",
    "Jewelry",
    "Landscape",
    "Rental",
    "- - - Health & Fitness - - -",
    "Alternative Medicine",
    "Gym",
    "Healing",
    "Recreational",
    "Suppliments",
    "YOGA/Spiritual",
    "- - - Service - - -",
    "Accounting",
    "Cleaning",
    "Dental & Doctor",
    "Legal",
    "Parlor or Salons",
    "Plumbing",
    "- - - Tech - - -",
    "Accessories",
    "Computer",
    "Crypto",
    "Fixing",
    "Gaming & Console",
    "Smartphone",
    "Software",
    "- - - Other - - -",
    "Camping Hiking",
    "Fishing Hunting",
    "Job",
    "Other",
    "Pet",
    "Room share",
    "Vehicle & Parts",
  ];

  const sponsoredAdOptions = [
    "Not Now $0.0",
    "7 days $10.00",
    "14 days $18.00",
    "30 days $30.00",
    "90 days $60.00",
  ];

  const cityFeaturedOptions = [
    "Not Now $0.0",
    "7 days $20.00",
    "14 days $36.00",
    "30 days $60.00",
    "90 days $120.00",
  ];

  const coverStarOptions = [
    "Not Now $0.0",
    "1 day $99.00",
    "7 days $499.00",
    "14 days $699.00",
  ];

  return (
    <div className="font-roboto py-2 flex justify-center font-thin">
      <div className="lg:w-[540px]">
        <h1 className="text-center text-[32px] text-white">Post an Ad</h1>

        <div className="mt-4 py-4 border-t border-gray-800/50">
          <p className="mb-4 text-custom-yellow2 font-sans font-normal">
            Not enough credit. Please
            <span className="link font-bold"> Buy Credit</span>
          </p>

          <Formik
            initialValues={initialvalues}
            // validationSchema={validate}
            onSubmit={handleSubmit}
          >
            {(formik) => (
              <Form>
                <div className="">
                  <Location setLocationArray={setLocationArray} />
                  <SelectField
                    label="Category:"
                    placeholder="Select Category"
                    name="category"
                    type="text"
                    options={categoryOptions}
                  />
                  <TextField
                    label="Ad Title"
                    name="ad_title"
                    type="text"
                    icon={<FaAlignLeft />}
                  />
                  <TextArea2
                    label="Unique description"
                    name="description"
                    type="text"
                  />
                  <TextField
                    label="Email"
                    name="email"
                    type="email"
                    icon={<FaAt />}
                  />
                  <TextField
                    label="Contact No."
                    name="contact_no"
                    type="text"
                    icon={<FaComments />}
                  />
                  <TextField
                    label="Age"
                    name="age"
                    type="number"
                    icon={<FaHashtag />}
                  />
                  <div className="grid grid-cols-3 mb-[18px]">
                    <p className="col-span-1">Approval Fees:</p>
                    <div className="col-span-2 flex items-center gap-5 lg:gap-[120px]">
                      <p className="bg-slate-200 text-slate-600 px-4 py-1 rounded font-normal text-[15px]">
                        $0.50
                      </p>
                      <CheckboxField
                        label="Highlight Ad"
                        name="highlight_ad"
                        option="chekced"
                        type="checkbox"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 mb-[18px]">
                    <p className="col-span-1">Blink Ad::</p>
                    <div className="col-span-2 flex items-center gap-2 text-[18px]">
                      <CheckboxField
                        // label="Highlight Ad"
                        name="blink_ad"
                        option="chekced"
                        type="checkbox"
                      />
                      <p className="bg-gray-800 text-white px-4 py-1 font-normal ">
                        Blink ad like this
                      </p>
                    </div>
                  </div>
                  <SelectField
                    label="Sponsored Ad:"
                    placeholder="Select Sponsored Ad"
                    name="sponsored_ad"
                    type="text"
                    options={sponsoredAdOptions}
                  />
                  <SelectField
                    label="City Featured:"
                    placeholder="Select City Featured"
                    name="city_featured"
                    type="text"
                    options={cityFeaturedOptions}
                  />
                  <SelectField
                    label="Cover Star:"
                    placeholder="Select Cover Star"
                    name="coverStarOptions"
                    type="text"
                    options={coverStarOptions}
                  />
                  <div className="grid grid-cols-3 mb-[18px]">
                    <p className="col-span-1">Total Bill:</p>
                    <div className="col-span-2 flex items-center gap-5 lg:gap-[120px]">
                      <p className="bg-slate-200 text-slate-600 px-4 py-1 rounded font-normal text-[15px]">
                        $0.50
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3">
                    <div className="col-start-2 col-span-2">
                      <button
                        type="submit"
                        className=" button capitalize px-[12px] py-[7px]"
                      >
                        Next Step {">>"} (Add Photos)
                      </button>
                      <div className="mt-3">
                        <p className="By clicking on Post Ad you agreed to"></p>
                        <p>
                          01. No Child abused. (Minimum 18, 21 is suggested).
                        </p>
                        <p>02. Not post of illegal content.</p>
                        <p>03. No sex trafficking.</p>
                        <p>04. Agreed to Payment agreement TOS.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default PostAd;
