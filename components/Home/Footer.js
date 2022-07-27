import React from "react";

function Footer() {
  return (
    <div className="flex flex-col items-center gap-2 mb-2">
      <div className="flex gap-2">
        <p className="home-footer-link">Home</p>|
        <p className="home-footer-link">About us</p>|
        <p className="home-footer-link">Contact </p>|
        <p className="home-footer-link">Privacy </p>|
        <p className="home-footer-link">Terms </p>
      </div>
      <div className="flex gap-2">
        <p className="home-footer-link">Alternative to Bedpage</p>|
        <p className="home-footer-link">Website similiar to Bedpage</p>|
        <p className="home-footer-link">Best sites like Bedpage</p>|
        <p className="home-footer-link">Bedpage replacement</p>
      </div>
      <p className="text-[15px]">
        &copy; 2021 <span className="home-footer-link">bedpage.cam</span>
      </p>
    </div>
  );
}

export default Footer;
