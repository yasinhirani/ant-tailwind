import {
  AlignRightOutlined,
  CloseCircleFilled,
  HomeOutlined,
} from "@ant-design/icons";
import { Button, Col, Drawer, Image, Menu, MenuProps, Row } from "antd";
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
      <Drawer placement="right" onClose={onClose} visible={visible} width={320}>
        <div className="flex flex-col justify-between h-full py-5">
          <div>
            <figure className="mb-10 flex justify-center">
              <img className="w-40" src="/intoxa-logo.png" alt="" />
            </figure>
            <div className="flex flex-col space-y-8">
              <Link to={"/"} className="flex space-x-3 items-center font-medium text-base tracking-wide">
                <figure className="w-5">
                  <Image src="/images/home.svg" preview={false} />
                </figure>
                <span>Home</span>
              </Link>
              <Link to={"/"} className="flex space-x-3 items-center font-medium text-base tracking-wide">
                <figure className="w-5">
                  <Image src="/images/group.svg" preview={false} />
                </figure>
                <span>What you need</span>
              </Link>
              <Link to={"/"} className="flex space-x-3 items-center font-medium text-base tracking-wide">
                <figure className="w-5">
                  <Image src="/images/faq.svg" preview={false} />
                </figure>
                <span>FAQs</span>
              </Link>
              <Link to={"/"} className="flex space-x-3 items-center font-medium text-base tracking-wide">
                <figure className="w-5">
                  <Image src="/images/articles.svg" preview={false} />
                </figure>
                <span>Articles</span>
              </Link>
              <Link to={"/"} className="flex space-x-3 items-center font-medium text-base tracking-wide">
                <figure className="w-5">
                  <Image src="/images/edit.svg" preview={false} />
                </figure>
                <span>Sign Up</span>
              </Link>
              <Link to={"/"} className="flex space-x-3 items-center font-medium text-base tracking-wide">
                <figure className="w-5">
                  <Image src="/images/login.svg" preview={false} />
                </figure>
                <span>Login</span>
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <Button type="text" onClick={onClose} className="text-white">
              <figure className="w-10">
                <Image src="/images/close.svg" preview={false} />
              </figure>
            </Button>
          </div>
        </div>
      </Drawer>
    </>
  );
};
export default Navbar;
