import React from "react";
import {
  FacebookOutlined,
  TikTokOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <>
      <div className="snap-start">
        <div className="text-center">
          <h3>ĐỐI TÁC</h3>
          <div className="flex"></div>
        </div>
        <div className="py-10 bg-stone-700 text-center text-white">
          <p className="text-base font-semibold">
            REAL ESTATE DEVELOPMENT LIMITED LIABILITY COMPANY
          </p>
          <h3 className="text-3xl font-bold mt-5 mb-10">MASTERISE</h3>
          <div className="flex gap-5 max-w-[80%] mx-auto">
            <div className="flex flex-col gap-2 items-start flex-1 text-left">
              <h4 className="text-lg font-medium">Contact</h4>
              <span className="text-sm">Email</span>
              <span className="text-sm">sales@masterisehomes.com</span>
              <span className="text-sm">Điện thoại : (028) 39 159 159</span>
            </div>
            <div className="flex flex-col gap-2 items-start flex-1 text-left">
              <h4 className="text-lg font-medium">
                TRỤ SỞ CHÍNH - HỒ CHÍ MINH
              </h4>
              <span className="text-sm">
                TMDV số 19-23, Masteri An Phú, 179 Xa Lộ Hà Nội, Phường Thảo
                Điền, Thành phố Thủ Đức
              </span>
            </div>
            <div className="flex flex-col gap-2 items-start flex-1 text-left">
              <h4 className="text-lg font-medium">VĂN PHÒNG HÀ NỘI</h4>
              <span className="text-sm">
                Tầng 1, Tòa nhà T26, Times City, 458 Minh Khai, Quận Hai Bà
                Trưng, Hà Nội
              </span>
            </div>
            <div className="flex flex-col gap-2 items-start flex-1 text-left">
              <h4 className="text-lg font-medium">KẾT NỐI VỚI CHÚNG TÔI</h4>
              <div className="flex items-center gap-3 *:text-2xl ">
                <YoutubeOutlined />
                <FacebookOutlined />
                <TikTokOutlined />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-stone-500 py-8">
          <div className="max-w-[80%] mx-auto flex items-center justify-between">
            <div className="flex flex-col gap-2 items-start flex-1 text-left text-white max-w-[60%]">
              <h4 className="text-lg font-medium">
                A MEMBER OF MASTERISE GROUP
              </h4>
              <span className="text-sm">
                Website thuộc sở hữu bởi: CÔNG TY CỔ PHẦN TẬP ĐOÀN MASTERISE
                GCNĐKDN số 0304840018 do Phòng ĐKKD Thành phố Hồ Chí Minh cấp,
                đăng ký lần thứ 18 ngày 12/05/2020 Bản quyền ©2019 thuộc về Công
                Ty Cổ phần Tập đoàn Masterise
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
