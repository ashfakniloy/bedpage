import React from "react";
import { Formik, Form } from "formik";
import Layout from "../components/Layout";
import { TextField } from "../components/common/InputField";
import { FaAt, FaLock } from "react-icons/fa";
import Link from "next/link";

function UserResetPage() {
  const initialvalues = {
    email: "",
  };

  const handleSubmit = (values, formik) => {
    console.log(values);
  };

  return (
    <Layout>
      <div className="font-roboto pt-[30px] pb-[350px] flex justify-center font-thin">
        <div className="">
          <h1 className="text-center text-[32px] text-white mb-3">
            RESET PASSWORD
          </h1>

          <div className="pt-16 pb-4 border-t border-custom-yellow2">
            <p className="text-custom-yellow2 font-normal mb-7">
              We will send you a CODE via email.
            </p>
            <Formik
              initialValues={initialvalues}
              // validationSchema={validate}
              onSubmit={handleSubmit}
            >
              {(formik) => (
                <Form>
                  <div className="flex flex-col">
                    <TextField
                      label="Your Email"
                      name="email"
                      type="email"
                      icon={<FaAt />}
                    />
                    <button
                      type="submit"
                      className="button self-end mr-[60px] px-[14px] py-[7px] uppercase"
                    >
                      Get Code
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default UserResetPage;
