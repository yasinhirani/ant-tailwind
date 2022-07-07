import React from "react";
import { Button, Collapse, DatePicker, Dropdown, Menu } from "antd";
import "./App.css";

const Home = () => {
    const {Panel} = Collapse;
    const menu = (
        <Menu className="mt-2"
          items={[
            {
              label: <a href="https://www.antgroup.com">1st menu item</a>,
              key: "0",
            },
            {
              label: <a href="https://www.aliyun.com">2nd menu item</a>,
              key: "1",
            },
            {
              type: "divider",
            },
            {
              label: "3rd menu item",
              key: "3",
            },
          ]}
        />
      );
    return(
        <div className="flex w-full">
      <div className="w-full max-w-[82rem] mx-auto">
        <h1 className="text-red-500 p-10 font-semibold">React</h1>
        <div className="px-10 mb-5">
            
        </div>
        <div className="px-10">
          <DatePicker className="border-input-border hover:border-input-border focus:shadow-none p-2 rounded-md" />
          <Button
            type="primary"
            className="bg-[#F77C0C] text-white px-4 py-2.5 h-auto rounded-md border-0 ml-8 font-medium w-52"
          >
            Check Your Eligibility
          </Button>
          <Dropdown overlay={menu} trigger={["click"]} placement="bottomRight">
            <button className="ml-10" onClick={(e) => e.preventDefault()}>
              <span className="bg-gray-300 px-2 py-3 rounded-full">
                WR
                {/* <DownOutlined /> */}
              </span>
              <span className="font-medium ml-2">Wallace Rice</span>
            </button>
          </Dropdown>
          <div className="my-10">
            <Collapse
              className="flex flex-col space-y-6"
              accordion
              bordered={false}
              expandIconPosition="right"
            >
              <Panel className="panel" header="Section 1" key={1}>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Laborum, suscipit?
                </p>
              </Panel>
              <Panel className="panel" header="Section 2" key={2}>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Laborum, suscipit?
                </p>
              </Panel>
              <Panel className="panel" header="Section 3" key={3}>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Laborum, suscipit?
                </p>
              </Panel>
              <Panel className="panel" header="Section 4" key={4}>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Laborum, suscipit?
                </p>
              </Panel>
            </Collapse>
          </div>
        </div>
      </div>
    </div>
    );
};
export default Home;