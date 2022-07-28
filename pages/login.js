import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";

function login() {
  return (
    <div className="h-screen bg-custom-gray6">
      <Layout>
        <div className="bg-white">
          <p className="text-sm">
            <span className="text-custom-red2 underline">
              <Link href="/">Home</Link>
            </span>{" "}
            {">"} Login / Sign up{" "}
          </p>
          <div className="flex justify-center pt-2 pb-20">
            <div className="space-y-3">
              <div className="">
                <Image
                  src="/images/logo.png"
                  alt="logo"
                  width={178}
                  height={47}
                />
              </div>
              <div className="">
                <h4 className="text-[21px] font-bold text-center">
                  Login / Signup
                </h4>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default login;
