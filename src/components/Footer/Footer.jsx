import { NavLink } from "react-router";
import { FaArrowUp, FaWhatsapp, FaInstagram, FaWindowMinimize } from "react-icons/fa";
import { RiTelegram2Line } from "react-icons/ri";
import { PiShoppingBagBold } from "react-icons/pi";

import MembershipForm from "../shared/MembershipForm";

const accessList = [
  "مرکز پشتیبانی",
  "قوانین و مقررات",
  "حریم خصوصی",
  "سوالات متداول",
];

const categoriesList = [
  {
    path: "/product-category/leather-shoes",
    text: "کفش چرم",
  },
  {
    path: "/product-category/leather-gloves",
    text: "دستکش چرم",
  },
  {
    path: "/product-category/leather-bag",
    text: "کیف چرم",
  },
  {
    path: "/product-category/leather-accessory",
    text: "اکسسوری چرم",
  },
];

const mediaList = [
  {
    path: "/",
    mediaIcon: <RiTelegram2Line />,
  },
  {
    path: "/",
    mediaIcon: <FaWhatsapp />,
  },
  {
    path: "/",
    mediaIcon: <FaInstagram />,
  },
  {
    path: "/",
    mediaIcon: <PiShoppingBagBold />,
  },
];

const licenseList = ["مجوز", "مجوز", "مجوز"];

const contactList = [
  "تلفن : 123456-021",
  "آدرس : یزد، خیابان طراحان، کوچه سایت، پلاک 15",
  "ایمیل : info@gmail.com",
];

const Footer = ({ scrollToTop }) => {
  return (
    <footer className="bg-[#653a2a] text-[#f7fbf3] text-[15px] max-md:text-xs">
      <div className="flex justify-end mb-[-20px]">
        <div
          onClick={scrollToTop}
          className="bg-[#ece2d6] text-black text-lg w-fit p-3 rounded-full border-16 border-[#653a2a] border-solid ml-20 mt-[-30px] cursor-pointer"
        >
          <FaArrowUp />
        </div>
      </div>
      <div className="flex items-center gap-5 px-5 max-md:flex-col">
        <div>
          <img
            src="https://meharat.com/leather-store/wp-content/uploads/2024/05/LOGO-1.svg"
            alt="Logo"
            className="w-40 max-md:w-20"
          />
        </div>
        <p className="font-thin">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با نیاز
          طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و در ستون از صنعت چاپ،
          و با نیاز طراحان گرافیک است. لورم ایپسوم متن ساختگی با تولید سادگی
          نامفهوم از صنعت چاپ، و با نیاز طراحان گرافیک است.
        </p>
      </div>
      <div className="px-5 py-8 grid grid-cols-5 max-md:grid-cols-2 max-lg:grid-cols-2">
        <div>
          <h2 className="text-xl font-extrabold">دسترسی سریع</h2>
          <ul>
            {accessList.map((item, index) => (
              <li
                key={index}
                className="pt-4 flex items-start gap-1 cursor-pointer"
                onClick={scrollToTop}
              >
                <FaWindowMinimize className="text-[#9e6a54]" />{" "}
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-extrabold">دسته بندی محصولات</h2>
          <ul>
            {categoriesList.map((item, index) => (
              <li key={index} className="pt-4 flex items-start gap-1">
                <FaWindowMinimize className="text-[#9e6a54]" />
                <span className="cursor-pointer">
                  <NavLink to={item.path}>
                  {item.text}
                  </NavLink>
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-3 flex gap-10 max-md:gap-0 max-md:flex-col max-lg:mt-10">
          <div className="grow-1">
            <h2 className="text-xl font-extrabold">اطلاعات تماس</h2>
            <ul>
              {contactList.map((item, index) => (
                <li key={index} className="pt-4 flex items-start gap-1">
                  <FaWindowMinimize className="text-[#9e6a54]" />{" "}
                  <span>{item}</span>
                </li>
              ))}
              <li className="pt-4 flex items-center justify-between">
                <span className="flex items-start gap-1">
                  <FaWindowMinimize className="text-[#9e6a54]" />
                  <span>شبکه های اجتماعی:</span>
                </span>
                <ul className="flex items-center gap-2 text-2xl">
                  {mediaList.map((item, index) => (
                    <li key={index}>
                      {/* <NavLink to={item.path}> */}
                      {item.mediaIcon}
                      {/* </NavLink> */}
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
          <div className="max-md:mt-10 grow-0">
            <h2 className="text-xl font-extrabold">مجوز های کسب شده</h2>
            <div className="flex gap-5 pt-4">
              {licenseList.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#ece2d6] px-6 py-7 rounded-xl text-[#625b52] text-sm"
                >
                  {item}
                </div>
              ))}
            </div>
            <div className="pt-5 w-95 max-md:w-full">
              <MembershipForm
                text="ارسال"
                placeholderText="ایمیل خود را جهت عضویت در خبرنامه وارد کنید."
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#cfafa0] text-[#705345] text-center py-3">
        تمامی حقوق متعلق به سایت فروشگاهی آماده چرم است
      </div>
    </footer>
  );
};

export default Footer;
