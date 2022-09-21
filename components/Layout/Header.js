import Image from "next/image";
import { FaBars } from "react-icons/fa";
// import { useState } from "react";
import MenuModal from "./MenuModal";
import useMenu from "../../hooks/useMenu";
import Link from "next/link";

function Header() {
  // const [showMenu, setShowMenu] = useState(false);

  const { showMenu, setShowMenu, node } = useMenu();

  // useEffect(() => {
  //   showMenu &&
  //     typeof window != "undefined" &&
  //     document.body.style.overflow === "hidden";
  // }, []);

  // useEffect(() => {
  //   if (showMenu) {
  //     document.body.style.overflow = "hidden";
  //   }
  //   // else {
  //   //   document.body.style.overflow = "unset";
  //   // }

  //   return () => {
  //     document.body.style.overflow = "unset";
  //   };
  // }, [showMenu]);

  return (
    <>
      <div className="flex justify-between pt-[1px]">
        <div className="">
          <Link href="/" passHref>
            <a href="">
              <h1 className="py-[7px] px-2 text-orange-400 font-serif text-4xl font-medium tracking-wide border border-gray-500 select-none">
                bedpage
                {/* backpage */}
              </h1>
            </a>
          </Link>
          {/* <Image src="/images/logo.png" alt="logo" width={176} height={60} /> */}
        </div>
        <div className="mt-2 flex justify-between gap-[211px] text-custom-yellow2 mr-[140px]">
          <div className="">
            <button className="bg-custom-yellow3 px-[7px] py-[6px]  text-gray-900 text-sm uppercase rounded hover:bg-custom-yellow4 focus:bg-custom-yellow4 transition duration-200 focus:ring-4 ring-yellow-800">
              Post Ad
            </button>
          </div>
          <div
            className="mt-[5px] text-[23px]"
            onClick={() => setShowMenu(true)}
          >
            <FaBars />
          </div>
        </div>
      </div>

      <MenuModal showMenu={showMenu} setShowMenu={setShowMenu} node={node} />
    </>
  );
}

export default Header;
