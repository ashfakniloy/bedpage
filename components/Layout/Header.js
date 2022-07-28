import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaPaperPlane, FaSearch } from "react-icons/fa";

import Sidebar from "./Sidebar";

function Header() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <div className="bg-custom-gray4 px-2 py-2 flex justify-between items-center">
        <div className="flex gap-5">
          <div className="" onClick={() => setShowSidebar(!showSidebar)}>
            <Image
              src="/images/sidebar.png"
              alt="button"
              width={24}
              height={24}
            />
          </div>
          <div className="">
            <Link href="/login" passHref>
              <button
                type="button"
                className="bg-gradient-to-b from-custom-red3 to-red-700 border border-custom-red2 flex items-center gap-1 font-sans text-white text-sm px-3 py-1 underline rounded"
              >
                <span>
                  <FaPaperPlane />
                </span>
                Post ad
              </button>
            </Link>
          </div>
          <div className="flex items-center gap-[6px] text-sm">
            <input type="text" placeholder="keyword" className="px-2 py-1" />
            <input type="text" className="px-2 py-1" />
            <button
              type="submit"
              className="flex items-center gap-[3px] bg-gradient-to-b from-cyan-600 to-cyan-900 border border-custom-blue px-3 py-1 text-white text-sm rounded font-sans"
            >
              <span>
                <FaSearch />
              </span>
              Search
            </button>
          </div>
        </div>

        <div className="flex items-center text-white text-sm font-semibold underline">
          <p className="">Backpage Auburn | </p>
          <p className="">Auburn option | </p>
          <p className="">Options in Auburn </p>
        </div>
      </div>

      <div className="">
        {showSidebar && (
          <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        )}
      </div>
    </>
  );
}

export default Header;
