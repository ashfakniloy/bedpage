import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";

function Header() {
  return (
    <div className="container py-2 px-1">
      <div className=" flex justify-between items-center">
        <div className="">
          {/* <h1 className="text-4xl">logo</h1> */}
          <Image src="/images/logo.png" alt="logo" width={148} height={40} />
        </div>
        <div className="link">
          <Link href="#">Login / Signup</Link>
        </div>
      </div>

      <div className="mt-4 text-sm font-semibold">
        <Marquee speed={60} gradient={false}>
          Great news! 100% bonus on Add Credit
        </Marquee>
      </div>

      <div className="flex justify-between items-start border-b-2 border-black">
        <p className="text-sm font-semibold text-black">Choose a location:</p>
        <p className="text-lg font-semibold text-custom-gray4 underline hover:no-underline">
          <Link href="#">post ad</Link>
        </p>
      </div>
    </div>
  );
}

export default Header;
