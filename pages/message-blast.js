import { Form, Formik } from "formik";
import React from "react";
import { BsCurrencyBitcoin } from "react-icons/bs";
import { FaThLarge, FaDollarSign, FaClock } from "react-icons/fa";
import BuyCredit from "../components/Dashboard/BuyCredit";
import MessageBlast from "../components/Dashboard/MessageBlast";
import PremiumMembership from "../components/Dashboard/PremiumMembership";
import UpdatePassword from "../components/Dashboard/UpdatePassword";
import UpdateProfile from "../components/Dashboard/UpdateProfile";
import Layout from "../components/Layout";

function MessageBlastPage() {
  return (
    <Layout>
      <div className="flex justify-end flex-wrap">
        <p className="flex items-center gap-1 uppercase">
          <span>
            <FaDollarSign />
          </span>
          CR: $0
        </p>
        <span className="px-1">|</span>
        <p className="flex items-center gap-1 link uppercase">
          <span>
            <FaClock />
          </span>
          TRNS.
        </p>
        <span className="px-1">|</span>
        <p className="flex items-center gap-1 link uppercase">
          <span>
            <FaThLarge />
          </span>
          History
        </p>
      </div>
      {/* <Formik>
        <Form> */}
      <MessageBlast />
      {/* </Form>
      </Formik> */}
    </Layout>
  );
}

export default MessageBlastPage;
