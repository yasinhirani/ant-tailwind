import {
  AlignRightOutlined,
  CloseCircleFilled,
  HomeOutlined,
} from "@ant-design/icons";
import { Button, Col, Drawer, Menu, MenuProps, Row } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  const [currentScroll, setCurrentScroll] = useState(window.pageYOffset);

  const items: MenuProps["items"] = [
    {
      label: (
        <Link to={"#"} className="flex items-center space-x-3">
          <HomeOutlined />
          <span>Home</span>
        </Link>
      ),
      key: "home",
    },
    {
      label: (
        <Link to={"#"} className="flex items-center space-x-3">
          <HomeOutlined />
          <span>What You Need</span>
        </Link>
      ),
      key: "need",
    },
    {
      label: (
        <Link to={"#"} className="flex items-center space-x-3">
          <HomeOutlined />
          <span>Articles</span>
        </Link>
      ),
      key: "articles",
    },
    {
      label: (
        <Link to={"#"} className="flex items-center space-x-3">
          <HomeOutlined />
          <span>FAQs</span>
        </Link>
      ),
      key: "faqs",
    },
  ];
  window.addEventListener("scroll", () => {
    setCurrentScroll(window.pageYOffset || document.documentElement.scrollTop);
    if (currentScroll > scrollTop) {
      setShowNavbar(true);
    } else {
      setShowNavbar(false);
    }
    // scrollTop = currentScroll;
    setScrollTop(currentScroll);
  });
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  return (
    <>
      <div
        className={`w-[100vw] bg-white shadow-md h-16 flex items-center fixed ${
          showNavbar ? "-top-16" : "top-0"
        } transition-all z-10`}
        id="navbar"
      >
        <div className="w-full max-w-[88rem] mx-auto px-6 md:px-12">
          <div className="flex justify-between items-center">
            <figure>
              <Link to={"/"}>
                <img className="w-36" src="/intoxa-logo.png" alt="" />
              </Link>
            </figure>
            <Button
              type="text"
              className="block lg:hidden"
              onClick={showDrawer}
            >
              <figure className="w-6">
                <img src="/images/hamburger.svg" alt="" />
              </figure>
            </Button>
            <div className="hidden lg:flex items-center space-x-5">
              <div className="w-[460px] flex justify-end">
                <Menu mode="horizontal" items={items} selectable={false}></Menu>
              </div>
              <div className="flex items-center space-x-4">
                <Link to={"/signUp"} className="">
                  <Button
                    type="default"
                    className="btn-signup bg-white text-black border-black px-4 py-1 h-auto rounded-md font-medium w-20"
                  >
                    Sign Up
                  </Button>
                </Link>
                <Link to={"/login"}>
                  <Button
                    type="primary"
                    className="btn-login bg-[#F77C0C] text-white px-4 py-1 h-auto rounded-md border-0 font-medium w-20"
                  >
                    Login
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Drawer placement="right" onClose={onClose} visible={visible}>
        <div className="flex flex-col items-center justify-between h-full">
          <figure>
            <img src="/intoxa-logo.png" alt="" />
          </figure>
          <Button type="text" onClick={onClose} className="text-white">
            <CloseCircleFilled />
          </Button>
        </div>
      </Drawer>
    </>
  );
};
export default Navbar;
