import { getSession } from "next-auth/react";
import React from "react";
import Table from "../../components/Table";
import { adsColumn } from "../../components/Table/columns/adsColumn";
import { API_URL } from "../../config";
import useGetData from "../../hooks/useGetData";

function AdminDashboardPage({ data }) {
  // const { fetchedData } = useGetData("/post/get/dashboard");

  const posts = data?.success;

  return (
    <div className="bg-custom-gray2 h-screen text-white">
      <div className="mx-10 py-10">
        <h1 className="text-3xl">Dashboard</h1>
        <div className="my-10 ">
          {posts && <Table columnsHeading={adsColumn} usersData={posts} />}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const {
    user: { token, id },
  } = await getSession(context);
  // console.log(token, id);

  const url = `${API_URL}/post/get/dashboard/${id}`;

  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();

  // console.log(data);

  return {
    props: { data },
  };
}

export default AdminDashboardPage;
