import { useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { LuEye, LuEyeClosed } from "react-icons/lu";
import { registerUser } from "./api";

const schema = yup.object({
  username: yup.string().required().min(3).max(15),
  email: yup.string().email().required(),
  password: yup.string().required().min(8).max(15),
});

const Sigup = () => {
  const navigate = useNavigate();
  const [isShow, setIsShow] = useState(false);
  const [error, setError] = useState("");
  const [value, setValue] = useState("");

  const { register, handleSubmit, formState: {errors} } = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur"
  });

  const submitForm = (user) => {
    registerUser({ user, navigate, setError });
  };
  
  const renderError = (message) => {
    switch (message) {
      case "username is a required field":
        return "نام کاربری یک فیلد اجباری است.";
      case "username must be at least 3 characters":
        return "نام کاربری باید حداقل شامل 3 کاراکتر باشد.";
      case "username must be at most 15 characters":
        return "نام کاربری بای حداقل شامل 15 کاراکتر باشد."
      case "email is a required field":
        return "ایمیل یک فیلد اجباری است.";
      case "email must be a valid email":
        return "ایمیل باید معتبر باشد.";
      case "password is a required field":
        return "پسورد یک فیلد اجباری است.";
      case "password must be at least 8 characters":
        return "پسورد باید حداقل شامل 8 کاراکتر باشد.";
      case "password must be at most 15 characters":
        return "پسورد باید حداکثر شامل 15 کاراکتر باشد.";
      default:
        return message;
    }
  }

  const renderContent= () => {
    if(value.length < 4) {
      return (<p className="h-10 text-center text-gray-500 bg-[#f1adae] pt-3">
      بسیار سست - لطفا یک گذرواژه قوی تر وارد کنید.
      </p>);
    } else if(value.length > 3 && value.length < 9) {
      return (<p className="h-10 text-center text-gray-500 bg-[#fac6a8] pt-3">
      سست - لطفا یک گذرواژه قوی تر وارد کنید.
      </p>);
    } else if (value.length > 8 && value.length < 11) {
      return (<p className="h-10 text-center text-gray-500 bg-[#ffe399] pt-3">
      میانه
      </p>);
    } else if (value.length > 10) {
      return (<p className="h-10 text-center text-gray-500 bg-[#c1e1b8] pt-3">
      نیرومند
      </p>);
    }
  }

  return (
    <div className="text-black py-25 w-[50vw] max-md:w-[100vw]">
      <h1 className="text-xl px-5 font-extrabold">عضویت</h1>
      <form
        onSubmit={handleSubmit(submitForm)}
        className="mt-7 mx-7 p-7 text-[15px] bg-purple-50 rounded-xl"
      >
        <div className="pb-7">
          <label>
            نام کاربری<span className="text-red-800 pr-0.5">*</span>
          </label>
          <input
            type="text"
            {...register("username")}
            className="w-full h-12 bg-[#ece2d6] rounded-xl mt-1 outline-none pr-2"
          />
          {errors.username && <div className="pt-1 text-error">{renderError(errors.username.message)}</div>}
        </div>
        <div className="pb-7">
          <label>
            آدرس ایمیل<span className="text-red-800 pr-0.5">*</span>
          </label>
          <input
            type="email"
            {...register("email")}
            className="w-full h-12 bg-[#ece2d6] rounded-xl mt-1 outline-none pr-2"
          />
          {errors.email && <div className="pt-1 text-error">{renderError(errors.email.message)}</div>}
        </div>
        <div className="pb-7">
          <label>
            گذرواژه<span className="text-red-800 pr-0.5">*</span>
          </label>
          <div>
            <input
              type={isShow ? "text" : "password"}
              {...register("password")}
              className="w-full h-12 bg-[#ece2d6] rounded-xl mt-1 outline-none pr-2 z-0 inline"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            {isShow ? (
              <LuEye
                className="relative mr-[95%] mt-[-10%] z-10 inline cursor-pointer"
                onClick={() => setIsShow(!isShow)}
              />
            ) : (
              <LuEyeClosed
                className="relative mr-[95%] mt-[-10%] z-10 inline cursor-pointer"
                onClick={() => setIsShow(!isShow)}
              />
            )}
          </div>
          {value && (
            <div className="mt-[-4%]">
              {
                renderContent()
              }
              {
                value.length < 9 && <p className="text-gray-500 text-[10px] pt-3">
                راهنمایی: رمز باید دستکم ۷ حرف باشد. برای قوی‌تر کردن آن، از
                حروف کوچک و بزرگ انگلیسی، اعداد و نمادهایی مانند ! " ؟ $ % ^ & )
                استفاده کنید.
              </p>
              } 
            </div>
          )}
          {errors.password && <div className="pt-1 text-error">{renderError(errors.password.message)}</div>}
        </div>
        <p className="text-gray-500 text-[15px] pb-7">
          اطلاعات شخصی شما برای پردازش سفارش شما استفاده می‌شود، و پشتیبانی از
          تجربه شما در این وبسایت، و برای اهداف دیگری که در{" "}
          <NavLink
            to="/"
            target="_blank"
            className="text-red-950 cursor-pointer"
          >
            سیاست حفظ حریم خصوصی
          </NavLink>{" "}
          توضیح داده شده است.
        </p>
        {error && (
          <div className="my-5 min-h-10 p-3 bg-red-50 border-red-300 border-1 border-solid rounded-xl text-error">
            {error}
          </div>
        )}
        <button
          type="submit"
          className="bg-[#653a2a] text-white px-8 py-2.5 rounded-xl"
        >
          عضویت
        </button>
      </form>
    </div>
  );
};

export default Sigup;
