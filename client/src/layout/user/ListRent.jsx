import { Row } from "antd";
import React from "react";
import RentItem from "../../components/user/RentItem";

const ListRent = () => {
  return (
    <>
      <div className="ms-[25%] w-[75%] h-[100vh] px-4 pt-7">
        <span className="text-black text-2xl font-medium px-4">
          250 Object founds
        </span>
        <Row>
          <RentItem></RentItem>
          <RentItem></RentItem>
          <RentItem></RentItem>
          <RentItem></RentItem>
          <RentItem></RentItem>
          <RentItem></RentItem>
          <RentItem></RentItem>
          <RentItem></RentItem>
          <RentItem></RentItem>
          <RentItem></RentItem>
          <RentItem></RentItem>
          <RentItem></RentItem>
        </Row>
      </div>
    </>
  );
};

export default ListRent;
