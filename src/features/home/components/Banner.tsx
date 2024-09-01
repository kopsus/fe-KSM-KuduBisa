import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import imgBanner1 from "../../../core/assets/banner/banner1.png";
import { ButtonRed } from "../../_global/components/Button";

const Banner = () => {
  return (
    <div className="container mt-20">
      <Swiper loop={true} navigation={true} modules={[Navigation]}>
        <SwiperSlide>
          <div className="h-96 w-full border-2 border-primary rounded-3xl overflow-hidden shadow-md shadow-primary relative p-20">
            <div className="absolute bottom-0 right-0">
              <img src={imgBanner1} alt="banner" />
            </div>
            <div className="flex flex-col items-start w-1/2 h-full justify-center gap-5">
              <p className="text-4xl font-semi text-black">
                Lorem ipsum dolor sit amet, consectetur
              </p>
              <p className="text-lighBlack">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </p>
              <ButtonRed>Jual Sekarang</ButtonRed>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-96 w-full border-2 border-primary rounded-3xl overflow-hidden shadow-md shadow-primary relative p-20">
            <div className="absolute bottom-0 right-0">
              <img src={imgBanner1} alt="banner" />
            </div>
            <div className="flex flex-col items-start w-1/2 h-full justify-center gap-5">
              <p className="text-4xl font-semi text-black">
                Lorem ipsum dolor sit amet, consectetur
              </p>
              <p className="text-lighBlack">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </p>
              <ButtonRed>Jual Sekarang</ButtonRed>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
