import React from "react";
import bg_home_page_one from "../../../public/bg-home-page-one.jpeg";
import bg_home_page_two from "../../../public/bg-home-page-two.jpeg";
import Footer from "../../layout/user/Footer";
const Home = () => {
  return (
    <>
      <div className="h-screen snap-y snap-mandatory overflow-scroll">
        <section className="w-full h-screen flex items-center justify-center snap-start relative">
          {/* <img
            src="https://images.pexels.com/photos/15375832/pexels-photo-15375832/free-photo-of-tuy-t-nha-c-a-cay-mua-dong.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            className="absolute top-0 left-0 right-0 bottom-0 object-cover w-full h-full z-[-1]"
          /> */}
          <video
            autoPlay
            playsInline
            loop
            muted
            className="absolute top-0 left-0 right-0 bottom-0 object-cover w-full h-full z-[-1]"
          >
            <source
              src="https://masterisehomes.com/videos/MH-CORP_VIDEO_2021-VIET-30s-Subtitle_2.mp4"
              type="video/mp4"
            />
          </video>
          <div className="flex items-center justify-center relative px-10 py-5 rounded-full bg-blue-100 bg-opacity-15 ">
            <h3 className="text-[60px] font-medium text-center text-white max-w-[530px]">
              Unlock Your Dream Home{" "}
              <span className="text-[#cbe040]">with Us</span>.
            </h3>
            <div className="uppercase px-5 py-1 text-white rounded-full bg-blue-200 bg-opacity-70 absolute top-[-7%] rotate-3 left-[50%] translate-x-[-50%]">
              We have an offer for you!
            </div>
          </div>
        </section>
        <section className="w-full h-screen flex items-center justify-center snap-start relative">
          <img
            src={bg_home_page_one}
            alt=""
            className="absolute top-0 left-0 right-0 bottom-0 object-cover w-full h-full z-[-1]"
          />
          <div className="flex items-center gap-10">
            <div className="w-[480px] flex flex-col gap-2 p-[30px] shadow-xl bg-black bg-opacity-60 rounded-lg text-white">
              <h3 className="text-3xl font-thin text-center">MASTERISE LAND</h3>
              <span className="font-extralight">
                Masterise Land – Đơn vị phân phối bất động sản cao cấp của chủ
                đầu tư Masterise Homes (Thành viên của tập đoàn Masterise
                Group). Chúng tôi tự hào là cầu nối gắn kết những chủ nhân
                thượng lưu trên khắp toàn cầu tới gần hơn với những giá trị sống
                tinh hoa được gửi gắm trong chuỗi bất động sản cao cấp, hạng
                sang và hàng hiệu của chủ đầu tư Masterise Homes.
              </span>
              <button className="bg-white bg-opacity-60 hover:bg-opacity-40 px-3 py-2 text-black rounded-lg">
                TÌM HIỂU VỀ MASTERISSELAND
              </button>
            </div>
            <form className="w-[480px] flex flex-col gap-3 p-[30px] shadow-xl bg-white bg-opacity-60 rounded-lg ">
              <h3 className="text-center text-3xl font-light text-black">
                ĐĂNG KÝ TƯ VẤN
              </h3>
              <div className="flex items-center justify-between gap-3">
                <input
                  className="bg-white w-[50%] border border-black rounded-lg  p-2"
                  type="text"
                  placeholder="Họ và tên"
                />
                <input
                  className="bg-white w-[50%] border border-black rounded-lg  p-2"
                  type="number"
                  placeholder="Số điện thoại"
                />
              </div>
              <div className="flex items-center justify-between gap-3">
                <input
                  className="bg-white w-[50%] border border-black rounded-lg  p-2"
                  type="email"
                  placeholder="Email"
                />
                <input
                  className="bg-white w-[50%] border border-black rounded-lg  p-2"
                  type="text"
                  placeholder="Dự án quan tâm"
                />
              </div>
              <button className="px-3 py-2 bg-black bg-opacity-60 hover:bg-opacity-40 text-white rounded-lg">
                Đăng ký
              </button>
            </form>
          </div>
        </section>
        <section className="w-full h-screen flex items-center justify-center snap-start relative">
          <img
            src={bg_home_page_two}
            alt=""
            className="absolute top-0 left-0 right-0 bottom-0 object-cover w-full h-full z-[-1]"
          />
          <div className="flex items-center gap-10">
            <div className="w-[480px] p-[30px] text-white">
              <h3 className="text-3xl">MASTERISE LAND</h3>
              <span className="">
                Masterise Land – Đơn vị phân phối bất động sản cao cấp của chủ
                đầu tư Masterise Homes (Thành viên của tập đoàn Masterise
                Group). Chúng tôi tự hào là cầu nối gắn kết những chủ nhân
                thượng lưu trên khắp toàn cầu tới gần hơn với những giá trị sống
                tinh hoa được gửi gắm trong chuỗi bất động sản cao cấp, hạng
                sang và hàng hiệu của chủ đầu tư Masterise Homes.
              </span>
              <button>TÌM HIỂU VỀ MASTERISSELAND</button>
            </div>
          </div>
        </section>
        <section className="w-full h-screen bg-red-400 flex items-center justify-center snap-start">
          <div className="flex items-center gap-10">
            <div className="w-[480px] p-[30px] text-white">
              <h3 className="text-3xl">MASTERISE LAND</h3>
              <span className="">
                Masterise Land – Đơn vị phân phối bất động sản cao cấp của chủ
                đầu tư Masterise Homes (Thành viên của tập đoàn Masterise
                Group). Chúng tôi tự hào là cầu nối gắn kết những chủ nhân
                thượng lưu trên khắp toàn cầu tới gần hơn với những giá trị sống
                tinh hoa được gửi gắm trong chuỗi bất động sản cao cấp, hạng
                sang và hàng hiệu của chủ đầu tư Masterise Homes.
              </span>
              <button>TÌM HIỂU VỀ MASTERISSELAND</button>
            </div>
          </div>
        </section>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Home;
