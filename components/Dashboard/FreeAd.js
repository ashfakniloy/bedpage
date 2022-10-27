import { Formik, Form, useFormikContext } from "formik";
import {
  FaAlignLeft,
  FaAt,
  FaComments,
  FaHashtag,
  FaLock,
  FaTimes,
} from "react-icons/fa";
import Link from "next/link";
import {
  TextField,
  SelectField,
  TextArea2,
  CheckboxField,
  FileField,
} from "../common/InputField";
import Location from "./Location";
import { useEffect, useState, useRef } from "react";
import { countriesData } from "../data/countriesData";
import Image from "next/image";
import ImageUpload from "./ImageUpload";
import usePostData from "../../hooks/usePostData";

function FreeAd({ formTitle, services }) {
  const [locationArray, setLocationArray] = useState([]);
  const [changeColor, setChangeColor] = useState(false);

  // const formikRef = useRef();

  // console.log(formikRef);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setChangeColor(!changeColor);
  //   }, 500);

  //   return () => clearInterval(interval);
  // });
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);

  const initialvalues = {
    // location: locationArray,
    country: "",
    state: "",
    city: "",
    service: "",
    category: "",
    ad_title: "",
    description: "",
    email: "",
    contact_no: "",
    age: "",
    // images: selectedFiles,
    images: "",
  };

  // const handleSubmit = (values, formik) => {
  //   // const data = values.images;
  //   // console.log([...data.entries()]);
  //   console.log(values);
  // };

  const { postData } = usePostData();

  const handleSubmit = (values, formik) => {
    postData(values, formik);
  };

  const handleImageChange = (e, formik) => {
    // e.preventDefault();
    // setSelectedFiles(e.target.files);
    setImagesPreview(e.target.files);

    let formData = new FormData();
    // formData.append("category", category);
    Array.from(e.target.files).forEach((item) =>
      formData.append("image", item)
    );
    formik.setFieldValue("images", formData);

    // console.log(formData);
    console.log([...formData.entries()]);
  };

  const handleImageDelete = (i, formik) => {
    const updatedImages = Array.from(formik.values.images).filter(
      (item, index) => index !== i
    );
    // formData.append("category", category);
    // setSelectedFiles(updatedImages);
    let formData = new FormData();
    Array.from(updatedImages).forEach((item) => formData.append("image", item));
    formik.setFieldValue("images", formData);

    const updatedPreview = Array.from(imagesPreview).filter(
      (item, index) => index !== i
    );
    setImagesPreview(updatedPreview);
    // formik.setFieldValue("images", updatedImages);
  };

  // const renderImages = (source, formik) => {
  //   return Array.from(source).map((image, i) => {
  //     return (
  //       <div key={i} className="relative">
  //         <Image
  //           className="p-2"
  //           src={image ? URL.createObjectURL(image) : null}
  //           width={100}
  //           height={100}
  //         />
  //         <span
  //           className="absolute top-1 right-1 bg-white border border-slate-700 p-[2px] rounded-full text-slate-700 shadow-lg text-[15px]"
  //           onClick={() => handleImageDelete(i, formik)}
  //         >
  //           <FaTimes />
  //         </span>
  //       </div>
  //     );
  //   });
  // };

  const serviceOptions = services.map((category) => category?.name);

  const categoryOptions = (value) => {
    if (!value) {
      return ["- - - Select Service First - - -"];
    }
    const filteredServices = services.find((service) => service.name === value);
    const filteredCAtegories = filteredServices?.categories?.map(
      (category) => category
    );
    return filteredCAtegories;
  };

  const countriesSelect = countriesData.map((country, i) => [country.name]);

  const statesSelect = (values) => {
    const { country: countryValue } = values && values;
    if (!countryValue) {
      return ["- - - Select Country First - - -"];
    }
    const country = countriesData.find(
      (country) => country.name === countryValue
    );
    const states = country?.states?.map((state) => state.name);
    return states;
  };

  const citySelect = (values) => {
    const { country: countryValue, state: stateValue } = values && values;

    if (!stateValue) {
      return ["- - - Select State First - - -"];
    }
    const countries = countriesData?.find(
      (country) => country.name === countryValue
    );

    const citiesValues = countries?.states?.find(
      (state) => state.name === stateValue
    );
    const cities = citiesValues?.cities?.map((city) => city);
    return cities;
    // }
  };

  return (
    <div className="font-roboto py-2 flex justify-center font-thin overflow-hidden">
      <div className="lg:w-[540px]">
        <h1 className="text-center text-[32px] text-white">
          {formTitle && formTitle}
        </h1>

        <div className="mt-4 py-4 border-t border-gray-800/50">
          <p className="mb-4 text-custom-yellow2 font-sans font-normal">
            Not enough credit. Please
            <span className="link font-bold"> Buy Credit</span>
          </p>

          <Formik
            // innerRef={formikRef}
            initialValues={initialvalues}
            // validationSchema={validate}
            // enableReinitialize
            onSubmit={handleSubmit}
          >
            {(formik) => (
              <Form>
                <div className="">
                  {/* <Location setLocationArray={setLocationArray} /> */}
                  <SelectField
                    label="Country"
                    placeholder="Select Country"
                    name="country"
                    type="text"
                    options={countriesSelect}
                  />
                  <SelectField
                    label="State"
                    placeholder="Select State"
                    name="state"
                    type="text"
                    options={statesSelect(formik.values)}
                  />
                  <SelectField
                    label="City"
                    placeholder="Select City"
                    name="city"
                    type="text"
                    options={citySelect(formik.values)}
                  />
                  <SelectField
                    label="Service:"
                    placeholder="Select Service"
                    name="service"
                    type="text"
                    options={serviceOptions}
                  />
                  <SelectField
                    label="Category:"
                    placeholder="Select Category"
                    name="category"
                    type="text"
                    options={categoryOptions(formik.values.service)}
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
                    <div className="">
                      <label htmlFor="images">Images </label>
                      <p className="text-xs">(Maximum 4 images)</p>
                    </div>

                    <div className="col-span-2">
                      <ImageUpload />
                    </div>
                  </div>

                  <div className="grid grid-cols-3">
                    <div className="col-start-2 col-span-2">
                      <button
                        type="submit"
                        className=" button capitalize px-[12px] py-[7px]"
                      >
                        Post Ad
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

export default FreeAd;
