import React from "react";
import { Formik, Form } from "formik";
import { FaHashtag } from "react-icons/fa";
import Link from "next/link";
import { TextField, SelectField, SelectField2 } from "../common/InputField";

function BuyCredit() {
  const initialvalues = {
    payment_method: "",
    amount: "",
  };

  const handleSubmit = (values, formik) => {
    console.log(values);
  };

  return (
    <div className="font-roboto pt-[40px] pb-[260px] flex justify-center font-thin">
      <div className="">
        <h1 className="text-center text-[32px] text-white mb-3 uppercase">
          Buy Credit
        </h1>

        <div className="pt-4 pb-4 border-t border-custom-yellow2">
          <p className="text-custom-yellow2 text-center font-medium">
            Current Balance: $0
          </p>

          <p className="my-4 text-gray-800 bg-custom-blue rounded-md py-[11px] px-8 font-normal ">
            Get 20% bonus with Bitcoin (BTC).
          </p>

          <p className="my-7 text-custom-gray7 font-medium">
            <i>Minimum deposit $10</i>
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
                    label="Payment Method"
                    placeholder="Select Payment Method"
                    name="payment_method"
                    type="text"
                    options={[
                      "BNB Coin",
                      "Bitcoin BTC",
                      "Bitcoincash BCH",
                      "Etherium ETH",
                      "Litecoin LTC",
                      "USDT TRC20",
                      "PerfectMoney USD",
                      "USDC",
                      "XRP Coin",
                      "Solana SOL",
                      "DOGE Coin",
                      "Visa/Master Card (256 bit SSL)",
                    ]}
                  />

                  <TextField
                    label="Amount"
                    name="amount"
                    type="number"
                    icon={<FaHashtag />}
                  />

                  <button
                    type="submit"
                    className="button self-end mr-[90px] capitalize px-[12px] py-[7px]"
                  >
                    Next
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

export default BuyCredit;
