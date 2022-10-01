import { Formik, Form } from "formik";
import { FaAlignLeft, FaAt, FaHashtag, FaLock } from "react-icons/fa";
import Link from "next/link";
import { TextField, SelectField, SelectField2 } from "../common/InputField";
import Location from "./Location";

function PostAd() {
  const initialvalues = {
    category: "",
  };

  const handleSubmit = (values, formik) => {
    console.log(values);
  };

  const categoryOptions = [
    "- - - Dating - - -",
    "I am Woman looking for Men",
    "I am Man looking for Women",
  ];

  return (
    <div className="font-roboto py-2 flex justify-center font-thin">
      <div className="">
        <h1 className="text-center text-[32px] text-white">Post an Ad</h1>

        <div className="mt-4 py-4 border-t border-gray-800/50">
          <p className="mb-4 text-custom-yellow2 font-sans font-normal">
            Not enough credit. Please
            <span className="link font-bold"> Buy Credit</span>
          </p>

          <Location />

          <Formik
            initialValues={initialvalues}
            // validationSchema={validate}
            onSubmit={handleSubmit}
          >
            {(formik) => (
              <Form>
                <div className="flex flex-col ">
                  <SelectField2
                    label="Category:"
                    placeholder="Select Category"
                    name="category"
                    type="text"
                    options={categoryOptions}
                  />
                  {/* <TextField
                    label="Name"
                    name="name"
                    type="text"
                    icon={<FaAlignLeft />}
                  /> */}
                  {/* <TextField
                    label="Email"
                    name="email"
                    type="email"
                    icon={<FaAt />}
                  />

                  <TextField
                    label="Age"
                    name="age"
                    type="text"
                    icon={<FaHashtag />}
                  /> */}
                  <button
                    type="submit"
                    className="button self-end lg:self-center lg:ml-[10px] capitalize px-[12px] py-[7px]"
                  >
                    Next Step {">>"} (Add Photos)
                  </button>
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
