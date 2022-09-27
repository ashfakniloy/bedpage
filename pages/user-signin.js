import React from "react";
import { Formik, Form } from "formik";
import Layout from "../components/Layout";
import { TextField } from "../components/common/InputField";
import { FaAt, FaLock } from "react-icons/fa";
import Link from "next/link";

function userSigninPage() {
  const initialvalues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values, formik) => {
    console.log(values);
  };

  return (
    <Layout>
      <div className="font-roboto pt-[30px] pb-[360px] flex justify-center font-thin">
        <div className="">
          <h1 className="text-center text-[32px] text-white">
            Sign in: Bedpage
          </h1>

          <div className="pt-10 pb-4">
            <Formik
              initialValues={initialvalues}
              // validationSchema={validate}
              onSubmit={handleSubmit}
            >
              {(formik) => (
                <Form>
                  <div className="flex flex-col">
                    <TextField
                      label="Email"
                      name="email"
                      type="email"
                      icon={<FaAt />}
                    />
                    <TextField
                      label="Password"
                      name="password"
                      type="password"
                      autoComplete="on"
                      icon={<FaLock />}
                    />
                    <button
                      type="submit"
                      className="button self-end mr-[60px] capitalize px-[12px] py-[7px]"
                    >
                      Sign In
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>

          <div className="flex flex-col items-center">
            <div className="lg:pr-32 text-center font-extralight text-custom-yellow2 hover:text-custom-blue2 hover:underline">
              <Link href="/user-reset">Forgot Password?</Link>
            </div>
            <p className="pt-[41px] font-extralight text-custom-yellow2">
              Don`t have an account?
            </p>

            {/* <button className="button self-end mt-4 mr-[116px] capitalize px-[13px] py-[7px]">
              Join Now
            </button> */}

            <Link href="/user-signup" passHref>
              <a>
                <button className="button ml-[180px] lg:ml-[220px] mt-4 capitalize px-[13px] py-[7px]">
                  Sign Up
                </button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default userSigninPage;