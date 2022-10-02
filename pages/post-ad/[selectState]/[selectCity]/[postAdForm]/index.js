import Link from "next/link";
import { BsCurrencyBitcoin } from "react-icons/bs";
import { FaClock, FaDollarSign, FaThLarge } from "react-icons/fa";
import PostAd from "../../../../../components/Dashboard/PostAd";
import Layout from "../../../../../components/Layout";

function PostAdFormPage() {
  return (
    <Layout>
      <div className="pb-10">
        <div className="flex justify-end flex-wrap">
          <p className="flex items-center gap-1 uppercase">
            <span>
              <FaDollarSign />
            </span>
            CR: $0
          </p>
          <span className="px-1">|</span>
          <Link href="/buy-credit" passHref>
            <a>
              <p className="flex items-center gap-1 link uppercase">
                <span>
                  <BsCurrencyBitcoin />
                </span>
                Buy Credit
              </p>
            </a>
          </Link>
          <span className="px-1">|</span>
          <Link href="/dashboard" passHref>
            <a>
              <p className="flex items-center gap-1 link uppercase">
                <span>
                  <FaThLarge />
                </span>
                Dashboard
              </p>
            </a>
          </Link>
        </div>

        <PostAd />
      </div>
    </Layout>
  );
}

export default PostAdFormPage;
