import React, { useState } from "react";
import { Button, Checkbox, Input, Radio } from "antd";

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
const optionsCriteria = [
  {
    label: "newly built",
    value: 1,
  },
  {
    label: "parking space",
    value: 2,
  },
  {
    label: "furnished",
    value: 3,
  },
  {
    label: "swimming Pool",
    value: 4,
  },
];
const Sidebar = () => {
  const onChange = (checkedValues) => {
    console.log("checked = ", checkedValues);
  };
  const onChangeCriteria = (checkedValues) => {
    console.log("checked = ", checkedValues);
  };

  return (
    <>
      <div className="fixed top-[60px] left-0 bottom-0 w-[25%] flex flex-col px-10 py-7">
        <div className="mb-4">
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
          <span className="text-black font-medium ">Price range</span>
          <div className="flex items-center justify-between gap-2 mt-4">
            <Input placeholder="$ From" className="py-2 border border-black" />
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
        <div className="mb-4">
          <span className="text-black font-medium ">Bathroom</span>
          <div className="flex items-center gap-2 mt-4">
            <Button className="rounded-full">All</Button>
            <Button className="rounded-full">Combined</Button>
            <Button className="rounded-full">Separate</Button>
          </div>
        </div>
        <div className="mb-4">
          <span className="text-black font-medium ">View</span>
          <div className="flex items-center gap-2 mt-4">
            <Button className="rounded-full">All</Button>
            <Button className="rounded-full">Courtyard</Button>
            <Button className="rounded-full">Street</Button>
          </div>
        </div>
        <div className="mb-4">
          <span className="text-black font-medium ">Basic criteria</span>
          <div className="flex items-center gap-2 mt-4">
            <Checkbox.Group
              options={optionsCriteria}
              defaultValue={["Pear"]}
              className="gap-2"
              onChange={onChangeCriteria}
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
    </>
  );
};

export default Sidebar;
