import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-footer-light">
        <div className="w-full max-w-[88rem] mx-auto px-6 md:px-12 py-10 flex flex-col md:flex-row justify-between items-start md:space-x-20 space-y-4 md:space-y-0">
          <div className="space-y-4 whitespace-nowrap">
            <p className="text-white font-medium text-base tracking-widest">
              Privacy Policy
            </p>
            <p className="text-white font-medium text-base tracking-widest">
              Terms of Use
            </p>
          </div>
          <div className="space-y-4 whitespace-nowrap">
            <p className="text-white font-medium text-base tracking-widest">
              Short Code
            </p>
            <p className="text-white font-medium text-base tracking-widest">
              Campaign Sitemap
            </p>
          </div>
          <div>
            <p className="text-white font-medium">
              Intoxalock® is a registered trademark of Intoxalock. All other
              trademarks are property of their respective owners.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-footer-dark">
        <div className="w-full max-w-[88rem] mx-auto px-6 md:px-12 py-5">
          <p className="text-white font-medium">©Copyright Intoxalock® 2022. All Rights Reserved.</p>
        </div>
      </div>
    </>
  );
};
export default Footer;
