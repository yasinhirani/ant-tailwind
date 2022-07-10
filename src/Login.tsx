import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex w-full h-full flex-auto">
      <div className="w-full max-w-[30rem] mx-auto p-6 flex flex-col">
        <div className="flex justify-center items-center h-60 lg:h-72">
          <figure>
            <img src="/intoxa-logo.png" alt="" />
          </figure>
        </div>
        <div className="form self-start flex-grow flex flex-col justify-between w-full">
          <div className="flex flex-col space-y-6">
            <h2 className="text-xl font-bold">Login to your account</h2>
            {/* <div className="w-full border border-input-border rounded px-3 py-2.5 flex items-center space-x-2">
              <MailOutlined />
              <input
                className="w-full outline-none placeholder-input-border font-semibold text-input-border"
                type="email"
                name=""
                id=""
                placeholder="Email"
              />
            </div>
            <div className="w-full border border-input-border rounded px-3 py-2.5 flex items-center space-x-2">
              <LockOutlined />
              <input
                className="w-full outline-none placeholder-input-border font-semibold text-input-border"
                type="password"
                name=""
                id=""
                placeholder="Password"
              />
            </div> */}
            <Form
              name="basic"
              autoComplete="off"
            >
              <Form.Item
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <div className="w-full border border-input-border rounded px-3 py-2.5 flex items-center space-x-2">
                  <MailOutlined />
                  <Input placeholder="Email" name="email" className="border-0 p-0 font-semibold placeholder-input-border hover:border-r-0 focus:border-r-0 focus:shadow-none" />
                </div>
              </Form.Item>
              <Form.Item
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <div className="w-full border border-input-border rounded px-3 py-2.5 flex items-center space-x-2">
                  <LockOutlined />
                  <Input.Password iconRender={(visible: boolean) => visible ? <LockOutlined /> : <MailOutlined />} placeholder="Password" name="password" className="border-0 p-0 font-semibold hover:border-r-0 hover:shadow-none focus:border-r-0 focus:shadow-none" />
                </div>
              </Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="bg-[#F77C0C] text-white px-4 py-2.5 text-base h-auto rounded-md border-0 font-medium w-full focus:bg-[#F77C0C] focus:shadow-none"
                >
                  Sign In
                </Button>
            </Form>
            <p className="text-input-border font-semibold text-center">
              <Link to={"#"} className="hover:text-input-border">
                Forgot Password?
              </Link>
            </p>
          </div>
          <div>
            <p className="font-medium text-[#75787B] text-lg text-center mb-10">
              Don't have an account?{" "}
              <Link to={"/signUp"} className="text-orange-500 hover:text-orange-500">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
