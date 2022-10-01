import React from "react";
import { BsCurrencyBitcoin } from "react-icons/bs";
import { FaThLarge } from "react-icons/fa";
import UpdatePassword from "../components/Dashboard/UpdatePassword";
import UpdateProfile from "../components/Dashboard/UpdateProfile";
import Layout from "../components/Layout";

function UserProfilePage() {
  return (
    <Layout>
      <div className="flex justify-end">
        <p className="flex items-center gap-1 link uppercase">
          <span>
            <BsCurrencyBitcoin />
          </span>
          Buy Credit
        </p>
        <span className="px-1">|</span>
        <p className="flex items-center gap-1 link uppercase">
          <span>
            <FaThLarge />
          </span>
          Dashboard
        </p>
      </div>

      <UpdateProfile />
      <UpdatePassword />
    </Layout>
  );
}

export default UserProfilePage;
