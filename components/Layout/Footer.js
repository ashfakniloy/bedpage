import React from "react";

function Footer() {
  return (
    <div className=" pt-2 px-2 pb-3 bg-custom-gray6">
      <div className="flex gap-1 ml-2 text-sm text-custom-red2 underline">
        <p>Home</p>|<p>About us</p>|<p>My Account</p>|<p>Buy Credit</p>|
        <p>Contact</p>|<p>Privacy</p>|<p>Terms</p>
      </div>
      <p className="mt-1 text-[10.6667px]">
        bedpage.com is an interactive computer service that enables access by
        multiple users and should not be treated as the publisher or speaker of
        any information provided by another information content provider. &copy;
        2020{" "}
        <span className="text-custom-red2 underline cursor-pointer">
          bedpage.com
        </span>
      </p>
    </div>
  );
}

export default Footer;
