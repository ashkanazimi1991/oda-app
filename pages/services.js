import React ,{useState} from 'react';
import Head from 'next/head';
import { FaPlayCircle } from "react-icons/fa";
import Model from '../components/Modal'

const Services = () => {
    const [showModel, setShowModal] = useState(false)

    return (
        <div>
          <Head>
                <meta name="description" content="oda" />
                <link rel="icon" href="/images/logo.png" />
                <title>ODA services</title>
                <meta name="description" content="کیوان عظیمی شرکت اودا" />
                <meta name="theme-color" content="#000"/>
                <link rel='manifest' href='/manifest.json' />
           </Head>






            <video   autoPlay loop muted  className="fixed -z-10 object-cover  w-screen h-screen "  >
             <source   src="/video/ao.mp4"   type="video/mp4"  />
                Your browser does not support the video tag.
            </video>
           <section className="text-white min-h-screen bg-[#0c0c0cc5] md:pl-80 pt-10 l-18">
   

            <div className=" max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
                <div className="flex border-y-2 flex-row justify-around text-center">
                <h2 className="text-xl py-6   text-[#fdfdfd]
                  "> مشاهده آنلاین پیشرفت پروژه</h2>

                <Model isVisible={showModel} onclose={() => setShowModal(false)}>
                <video   controls muted  className="  object-conain   "  >
             <source   src="/video/odat.mp4"   type="video/mp4"  />
                Your browser does not support the video tag.
            </video>
                </Model>


                    <div className='flex justify-center  cursor-pointer items-center '>
                        <button onClick={() => setShowModal(true)} className='w-20 h-20'>

                        <FaPlayCircle  className="text-4xl animate-pulse  text-[#0a835b]"/>
                        </button>

                    </div>
                </div>

                <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
                    <a  className="block p-8 transition border  border-gray-800 shadow-xl rounded-xl 
                    bg-[#00000091] hover:shadow-[#60724b3a] hover:border-[#60724b]"  >
                        <h3 className="mt-4 text-xl  font-bold  text-white text-right">مطالعات</h3>

                        <p className="mt-1   text-sm text-gray-400 font-[IRANSansWeb] leading-6 text-right">
                        مطالعات فنی طرح و پروژه ، مطالعات استراتژی و اقلیمی، بررسی اقتصادی ، امکان سنجی و تحلیل سایت ، پیشنهاد طرح و سایت.
                        </p>
                    </a>

                    <a  className="block p-8 transition border  border-gray-800 shadow-xl rounded-xl 
                    bg-[#00000091] hover:shadow-[#60724b3a] hover:border-[#60724b]"  >
                       

                        <h3 className="mt-4  text-xl  leading-6 text-right font-bold text-white">طراحی</h3>

                        <p className="mt-1 text-sm  leading-6 text-right text-gray-400">
                        ابنیه در تمامی کاربری های  مسکونی ، تجاری ، خدماتی و فرهنگی ، ورزشی ، محوطه و فضای سبز .
                        طراحی سازه های صنعتی و کشاورزی ، بناهای پیش ساخته و مدولار.
                        طراحی مبلمان و تجهیزات اداری مسکونی  و المان های شهری و محوطه .
                        طراحی داخلی و پوسته نما .

                        </p>
                    </a>
                    <a  className="block p-8 transition border  border-gray-800 shadow-xl rounded-xl 
                    bg-[#00000091] hover:shadow-[#60724b3a] hover:border-[#60724b]"  >
                        
                        <h3 className="mt-4 text-xl font-bold font-[IRANSansWeb] leading-6 text-right text-white">نظارت</h3>

                        <p className="mt-1 text-sm  leading-6 text-right text-gray-400">
                        نظارت کیفی و فنی پروژه ، نظارت عالیه و کارگاهی ، بررسی متریال .

                        </p>
                    </a>

                    <a  className="block p-8 transition border  border-gray-800 shadow-xl rounded-xl 
                    bg-[#00000091] hover:shadow-[#60724b3a] hover:border-[#60724b]"  >
                       
                        <h3 className="mt-4 text-xl font-bold font-[IRANSansWeb] leading-6 text-right text-white">مدیریت اقتصادی</h3>

                        <p className="mt-1 text-sm text-gray-400 font-[IRANSansWeb] leading-6 text-right">
                        سرمایه گذاری و جذب سرمایه 
                        در پروژه های مسکونی ، تجاری ، صنعتی ،کشاورزی ، عمرانی ، معدن ، توریسم و ....
                        اخذ وام و اعتبارات بانکی بصورت ارزی و ریالی.

                        </p>
                    </a>

                    <a  className="block p-8 transition border  border-gray-800 shadow-xl rounded-xl 
                    bg-[#00000091] hover:shadow-[#60724b3a] hover:border-[#60724b]"  >
                        
                        <h3 className="mt-4 text-xl font-bold text-white font-[IRANSansWeb] leading-6 text-right">بازسازی و نوسازی</h3>

                        <p className="mt-1 text-sm text-gray-400 font-[IRANSansWeb] leading-6 text-right">
                        مرمت و باز سازی ، نوسازی و بهسازی ابنیه قدیمی و بافت فرسوده شهری .

                        </p>
                    </a>

                    <a  className="block p-8 transition border  border-gray-800 shadow-xl rounded-xl 
                    bg-[#00000091] hover:shadow-[#60724b3a] hover:border-[#60724b]"  >
                       
                        <h3 className="mt-4  text-xl font-bold text-white font-[IRANSansWeb] leading-6 text-right">مدیریت ساخت</h3>

                        <p className="mt-1 text-sm text-gray-400 font-[IRANSansWeb] leading-6 text-right">
                        مدیریت پروژه MC ، مدیریت پیمان ، مدیریت کیفیت و استراتژیک.

                        </p>
                    </a>



                    
                    <a  className="block p-8 transition border  border-gray-800 shadow-xl rounded-xl 
                    bg-[#00000091] hover:shadow-[#60724b3a] hover:border-[#60724b]"  >
                       
                        <h3 className="mt-4 text-xl font-bold text-white font-[IRANSansWeb] leading-6 text-right">تاسیسات</h3>

                        <p className="mt-1 text-sm text-gray-400 font-[IRANSansWeb] leading-6 text-right">
                        طراحی و نظارت و اجرای تاسیسات مکانیکی و الکتریکی ابنیه و محوطه و هوشمند سازی پروژه.

                        </p>
                    </a>

                    <a  className="block p-8 transition border  border-gray-800 shadow-xl rounded-xl 
                    bg-[#00000091] hover:shadow-[#60724b3a] hover:border-[#60724b]"  >
                       
                        <h3 className="mt-4 text-xl font-bold text-white font-[IRANSansWeb] leading-6 text-right">برنامه نویسی</h3>

                        <p className="mt-1 text-sm  leading-6 text-right text-gray-400">
                        طراحی و برنامه نوسی پلتفرم ،
                         اپلیکیشن ، وب اپ ، اتوماسیون های یکپارچه و رباتیک ، هوشمند سازی بر پایه هوش مصنوعی و
                         اینترنت اشیا در صنعت ساختمان و سیستم های صنعتی ، آموزشی ، درمانی و پدافند و امداد.


                        </p>
                    </a>


                </div>

               
            </div>
</section>

        </div>
    );
}

export default Services;
