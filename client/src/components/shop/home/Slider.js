import React, { Fragment, useEffect, useContext, useState } from "react";
import OrderSuccessMessage from "./OrderSuccessMessage";
import { HomeContext } from "./";
import { sliderImages } from "../../admin/dashboardAdmin/Action";
import { prevSlide, nextSlide } from "./Mixins";
import { FaArrowLeft, FaArrowRight, FaSearch } from "react-icons/fa";
import { MdHealthAndSafety } from "react-icons/md";

const apiURL = process.env.REACT_APP_API_URL;

const Slider = (props) => {
  const { data, dispatch } = useContext(HomeContext);
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    sliderImages(dispatch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      <div className="relative mt-16 bg-gray-100 border-2">
        {data.sliderImages.length > 0 ? (
          <img
            className="w-full"
            src={`${apiURL}/uploads/customize/${data.sliderImages[slide].slideImage}`}
            alt="sliderImage"
          />
        ) : (
          <div className="w-full h-96 bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center">
            <div className="text-center text-white px-6">
              <div className="flex justify-center mb-4">
                <MdHealthAndSafety className="text-white text-6xl" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">TransplantNet</h1>
              <p className="text-xl md:text-2xl mb-6">Accelerating organ transfer to save more lives</p>
            </div>
          </div>
        )}

        {data?.sliderImages?.length > 0 ? (
          <>
            <div 
              onClick={(e) => prevSlide(data.sliderImages.length, slide, setSlide)}
              className="z-10 absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg cursor-pointer hover:bg-gray-100"
            >
              <FaArrowLeft className="text-gray-700 text-xl" />
            </div>
            <div
              onClick={(e) => nextSlide(data.sliderImages.length, slide, setSlide)}
              className="z-10 absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg cursor-pointer hover:bg-gray-100"
            >
              <FaArrowRight className="text-gray-700 text-xl" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <a
                href="#organ-section"
                className="cursor-pointer bg-green-600 hover:bg-green-700 transition-colors text-xl text-white px-6 py-3 rounded-full shadow-lg flex items-center"
              >
                <FaSearch className="mr-2" /> View Available Organs
              </a>
            </div>
          </>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <a
              href="#organ-section"
              className="cursor-pointer bg-white hover:bg-gray-100 transition-colors text-xl text-green-700 px-6 py-3 rounded-full shadow-lg flex items-center"
            >
              <FaSearch className="mr-2" /> View Available Organs
            </a>
          </div>
        )}
      </div>
      <OrderSuccessMessage />
    </Fragment>
  );
};

export default Slider;
