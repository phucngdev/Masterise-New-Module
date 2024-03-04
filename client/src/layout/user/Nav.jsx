import React, { useState } from "react";
import { Button, Checkbox, Input, Radio, Select } from "antd";

const options = [
  {
    label: "1",
    value: 1,
  },
  {
    label: "2",
    value: 2,
  },
  {
    label: "3",
    value: 3,
  },
  {
    label: "4",
    value: 4,
  },
  {
    label: "5+",
    value: 5,
  },
];
const optionsType = [
  {
    value: "jack",
    label: "Jack",
  },
  {
    value: "lucy",
    label: "Lucy",
  },
  {
    value: "Yiminghe",
    label: "yiminghe",
  },
  {
    value: "disabled",
    label: "Disabled",
  },
];

const Nav = () => {
  const onChange = (checkedValues) => {
    console.log("checked = ", checkedValues);
  };
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <>
      <div className="fixed top-[60px] left-0 bg-white bottom-0 w-[25%] flex flex-col px-10 py-7">
        <div className="flex flex-col">
          <h3 className="text-2xl font-semibold text-black">Recommended</h3>
          <div className="flex items-center flex-wrap gap-2 mt-4">
            <Button type="primary" className="bg-blue-500 rounded-full">
              Modern
            </Button>
            <Button type="primary" className="bg-blue-500 rounded-full">
              Lake Villa
            </Button>
            <Button type="primary" className="bg-blue-500 rounded-full">
              Flat
            </Button>
            <Button type="primary" className="bg-blue-500 rounded-full">
              Homestay
            </Button>
            <Button type="primary" className="bg-blue-500 rounded-full">
              Comping
            </Button>
            <Button type="primary" className="bg-blue-500 rounded-full">
              Luxury House
            </Button>
          </div>
          <div className="my-4">
            <div className="flex items-center justify-between text-black font-medium mb-4">
              <span>Filter</span>
              <button>Reset</button>
            </div>
            <Input
              placeholder="Enter address"
              className="py-2 border border-black"
            />
          </div>
          <div className="mb-4">
            <div className="flex items-center justify-between text-black font-medium mb-4">
              <span>Type room</span>
            </div>
            <Select
              defaultValue="lucy"
              className="w-full rounded-md border border-black"
              onChange={handleChange}
              options={optionsType}
            />
          </div>
          <div className="mb-4">
            <span className="text-black font-medium ">Price range</span>
            <div className="flex items-center justify-between gap-2 mt-4">
              <Input
                placeholder="$ From"
                className="py-2 border border-black"
              />
              <Input placeholder="$ To" className="py-2 border border-black" />
            </div>
          </div>
          <div className="mb-4">
            <span className="text-black font-medium ">Number of rooms</span>
            <div className="flex items-center justify-center mt-4">
              <Checkbox.Group
                options={options}
                defaultValue={["Pear"]}
                onChange={onChange}
              />
            </div>
          </div>
          <Button className="py-5 my-2 border-2 border-black flex items-center justify-center">
            All filter
          </Button>
          <Button className="py-5  border-2 border-black bg-black text-white flex items-center justify-center">
            Show results
          </Button>
        </div>
      </div>
    </>
  );
};

export default Nav;
