import { client } from "../../../lib/axios";

export const registerUser = async ({user, navigate, setError}) => {
  try {
    setError("")
    await client.post("auth/register", user);
    navigate("/");
  } catch (err) {
    switch (err.response.status) {
      case 403:
        setError("پسورد معتبر نیست( باید شامل حرف بزرگ، حرف کوچک و عدد باشد ).");
        break;
      case 405:
        setError("ایمیل قبلا ثبت شده است.");
        break;
      case 500:
        setError("خطای داخلی سرور");
        break;
      default:
        break;
    }
  }
};
