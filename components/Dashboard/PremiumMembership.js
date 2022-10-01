import React from "react";
import { Formik, Form } from "formik";
import { FaHashtag } from "react-icons/fa";
import Link from "next/link";
import { TextField, SelectField, SelectField2 } from "../common/InputField";
import { BsCurrencyBitcoin } from "react-icons/bs";

function PremiumMembership() {
  const initialvalues = {
    duration: "One Month $29.00",
  };

  const handleSubmit = (values, formik) => {
    console.log(values);
  };

  return (
    <div className="font-roboto pt-[30px] pb-[200px] flex justify-center font-thin mx-auto lg:mx-[500px]">
      <div className="">
        <h1 className="text-center text-[32px] text-white mb-3 uppercase">
          Premium Membership
        </h1>

        <div className="pt-4 pb-4 border-t border-custom-yellow2">
          <div className="flex justify-center items-center gap-1">
            <p className="text-custom-yellow2 text-center font-medium">
              You have low balance.
            </p>
            <Link href="/buy-credit" passHref>
              <a>
                <button className="button capitalize px-[12px] py-[7px] flex items-center">
                  <BsCurrencyBitcoin />
                  Buy Credit
                </button>
              </a>
            </Link>
          </div>

          <p className="my-4 text-custom-gray7 font-medium">
            <i>Your have no active subscription.</i>
          </p>

          <p className="my-4 text-gray-800 bg-custom-blue rounded-md py-[11px] pl-8 pr-6 lg:pr-16  font-normal ">
            Stay ahead of competition. Send unlimited high priority queries,
            guaranteed delivery to inbox -
          </p>

          <p className="my-7 mr-[55px] text-custom-gray7 font-medium">
            <i>
              Each message is lebeled as premium which adds more trust and
              convertibility.
            </i>
          </p>
          <Formik
            initialValues={initialvalues}
            // validationSchema={validate}
            onSubmit={handleSubmit}
          >
            {(formik) => (
              <Form>
                <div className="flex flex-col ">
                  <SelectField2
                    label="Duration"
                    placeholder="Select Duration"
                    name="duration"
                    type="text"
                    options={[
                      "One Month $29.00",
                      "Two Months $49.00",
                      "Three Months $69.00",
                      "Six Months $119.00",
                      "One Year $199.00",
                    ]}
                  />

                  <div className="my-4 flex gap-[130px] lg:gap-[230px] text-custom-gray7 font-medium">
                    <p>TOS</p>
                    <p>You agreed to terms of services.</p>
                  </div>

                  <div className="mt-5 flex flex-col lg:flex-row justify-center items-center lg:gap-[200px]">
                    <h1 className="text-[32px] text-white">
                      Bill: ${formik.values.duration.replace(/^\D+/g, "")}
                    </h1>
                    <button
                      type="submit"
                      className="button px-[12px] py-[7px] uppercase"
                    >
                      Subscribe {">>"}
                    </button>
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

export default PremiumMembership;