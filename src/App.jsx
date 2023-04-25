import React, { useState, useEffect, useLayoutEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { BubblyContainer } from "react-bubbly-transitions";
import "./App.scss";
import { Error, Prograss } from "./components";
import {
  Cart,
  Landing,
  Login,
  Success,
  Signup,
  Verification,
  Profile,
  Upload,
  Home,
  Forget,
  Otp,
  ErrorPage,
  ResetPassword,
  PasswordSuccess,
  ProgrammingPage,
  MarketingPage,
  DesignPage,
} from "./pages";

const App = () => {
  //loading
  const [loading, setLoading] = useState("false");
  useEffect((_) => {
    setLoading(true);
    setTimeout((_) => {
      setLoading(false);
    }, 3000);
  }, []);
  function Wrapper({ children }) {
    const location = useLocation();

    useLayoutEffect(() => {
      window.scrollTo(0, 0);
    }, [location.pathname]);

    return children;
  }
  return (
    <>
      {loading ? (
        <>
          <div className="flex flex-col items-center justify-center h-screen loader-part">
            <div className="loader">
              <div className="cubes">
                <div className="cube">
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                </div>
                <div className="cube">
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                </div>
                <div className="cube">
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                </div>
                <div className="cube">
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                </div>
                <div className="cube">
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                </div>
                <div className="cube">
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                </div>
                <div className="cube">
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                </div>
                <div className="cube">
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                </div>
                <div className="cube">
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                </div>
                <div className="cube">
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                </div>
                <div className="cube">
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                </div>
                <div className="cube">
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                </div>
                <div className="cube">
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                </div>
                <div className="cube">
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                </div>
                <div className="cube">
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                </div>
                <div className="cube">
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                </div>
                <div className="cube">
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                </div>
                <div className="cube">
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                </div>
                <div className="cube">
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                </div>
                <div className="cube">
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                </div>
                <div className="cube">
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                </div>
                <div className="cube">
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                </div>
                <div className="cube">
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                </div>
                <div className="cube">
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                </div>
                <div className="cube">
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                </div>
                <div className="cube">
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                </div>
                <div className="cube">
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                </div>
                <div className="cube">
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                </div>
                <div className="cube">
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                </div>
                <div className="cube">
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                </div>
                <div className="cube">
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                </div>
                <div className="cube">
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                </div>
                <div className="cube">
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                </div>
                <div className="cube">
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                </div>
                <div className="cube">
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                </div>
                <div className="cube">
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                </div>
                <div className="cube">
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                </div>
                <div className="cube">
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                </div>
                <div className="cube">
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                </div>
                <div className="cube">
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                </div>
                <div className="cube">
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                </div>
                <div className="cube">
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                </div>
                <div className="cube">
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                </div>
                <div className="cube">
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                </div>
                <div className="cube">
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                </div>
                <div className="cube">
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                </div>
                <div className="cube">
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                </div>
                <div className="cube">
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                </div>
                <div className="cube">
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                </div>
                <div className="cube">
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                </div>
                <div className="cube">
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                </div>
                <div className="cube">
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                </div>
                <div className="cube">
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                </div>
                <div className="cube">
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                </div>
                <div className="cube">
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                </div>
                <div className="cube">
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                </div>
                <div className="cube">
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                </div>
                <div className="cube">
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                </div>
                <div className="cube">
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                </div>
                <div className="cube">
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                </div>
                <div className="cube">
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                </div>
                <div className="cube">
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                </div>
                <div className="cube">
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                </div>
                <div className="cube">
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                </div>
              </div>
            </div>
            <h1 className="min-[290px]:text-5xl md:text-7xl text-center font-bold">
              Golden Hornet
            </h1>
          </div>
        </>
      ) : (
        <>
          <BubblyContainer />
          <main
            className="bg-[#f5f9fa] dark:bg-[#1e1e1e] min-h-screen duration-[0.3s]"
            transition-style="in:wipe:left"
          >
            <Prograss />
            <Wrapper>
              <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/verification" element={<Verification />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/upload" element={<Upload />} />
                <Route path="/home" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/otp" element={<Otp />} />
                <Route path="/forget" element={<Forget />} />
                <Route path="/resetPassword" element={<ResetPassword />} />
                <Route path="/success" element={<Success />} />
                <Route path="/error" element={<ErrorPage />} />
                <Route path="/passwordSuccess" element={<PasswordSuccess />} />
                <Route path="/programming" element={<ProgrammingPage />} />
                <Route path="/marketing" element={<MarketingPage />} />
                <Route path="/design" element={<DesignPage />} />
                <Route path="*" element={<Error />} />
              </Routes>
            </Wrapper>
          </main>
        </>
      )}
    </>
  );
};

export default App;
