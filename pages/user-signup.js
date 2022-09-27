import React from "react";
import { Formik, Form } from "formik";
import Layout from "../components/Layout";
import { TextField } from "../components/common/InputField";
import { FaAlignLeft, FaAt, FaLock } from "react-icons/fa";
import Link from "next/link";

function UserSignupPage() {
  const initialvalues = {
    name: "",
    email: "",
    password: "",
    retype_password: "",
  };

  const handleSubmit = (values, formik) => {
    console.log(values);
  };

  return (
    <Layout>
      <div className="font-roboto pt-[30px] pb-[50px] flex justify-center font-thin">
        <div className="">
          <h1 className="text-center text-[32px] text-white mb-3">
            Join with Bedpage
          </h1>

          <div className="pt-16 pb-4 border-t border-custom-yellow2">
            <Formik
              initialValues={initialvalues}
              // validationSchema={validate}
              onSubmit={handleSubmit}
            >
              {(formik) => (
                <Form>
                  <div className="flex flex-col ">
                    <TextField
                      label="Name"
                      name="name"
                      type="text"
                      icon={<FaAlignLeft />}
                    />
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
                    <TextField
                      label="Retype Password"
                      name="retype_password"
                      type="password"
                      autoComplete="on"
                      icon={<FaLock />}
                    />
                    <button
                      type="submit"
                      className="button self-end mr-[60px] capitalize px-[12px] py-[7px]"
                    >
                      Join Now
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>

          <div className="flex flex-col items-center">
            <p className=" text-custom-yellow2">Already have an account?</p>
            <Link href="/user-signin" passHref>
              <a>
                <button className="button  mt-4 mr-[50px] capitalize px-[13px] py-[7px]">
                  Login Now
                </button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default UserSignupPage;
