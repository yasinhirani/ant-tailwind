import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import React from "react";

const Login = () => {
  return (
    <div className="flex w-full h-full flex-auto">
      <div className="w-full max-w-[30rem] mx-auto p-6 flex flex-col">
        <div className="flex justify-center items-center h-40 md:h-52">
          <figure>
            <img src="/intoxa-logo.png" alt="" />
          </figure>
        </div>
        <div className="form self-start flex-grow flex flex-col justify-between w-full mt-10">
          <div className="flex flex-col space-y-6">
            <h2 className="text-xl font-bold">Login to your account</h2>
            <Form name="basic" autoComplete="off">
              <Form.Item
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <div className="w-full border border-input-border rounded px-3 py-2.5 flex items-center space-x-2">
                  <MailOutlined />
                  <Input
                    placeholder="Email"
                    name="email"
                    className="border-0 p-0 font-semibold placeholder-input-border hover:border-r-0 focus:border-r-0 focus:shadow-none"
                  />
                </div>
              </Form.Item>
              <Form.Item
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <div className="w-full border border-input-border rounded px-3 py-2.5 flex items-center space-x-2">
                  <LockOutlined />
                  <Input.Password
                    placeholder="Password"
                    name="password"
                    className="border-0 p-0 font-semibold hover:border-r-0 hover:shadow-none focus:border-r-0 focus:shadow-none"
                  />
                </div>
              </Form.Item>
              <Form.Item
                rules={[
                  {
                    required: true,
                    message: "Please input your confirm password!",
                  },
                ]}
              >
                <div className="w-full border border-input-border rounded px-3 py-2.5 flex items-center space-x-2">
                  <LockOutlined />
                  <Input.Password
                    placeholder="Confirm Password"
                    name="password"
                    className="border-0 p-0 font-semibold hover:border-r-0 hover:shadow-none focus:border-r-0 focus:shadow-none"
                  />
                </div>
              </Form.Item>
              <div className="border border-input-border rounded p-3 mb-4">
                <h2 className="font-semibold text-lg">Terms & Conditions.</h2>
                <p className="font-semibold text-gray-500">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
              <Form.Item
                name="remember"
                valuePropName="checked"
              >
                <Checkbox><span className="font-semibold text-base">I agree to Intoxalock's Terms & Conditions.</span></Checkbox>
              </Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="bg-[#F77C0C] text-white px-4 py-2.5 text-base h-auto rounded-md border-0 font-medium w-full focus:bg-[#F77C0C] focus:shadow-none"
              >
                Sign Up
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
