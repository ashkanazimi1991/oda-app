import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import Image from 'next/image';

export default class Slider2 extends Component {
  render() {
    const settings = {
      autoplay:false,
      infinite: true,
      lazyLoad: true,
      initialSlide: 2,
      slidesToShow: 1,
      speed: 500,
      dotsClass: "slick-dots slick-thumb",
      dots: true,
      pauseOnHover: true,
      appendDots: dots => (
        <div
          style={{
            backgroundColor: "#black",
            borderRadius: "10px",
            padding: "40px"
          }}
        >
          <ul style={{ margin: "0px" }}> {dots} </ul>
        </div>
        ),
        customPaging: i => (
         <div
           style={{
             width: "30px",
             color: "white",
            //  border: "1px blue solid"
           }}
         >
           {i + 1}
         </div>)
 
    };
    return (
      <div className="container w-full h-full overflow-hidden  ">
        <Slider {...settings}>
          <div  >
            <div className="flex justify-center h-full">
            <Image height='800' width='1200' className=" w-full h-full  object-contain  justify-center
                p-4 "
               src={this.props.img1} alt=" مدیریت آنلاین" />
            </div>
            {/* <h1 className="text-[#60ece1] text-xl  text-center pb-10" >{this.props.title1} </h1> */}
          </div>
         
          <div>
            <div className="flex justify-center  h-full ">
            <Image height='800' width='1200' className="  w-full h-screen  object-contain  justify-center  p-4 " src={this.props.img2} alt="رباتیک" />
            </div>
              {/* <h1 className="text-[#60ece1] text-xl  text-center pb-10" >{this.props.title2}</h1> */}
          </div>

          <div>
            <div className="flex justify-center  h-5/6">
            <Image height='800' width='1200' className="sm:w-[50%]   object-contain  justify-center  p-4"
               src={this.props.img3} alt="اینترنت اشیا" />
            </div>
              <h1 className="text-[#60ece1] text-xl  text-center pb-10" > {this.props.title3}</h1>
          </div>

          <div>
            <div className="flex justify-center  h-5/6">
            <Image height='800' width='1200' className="sm:w-[50%]  object-contain  justify-center  p-4 " src={this.props.img4} alt="شرکت برنامه نویسی" />
            </div>
              {/* <h1 className="text-[#60ece1] text-xl  text-center pb-10" >{this.props.title4}</h1> */}
          </div>
{/* 
          
          <div>
            <div className="flex justify-center">
            <Image height='450' width='400' className=" sm:w-[50%]  object-contain  justify-center  p-4" src={this.props.img5} alt="برنامه نویسی" />
            </div>
              <h1 className="text-[#60ece1] text-xl  text-center pb-10" >{this.props.title5}</h1>
          </div>

          <div>
            <div className="flex justify-center">
              <Image height='450' width='400' className="sm:w-[50%]  object-contain  justify-center  p-4" src={this.props.img6} alt="برنامه نویسی" />
            </div>
              <h1 className="text-[#60ece1] text-xl  text-center pb-10" >{this.props.title6}</h1>
          </div> */}
         
         
         
        


        </Slider>
      </div>
    );
  }
}
