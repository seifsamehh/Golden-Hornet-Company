import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BubblyLink } from "react-bubbly-transitions";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// validation
const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});
const Login = () => {
  // show password
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  // handle submit
  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
    setTimeout(() => {
      navigate("/success");
    }, 1000);
  };
  //   theme
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <section className="login flex flex-col justify-center items-center min-[290px]:flex-wrap md:flex-nowrap gap-8 min-h-screen md:mx-12">
      <div className="login-box flex min-[290px]:flex-wrap md:flex-nowrap h-full w-full items-center min-[290px]:p-4 md:p-0 md:mx-4">
        <div className="left w-full">
          <h1 className="text-6xl mb-12 dark:text-white">
            Sign In to
            <br />
            Golden Hornet
          </h1>
          <p className="dark:text-white">
            if you don’t have an account
            <br /> you can {""}
            <BubblyLink to="/signup" colorStart="#0F75BD" colorEnd="#FFCC00">
              Register here!
            </BubblyLink>
          </p>
        </div>
        <div className="middle w-full"></div>
        <div className="right w-full">
          <div className="top flex items-center gap-4 mb-6">
            <BubblyLink to="/" colorStart="#0F75BD" colorEnd="#FFCC00">
              Home
            </BubblyLink>
            <BubblyLink to="/signup" colorStart="#0F75BD" colorEnd="#FFCC00">
              Sign Up
            </BubblyLink>
            <label className="cursor-pointer">
              <input
                className="toggle-checkbox"
                type="checkbox"
                onClick={handleTheme}
              />
              <div className="toggle-slot">
                <div className="sun-icon-wrapper">
                  <div
                    className="iconify sun-icon"
                    data-icon="feather-sun"
                    data-inline="false"
                  ></div>
                </div>
                <div className="toggle-button"></div>
                <div className="moon-icon-wrapper">
                  <div
                    className="iconify moon-icon"
                    data-icon="feather-moon"
                    data-inline="false"
                  ></div>
                </div>
              </div>
            </label>
          </div>
          <div className="form-box px-8 pt-6 pb-8 mb-4 bg-white dark:bg-[#1e1e1e] rounded border-2 border-[#1e1e1e] dark:border-white border-solid">
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-[#1e1e1e] dark:text-white font-bold mb-2"
                    >
                      Email
                    </label>
                    <Field
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter Your Email"
                      inputMode="email"
                      className="appearance-none border-2 border-[#1e1e1e] border-solid rounded w-full py-2 px-3 text-[#1e1e1e] leading-tight focus:outline-none focus:shadow-outline"
                      onBlur={(event) => {
                        const emailRegex =
                          /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
                        if (!emailRegex.test(event.target.value)) {
                          setFieldError("email", "Please enter a valid email");
                        }
                      }}
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 mt-2"
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="password"
                      className="block text-[#1e1e1e] dark:text-white font-bold mb-2"
                    >
                      Password
                    </label>
                    <Field
                      type={showPassword ? "text" : "password"}
                      name="password"
                      id="password"
                      placeholder="Enter Your Password"
                      inputMode="numeric"
                      className="appearance-none border-2 border-[#1e1e1e] border-solid rounded w-full py-2 px-3 text-[#1e1e1e] leading-tight focus:outline-none focus:shadow-outline"
                      onBlur={(event) => {
                        const passwordLength = event.target.value.length;
                        if (passwordLength < 6) {
                          setFieldError(
                            "password",
                            "Password must be at least 6 characters long"
                          );
                        }
                      }}
                    />
                    <div className="flex items-center my-2">
                      <input
                        type="checkbox"
                        id="show-password"
                        name="show-password"
                        checked={showPassword}
                        onChange={() => setShowPassword(!showPassword)}
                      />
                      <label htmlFor="show-password" className="ml-2 dark:text-white">
                        Show Password
                      </label>
                    </div>
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-red-500 mt-2"
                    />
                    <BubblyLink
                      to="/forget"
                      colorStart="#0F75BD"
                      colorEnd="#FFCC00"
                    >
                      Forget Password ?
                    </BubblyLink>
                  </div>
                  <div className="flex items-center justify-between">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="submit-btn bg-[#ffcc00] border-2 border-[#1e1e1e] dark:border-white border-solid w-full text-[#1e1e1e] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                      {isSubmitting ? "Submitting..." : "Login"}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
            <div className="divider dark:text-white">Or Continue With</div>
            <div className="other-login flex justify-center items-center gap-8">
              {/* facebook */}
              <a href="#">
                <div className="facebook bg-white py-2 px-4 border-2 border-[#1e1e1e] border-solid rounded-xl">
                  <svg
                    width={30}
                    height={30}
                    fill="#1e1e1e"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M22.08 12.539c0-5.335-4.298-9.66-9.6-9.66-5.304.001-9.602 4.325-9.602 9.661 0 4.82 3.511 8.817 8.1 9.541v-6.75H8.542v-2.79h2.438v-2.13c0-2.421 1.434-3.758 3.627-3.758 1.05 0 2.149.188 2.149.188v2.376h-1.21c-1.192 0-1.564.745-1.564 1.51v1.812h2.661l-.425 2.791H13.98v6.75c4.59-.725 8.1-4.72 8.1-9.541Z" />
                  </svg>
                </div>
              </a>
              {/* apple */}
              <a href="#">
                <div className="apple bg-white py-2 px-4 border-2 border-[#1e1e1e] border-solid rounded-xl">
                  <svg
                    width={30}
                    height={30}
                    fill="#1e1e1e"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16.298 2.41c-.04-.046-1.51.018-2.79 1.406s-1.082 2.979-1.054 3.02c.03.04 1.824.104 2.97-1.51 1.146-1.614.915-2.87.874-2.916Zm3.977 14.08c-.058-.116-2.79-1.481-2.536-4.107.255-2.627 2.01-3.347 2.038-3.425.027-.078-.717-.948-1.505-1.388a4.43 4.43 0 0 0-1.876-.52c-.13-.004-.58-.115-1.504.138-.61.167-1.984.707-2.362.729-.38.021-1.507-.627-2.72-.798-.777-.15-1.6.157-2.19.393-.587.236-1.706.905-2.488 2.685-.782 1.778-.373 4.596-.08 5.472.292.875.75 2.309 1.527 3.355.691 1.18 1.608 2 1.991 2.279.383.278 1.463.463 2.212.08.602-.37 1.69-.582 2.119-.566.428.015 1.273.185 2.138.647.685.236 1.333.138 1.982-.126.65-.266 1.59-1.271 2.686-3.31.417-.948.606-1.46.568-1.538Z" />
                    <path d="M16.298 2.41c-.04-.046-1.51.018-2.79 1.406s-1.082 2.979-1.054 3.02c.03.04 1.824.104 2.97-1.51 1.146-1.614.915-2.87.874-2.916Zm3.977 14.08c-.058-.116-2.79-1.481-2.536-4.107.255-2.627 2.01-3.347 2.038-3.425.027-.078-.717-.948-1.505-1.388a4.43 4.43 0 0 0-1.876-.52c-.13-.004-.58-.115-1.504.138-.61.167-1.984.707-2.362.729-.38.021-1.507-.627-2.72-.798-.777-.15-1.6.157-2.19.393-.587.236-1.706.905-2.488 2.685-.782 1.778-.373 4.596-.08 5.472.292.875.75 2.309 1.527 3.355.691 1.18 1.608 2 1.991 2.279.383.278 1.463.463 2.212.08.602-.37 1.69-.582 2.119-.566.428.015 1.273.185 2.138.647.685.236 1.333.138 1.982-.126.65-.266 1.59-1.271 2.686-3.31.417-.948.606-1.46.568-1.538Z" />
                  </svg>
                </div>
              </a>
              {/* google */}
              <a href="#">
                <div className="google bg-white py-2 px-4 border-2 border-[#1e1e1e] border-solid rounded-xl">
                  <svg
                    width={30}
                    height={30}
                    fill="#1e1e1e"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M21.431 10.197c.117.671.175 1.352.174 2.033 0 3.042-1.088 5.615-2.98 7.356h.003C16.973 21.115 14.698 22 12 22a10 10 0 1 1 0-20 9.611 9.611 0 0 1 6.69 2.602l-2.855 2.855A5.434 5.434 0 0 0 12 5.957c-2.609 0-4.825 1.76-5.615 4.13a5.99 5.99 0 0 0 0 3.829h.004c.793 2.366 3.006 4.126 5.615 4.126 1.347 0 2.505-.345 3.402-.955h-.004a4.628 4.628 0 0 0 2-3.038H12v-3.85h9.431v-.002Z" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
