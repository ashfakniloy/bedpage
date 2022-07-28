import Link from "next/link";

function Sidebar({ showSidebar, setShowSidebar }) {
  return (
    <div className="">
      <div
        className="absolute inset-0 bg-black opacity-40"
        onClick={() => setShowSidebar(!showSidebar)}
      ></div>
      <div className="fixed top-0 left-0 shadow-lg w-[150px]">
        <div className="bg-white h-screen ">
          <div className="flex justify-center">
            <button
              type="button"
              className="my-4 bg-custom-gray4 px-7 text-white text-lg font-semibold underline rounded"
            >
              Post ad
            </button>
          </div>
          <Link href="/" passHref>
            <div className="bg-custom-gray6 py-2 text-center text-[15px] underline font-semibold cursor-pointer">
              Home
            </div>
          </Link>

          <div className="mt-6">
            <p className="text-sm font-semibold ml-2">Nearby CIties</p>
          </div>
          <div className="bg-gray-200 text-sm divide-y divide-gray-400 border-y border-gray-400 underline">
            <p className="pl-3">
              <Link href="/">Go to Home</Link>
            </p>
            <p className="pl-3">Auburn</p>
            <p className="pl-3">Birmingham</p>
            <p className="pl-3">Dothan</p>
            <p className="pl-3">Gadsden</p>
            <p className="pl-3">Huntsville</p>
            <p className="pl-3">Mobile</p>
            <p className="pl-3">Montgomery</p>
            <p className="pl-3">Muscle Shoals</p>
            <p className="pl-3">Tuscaloosa</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
