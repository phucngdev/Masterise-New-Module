import React from "react";
import { Col } from "antd";
import { Link } from "react-router-dom";
import {
  BorderOuterOutlined,
  CloudOutlined,
  HeartOutlined,
  HomeOutlined,
} from "@ant-design/icons";

const RentItem = ({ id, img, price, address }) => {
  return (
    <>
      <Col span={8}>
        <Link to={`/${id}`}>
          <div className="p-4 m-2 flex flex-col bg-white rounded-lg hover:shadow-xl shadow-lg relative">
            <div className="absolute top-[20px] left-[20px] px-3 py-1 rounded-lg bg-green-500 text-white">
              20%
            </div>
            <img
              className="w-full h-[170px] rounded-md object-cover"
              src="https://img.freepik.com/free-photo/3d-rendering-modern-dining-room-living-room-with-luxury-decor_105762-2000.jpg?t=st=1708710072~exp=1708713672~hmac=8dacfb86f1530b5d04702180021ec23f010938dfc22e1d4a10a30061bb4e2798&w=1800"
              alt=""
            />
            {/* <span className="text-lg text-black font-semibold">$ 699.000</span> */}
            <div className="flex items-center justify-between mt-2">
              <span className="text-sm font-normal text-[#656565]">
                Lorem ipsum dolor
              </span>
              <span className="text-xl text-black flex items-center gap-1">
                $ 2,999{" "}
                <span className="font-normal text-sm text-[#656565]">
                  Total/mon
                </span>
              </span>
            </div>
            <div className="flex items-center justify-between mt-3">
              <div className="flex flex-col items-center gap-1">
                <div className="flex items-center gap-2">
                  <HomeOutlined className="text-black text-xl" />
                  <div className="text-black text-base">3</div>
                </div>
                <div className="text-black">Bedrooms</div>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="flex items-center gap-2">
                  <CloudOutlined className="text-black text-xl" />
                  <div className="text-black text-base">3</div>
                </div>
                <div className="text-black">Bathrooms</div>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="flex items-center gap-2">
                  <BorderOuterOutlined className="text-black text-xl" />
                  <div className="text-black text-base">
                    300m<sup>2</sup>
                  </div>
                </div>
                <div className="text-black">Living Area</div>
              </div>
            </div>
          </div>
        </Link>
      </Col>
    </>
  );
};

export default RentItem;
