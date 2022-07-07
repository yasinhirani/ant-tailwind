import { HomeOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full bg-white shadow-lg h-16 flex items-center">
      <div className="w-full max-w-[85rem] mx-auto px-12">
        <div className="flex justify-between items-center">
          <figure>
            <Link to={"/"}>
              <img className="w-36" src="/intoxa-logo.png" alt="" />
            </Link>
          </figure>
          <Menu mode="horizontal" className="w-auto hidden md:flex">
            <Menu.Item icon={<HomeOutlined />}>Home</Menu.Item>
            <Menu.Item icon={<HomeOutlined />}>What You Need</Menu.Item>
            <Menu.Item icon={<HomeOutlined />}>Articles</Menu.Item>
            <Menu.Item icon={<HomeOutlined />}>FAQs</Menu.Item>
          </Menu>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
