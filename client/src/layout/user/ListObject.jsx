import { Col, Row } from "antd";
import React from "react";
import ObjectItem from "../../components/user/ObjectItem";

const ListObject = () => {
  return (
    <>
      <div className="ms-[25%] w-[75%] h-[100vh] px-4 pt-7">
        <span className="text-black text-2xl font-medium px-4">
          250 Object founds
        </span>
        <Row>
          <ObjectItem></ObjectItem>
          <ObjectItem></ObjectItem>
          <ObjectItem></ObjectItem>
          <ObjectItem></ObjectItem>
          <ObjectItem></ObjectItem>
          <ObjectItem></ObjectItem>
          <ObjectItem></ObjectItem>
          <ObjectItem></ObjectItem>
        </Row>
      </div>
    </>
  );
};

export default ListObject;
