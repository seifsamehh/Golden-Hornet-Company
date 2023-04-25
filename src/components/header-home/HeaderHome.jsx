import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./style/headerHome.scss";
import { BubblyLink } from "react-bubbly-transitions";
import { MobileMenu } from "..";

const HeaderHome = () => {
  // cart counter
  const itemCount = useSelector((state) => state.cart.count);
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
    <header className="header-home flex min-[290px]:justify-center xl:justify-between items-center flex-wrap py-4 px-8 gap-3 bg-white">
      <div className="left">
        <BubblyLink to="/home" colorStart="#0F75BD" colorEnd="#FFCC00">
          <svg
            width="230"
            height="88"
            viewBox="0 0 254 88"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.6673 43.1145C20.0467 41.4459 22.2168 40.0313 22.5044 39.9225C22.7659 39.8499 23.1842 39.8862 23.4195 40.0313C23.6548 40.1764 23.9947 40.5391 24.1778 40.8655C24.3346 41.192 24.4392 41.8448 24.3608 42.3528C24.2562 43.0783 23.7333 43.586 21.8769 44.8917C20.3342 45.98 19.4714 46.7781 19.393 47.2496C19.3146 47.6485 19.3407 48.2287 19.4714 48.5192C19.576 48.8094 20.7526 50.0425 22.0861 51.2395C24.1516 53.1255 24.4915 53.5609 24.4915 54.3951C24.4915 54.9758 24.2824 55.7009 24.0209 56.0636C23.7856 56.4264 23.3411 56.6804 23.0535 56.6804C22.7659 56.6804 20.4389 54.7944 17.9026 52.5091C13.4839 48.5554 13.2486 48.2652 13.3009 47.2496C13.327 46.1974 13.5624 45.98 17.6673 43.1145Z"
              fill="#0F75BD"
            />
            <path
              d="M68.4029 51.3529C66.0235 53.0214 63.8535 54.4359 63.5658 54.545C63.3045 54.6172 62.8861 54.5811 62.6506 54.4359C62.4155 54.291 62.0754 53.9283 61.8926 53.6016C61.7354 53.2754 61.6309 52.6225 61.7093 52.1145C61.8138 51.389 62.3371 50.8814 64.1932 49.5756C65.7357 48.4874 66.5986 47.6892 66.677 47.2177C66.7558 46.8189 66.7293 46.2386 66.5986 45.9481C66.4942 45.658 65.3177 44.4248 63.9842 43.2278C61.9187 41.3416 61.5787 40.9064 61.5787 40.0721C61.5787 39.4917 61.7877 38.7663 62.0493 38.4036C62.2844 38.0409 62.729 37.7869 63.0167 37.7869C63.3045 37.7869 65.6312 39.6731 68.1673 41.9582C72.586 45.912 72.8216 46.2021 72.7693 47.2177C72.7432 48.2699 72.5077 48.4874 68.4029 51.3529Z"
              fill="#0F75BD"
            />
            <path
              d="M26.6019 2.89188C26.5464 2.05769 26.824 1.05666 27.2683 0.667369C27.7126 0.27808 28.8233 1.52588e-05 29.7675 1.52588e-05C31.1558 1.52588e-05 31.9334 0.611754 37.5425 7.73022L39.3194 6.11744C40.3191 5.17203 41.5412 4.44904 41.9852 4.44904C42.4297 4.44904 43.5405 5.06077 44.4844 5.83935C46.0951 7.17407 46.2059 7.17407 47.3168 6.22865C47.9278 5.72813 49.3715 4.11537 50.4824 2.61382C52.2039 0.444917 52.8149 1.52588e-05 54.3144 1.52588e-05C55.6473 1.52588e-05 56.3692 0.389305 56.9802 1.39034C57.7575 2.66943 57.7021 2.94749 56.869 4.44904C56.3138 5.33887 54.7585 7.45212 50.871 12.2905L55.1475 16.5726C58.5905 19.965 59.4794 21.1885 59.4794 22.5232C59.4794 23.9692 58.3131 25.3595 51.4267 32.0886C44.9842 38.4841 43.0961 40.0413 41.9852 39.8744C41.0414 39.8188 38.0424 37.1494 32.5442 31.6993C26.3798 25.5263 24.4915 23.3018 24.4915 22.2452C24.4915 21.2441 25.7688 19.6313 33.0996 12.3461L29.9341 8.39754C27.9348 5.9506 26.6574 3.8373 26.6019 2.89188Z"
              fill="#010201"
            />
            <path
              d="M0.00332163 46.2381C-0.107742 45.4633 2.55789 42.4746 9.27755 35.8887C15.1641 30.0775 19.1071 26.5908 19.829 26.5908C20.551 26.5908 24.6605 30.2989 31.2135 36.8295C36.878 42.4746 41.7093 47.0681 42.0425 47.0681C42.3757 47.0681 47.2073 42.4746 52.8719 36.8295C59.4249 30.2435 63.5342 26.5908 64.2565 26.5908C64.9783 26.5908 68.7544 29.9668 74.6968 35.8887C80.528 41.6998 83.9709 45.5185 83.9709 46.2381C83.9709 46.9021 80.6388 50.6656 75.1966 56.0894C70.4205 60.8489 66.2557 64.7784 65.9225 64.7784C65.5893 64.7784 64.7005 64.0588 63.8121 63.2288C62.979 62.3989 62.3126 61.5133 62.3126 61.1809C62.3126 60.8489 65.6447 57.3622 77.0293 46.0165L70.9203 39.8735C67.5328 36.4974 64.6451 33.7856 64.4231 33.7856C64.1453 33.7856 57.7589 40.0949 50.095 47.7325C42.487 55.425 36.2116 61.9005 36.2116 62.1221C36.2116 62.3989 38.8216 62.5648 42.0425 62.5648C45.2639 62.5648 47.8737 62.3989 47.8737 62.1221C47.8737 61.9005 47.1519 61.0705 44.8194 58.6906L46.7629 56.7534C47.8183 55.6466 48.8734 54.8719 49.0954 54.9271C49.3178 55.0379 52.4833 58.0818 62.979 68.3759L53.3163 77.9504C45.1526 86.0306 43.4312 87.4697 42.0425 87.4697C40.6543 87.4697 38.9328 86.0306 21.1619 68.3759L37.8778 51.7723L19.829 33.7856L13.8313 39.5967C10.5548 42.8066 7.88918 45.7401 7.88918 46.0721C7.88918 46.4593 10.9991 49.8908 14.8309 53.7095C18.6628 57.5282 21.7727 60.8489 21.7727 61.1809C21.7727 61.5133 21.0508 62.3989 20.2177 63.284C19.3848 64.1144 18.4406 64.7784 18.163 64.7784C17.8853 64.7784 13.6647 60.8489 8.88877 56.0894C4.05734 51.2744 0.0588428 46.8469 0.00332163 46.2381Z"
              fill="#010201"
            />
            <path
              d="M36.389 61.896C36.3364 61.6771 37.5976 60.0919 39.279 58.3968L42.3271 55.2809L44.9543 58.5062C46.4255 60.2558 47.6343 61.8411 47.5819 62.0054C47.5291 62.1694 45.0595 62.2785 42.0118 62.2785C38.9637 62.2785 36.4415 62.1145 36.389 61.896Z"
              fill="#FFCC00"
            />
            <path
              d="M31.4902 22.3923C31.4339 22.1085 33.6287 19.6121 36.3863 16.8888C39.2003 14.1654 41.7329 11.8959 42.014 11.8959C42.3517 11.8959 44.8281 14.1654 47.5294 16.8888C50.2308 19.6121 52.4818 22.1085 52.4818 22.3923C52.4818 22.7327 50.2308 25.2291 47.5294 27.9525C44.8281 30.6759 42.3517 32.8886 42.014 32.8886C41.7329 32.8886 39.2565 30.6759 36.5552 27.9525C33.8538 25.2291 31.6027 22.7327 31.4902 22.3923Z"
              fill="#FFCC00"
            />
            <path
              d="M31.1319 69.3296C29.8034 67.984 29.8034 67.9303 30.7998 66.854C31.7961 65.885 32.571 65.7772 41.87 65.7772C50.6154 65.8313 52.0547 65.9387 52.885 66.7462C53.4384 67.2305 53.8813 67.9303 53.8813 68.1995C53.8257 68.5224 53.3832 69.1681 52.885 69.7065C51.9991 70.5678 50.7815 70.6755 42.2021 70.6755C32.6264 70.6755 32.5156 70.6214 31.1319 69.3296Z"
              fill="#FFCC00"
            />
            <path
              d="M40.0035 78.812C39.1735 77.953 37.8456 76.5217 37.0709 75.6631L35.6876 74.1743H41.6634C44.9276 74.1743 47.5835 74.4036 47.5835 74.6324C47.5835 74.8612 46.4216 76.2929 44.9828 77.7813C43.5445 79.2701 42.1614 80.4721 41.9398 80.4721C41.7186 80.4721 40.8334 79.7277 40.0035 78.812Z"
              fill="#FFCC00"
            />
            <path
              d="M112.203 40.9386C112.095 40.5635 111.944 40.2326 111.749 39.945C111.554 39.6525 111.315 39.4054 111.032 39.2053C110.755 39.0003 110.437 38.8435 110.077 38.7358C109.723 38.628 109.33 38.5741 108.899 38.5741C108.092 38.5741 107.384 38.7743 106.772 39.1745C106.166 39.5755 105.694 40.1584 105.355 40.9232C105.016 41.6831 104.847 42.6131 104.847 43.7117C104.847 44.8111 105.014 45.7459 105.347 46.5157C105.681 47.2861 106.154 47.8746 106.765 48.2798C107.376 48.6807 108.097 48.8809 108.929 48.8809C109.684 48.8809 110.329 48.7472 110.863 48.4806C111.402 48.2084 111.813 47.8256 112.095 47.3323C112.383 46.8397 112.527 46.2568 112.527 45.5836L113.205 45.6837H109.137V43.1729H115.739V45.1602C115.739 46.5465 115.446 47.7381 114.861 48.7346C114.275 49.7255 113.469 50.491 112.442 51.0298C111.415 51.5644 110.239 51.831 108.914 51.831C107.435 51.831 106.136 51.5049 105.016 50.8528C103.897 50.1957 103.023 49.2636 102.397 48.0565C101.776 46.8446 101.465 45.4066 101.465 43.7425C101.465 42.4641 101.65 41.3242 102.019 40.3228C102.394 39.3159 102.918 38.4636 103.591 37.7652C104.264 37.0668 105.047 36.535 105.94 36.1705C106.834 35.8059 107.802 35.6232 108.845 35.6232C109.738 35.6232 110.57 35.7541 111.34 36.0165C112.111 36.2733 112.794 36.6379 113.39 37.1102C113.99 37.5826 114.481 38.1452 114.861 38.7974C115.241 39.4446 115.485 40.1584 115.593 40.9386H112.203ZM123.529 51.8464C122.332 51.8464 121.298 51.5924 120.425 51.0837C119.557 50.5708 118.886 49.8563 118.414 48.9424C117.942 48.0229 117.705 46.9579 117.705 45.7459C117.705 44.5235 117.942 43.4549 118.414 42.5411C118.886 41.6216 119.557 40.9078 120.425 40.3998C121.298 39.8862 122.332 39.6294 123.529 39.6294C124.726 39.6294 125.758 39.8862 126.626 40.3998C127.499 40.9078 128.172 41.6216 128.644 42.5411C129.116 43.4549 129.353 44.5235 129.353 45.7459C129.353 46.9579 129.116 48.0229 128.644 48.9424C128.172 49.8563 127.499 50.5708 126.626 51.0837C125.758 51.5924 124.726 51.8464 123.529 51.8464ZM123.544 49.3042C124.089 49.3042 124.543 49.1503 124.908 48.8424C125.273 48.5289 125.547 48.1027 125.732 47.5639C125.922 47.0244 126.017 46.4107 126.017 45.7222C126.017 45.0343 125.922 44.4206 125.732 43.8811C125.547 43.3423 125.273 42.9161 124.908 42.6026C124.543 42.2891 124.089 42.1331 123.544 42.1331C122.995 42.1331 122.533 42.2891 122.158 42.6026C121.788 42.9161 121.508 43.3423 121.318 43.8811C121.133 44.4206 121.041 45.0343 121.041 45.7222C121.041 46.4107 121.133 47.0244 121.318 47.5639C121.508 48.1027 121.788 48.5289 122.158 48.8424C122.533 49.1503 122.995 49.3042 123.544 49.3042ZM134.768 35.8395V51.6155H131.487V35.8395H134.768ZM141.757 51.8079C140.858 51.8079 140.044 51.577 139.315 51.1145C138.591 50.6477 138.016 49.962 137.589 49.0579C137.168 48.1489 136.958 47.0349 136.958 45.7145C136.958 44.359 137.176 43.2317 137.613 42.3332C138.049 41.4291 138.629 40.7539 139.353 40.3067C140.083 39.8554 140.881 39.6294 141.749 39.6294C142.412 39.6294 142.964 39.742 143.405 39.968C143.852 40.1892 144.212 40.4663 144.484 40.8001C144.761 41.1289 144.972 41.4522 145.116 41.7706H145.216V35.8395H148.49V51.6155H145.254V49.7206H145.116C144.961 50.0495 144.743 50.3755 144.461 50.6988C144.184 51.0172 143.821 51.2817 143.375 51.4924C142.933 51.703 142.394 51.8079 141.757 51.8079ZM142.797 49.1964C143.326 49.1964 143.773 49.053 144.137 48.7654C144.507 48.4729 144.789 48.0642 144.985 47.5401C145.185 47.0167 145.285 46.403 145.285 45.6991C145.285 44.9958 145.188 44.3849 144.992 43.8657C144.797 43.3472 144.515 42.9469 144.145 42.6642C143.775 42.3815 143.326 42.2409 142.797 42.2409C142.258 42.2409 141.803 42.3871 141.433 42.6796C141.064 42.9721 140.784 43.378 140.594 43.8965C140.404 44.4157 140.309 45.0161 140.309 45.6991C140.309 46.3876 140.404 46.9964 140.594 47.5247C140.789 48.0488 141.069 48.4596 141.433 48.7577C141.803 49.0502 142.258 49.1964 142.797 49.1964ZM156.58 51.8464C155.363 51.8464 154.315 51.6001 153.437 51.1068C152.564 50.6093 151.891 49.9053 151.419 48.9963C150.946 48.0824 150.71 47.0013 150.71 45.7536C150.71 44.5361 150.946 43.4682 151.419 42.5487C151.891 41.6293 152.556 40.9127 153.414 40.3998C154.277 39.8862 155.288 39.6294 156.449 39.6294C157.23 39.6294 157.956 39.7553 158.629 40.0065C159.307 40.2528 159.898 40.6258 160.401 41.1233C160.909 41.6216 161.305 42.2486 161.587 43.0029C161.87 43.753 162.011 44.6312 162.011 45.6375V46.5388H152.02V44.5053H158.922C158.922 44.0329 158.819 43.6145 158.614 43.2499C158.408 42.8853 158.123 42.5998 157.759 42.3948C157.399 42.1842 156.981 42.0785 156.503 42.0785C156.005 42.0785 155.563 42.1947 155.178 42.4256C154.798 42.6516 154.5 42.9567 154.284 43.3423C154.069 43.7222 153.958 44.1456 153.953 44.613V46.5465C153.953 47.1322 154.061 47.6381 154.277 48.0642C154.498 48.4904 154.808 48.8193 155.209 49.0502C155.609 49.2811 156.084 49.3973 156.634 49.3973C156.999 49.3973 157.332 49.3455 157.635 49.2426C157.938 49.1405 158.198 48.9858 158.413 48.7808C158.629 48.5751 158.793 48.3238 158.906 48.0257L161.942 48.2259C161.787 48.955 161.472 49.5918 160.994 50.1362C160.522 50.6757 159.91 51.097 159.161 51.4C158.416 51.6974 157.556 51.8464 156.58 51.8464ZM167.434 44.7747V51.6155H164.152V39.7833H167.28V41.8707H167.419C167.68 41.1828 168.12 40.6384 168.736 40.2375C169.352 39.8323 170.099 39.6294 170.977 39.6294C171.799 39.6294 172.515 39.8092 173.127 40.1682C173.738 40.5279 174.213 41.0415 174.552 41.709C174.891 42.3717 175.06 43.1624 175.06 44.0819V51.6155H171.778V44.6669C171.784 43.9434 171.599 43.378 171.224 42.9721C170.849 42.5613 170.333 42.3563 169.676 42.3563C169.234 42.3563 168.844 42.4515 168.505 42.6411C168.171 42.8315 167.909 43.1086 167.719 43.4731C167.534 43.8328 167.439 44.2667 167.434 44.7747Z"
              fill="#0F75BD"
            />
            <path
              d="M182.729 51.6154V35.8394H186.065V42.3485H192.836V35.8394H196.164V51.6154H192.836V45.0986H186.065V51.6154H182.729ZM204.198 51.8463C203.002 51.8463 201.967 51.5923 201.093 51.0836C200.226 50.5707 199.555 49.8562 199.083 48.9423C198.611 48.0229 198.374 46.9578 198.374 45.7459C198.374 44.5234 198.611 43.4549 199.083 42.541C199.555 41.6215 200.226 40.9077 201.093 40.3997C201.967 39.8861 203.002 39.6293 204.198 39.6293C205.395 39.6293 206.427 39.8861 207.295 40.3997C208.168 40.9077 208.84 41.6215 209.313 42.541C209.785 43.4549 210.022 44.5234 210.022 45.7459C210.022 46.9578 209.785 48.0229 209.313 48.9423C208.84 49.8562 208.168 50.5707 207.295 51.0836C206.427 51.5923 205.395 51.8463 204.198 51.8463ZM204.214 49.3041C204.758 49.3041 205.212 49.1502 205.577 48.8423C205.941 48.5288 206.216 48.1026 206.401 47.5638C206.591 47.0243 206.686 46.4106 206.686 45.7221C206.686 45.0342 206.591 44.4205 206.401 43.881C206.216 43.3422 205.941 42.916 205.577 42.6025C205.212 42.2891 204.758 42.133 204.214 42.133C203.664 42.133 203.202 42.2891 202.827 42.6025C202.457 42.916 202.177 43.3422 201.987 43.881C201.802 44.4205 201.71 45.0342 201.71 45.7221C201.71 46.4106 201.802 47.0243 201.987 47.5638C202.177 48.1026 202.457 48.5288 202.827 48.8423C203.202 49.1502 203.664 49.3041 204.214 49.3041ZM212.155 51.6154V39.7832H215.337V41.8475H215.46C215.676 41.1135 216.038 40.5586 216.546 40.1835C217.055 39.8035 217.64 39.6139 218.303 39.6139C218.467 39.6139 218.644 39.6237 218.834 39.6447C219.024 39.665 219.191 39.693 219.335 39.7294V42.641C219.181 42.5949 218.968 42.5536 218.696 42.5179C218.424 42.4822 218.175 42.464 217.948 42.464C217.466 42.464 217.034 42.569 216.654 42.7796C216.28 42.9853 215.981 43.2729 215.76 43.6424C215.545 44.0126 215.437 44.4387 215.437 44.9215V51.6154H212.155ZM224.313 44.7746V51.6154H221.032V39.7832H224.159V41.8706H224.298C224.56 41.1827 224.999 40.6383 225.615 40.2374C226.232 39.8322 226.979 39.6293 227.857 39.6293C228.679 39.6293 229.395 39.8091 230.006 40.1681C230.617 40.5278 231.092 41.0414 231.431 41.709C231.77 42.3716 231.939 43.1624 231.939 44.0818V51.6154H228.658V44.6668C228.663 43.9433 228.478 43.3779 228.103 42.972C227.728 42.5613 227.213 42.3562 226.555 42.3562C226.113 42.3562 225.723 42.4514 225.384 42.641C225.05 42.8314 224.788 43.1085 224.598 43.473C224.414 43.8327 224.318 44.2666 224.313 44.7746ZM239.918 51.8463C238.701 51.8463 237.654 51.6 236.775 51.1067C235.902 50.6092 235.23 49.9052 234.757 48.9962C234.284 48.0824 234.049 47.0012 234.049 45.7536C234.049 44.536 234.284 43.4681 234.757 42.5487C235.23 41.6292 235.894 40.9126 236.752 40.3997C237.615 39.8861 238.626 39.6293 239.787 39.6293C240.568 39.6293 241.295 39.7552 241.967 40.0065C242.645 40.2528 243.236 40.6257 243.739 41.1233C244.247 41.6215 244.643 42.2485 244.926 43.0028C245.208 43.753 245.349 44.6311 245.349 45.6374V46.5387H235.358V44.5052H242.26C242.26 44.0329 242.157 43.6144 241.952 43.2498C241.747 42.8853 241.462 42.5997 241.096 42.3947C240.737 42.1841 240.319 42.0784 239.841 42.0784C239.343 42.0784 238.901 42.1946 238.516 42.4255C238.136 42.6515 237.838 42.9566 237.623 43.3422C237.407 43.7222 237.297 44.1455 237.291 44.613V46.5464C237.291 47.1321 237.399 47.638 237.615 48.0642C237.836 48.4903 238.146 48.8192 238.547 49.0501C238.948 49.281 239.423 49.3972 239.972 49.3972C240.337 49.3972 240.67 49.3454 240.973 49.2425C241.276 49.1404 241.536 48.9857 241.751 48.7807C241.967 48.575 242.131 48.3238 242.245 48.0257L245.28 48.2258C245.126 48.955 244.81 49.5917 244.332 50.1361C243.86 50.6757 243.248 51.0969 242.499 51.3999C241.754 51.6973 240.894 51.8463 239.918 51.8463ZM253.784 39.7832V42.2485H246.659V39.7832H253.784ZM248.276 36.9485H251.558V47.9795C251.558 48.2825 251.604 48.519 251.696 48.6883C251.789 48.8528 251.918 48.9682 252.082 49.0347C252.251 49.1019 252.447 49.1348 252.667 49.1348C252.821 49.1348 252.976 49.1222 253.13 49.0963C253.283 49.0655 253.402 49.0424 253.484 49.027L254 51.4692C253.836 51.5203 253.605 51.5797 253.307 51.6462C253.008 51.7183 252.647 51.7617 252.221 51.7771C251.43 51.8079 250.736 51.7029 250.14 51.4615C249.55 51.2201 249.09 50.845 248.762 50.337C248.433 49.8282 248.271 49.1866 248.276 48.4105V36.9485Z"
              fill="#010201"
            />
          </svg>
        </BubblyLink>
      </div>
      <div className="flex items-center gap-4 right">
        <div className="cart-button relative">
          <BubblyLink to="/cart" colorStart="#0F75BD" colorEnd="#FFCC00">
            {/* cart */}
            <svg
              width={30}
              height={30}
              fill="#1e1e1e"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2.88 3.96a.6.6 0 0 1 .6-.6h1.8a.6.6 0 0 1 .582.455l.486 1.945H20.28a.6.6 0 0 1 .582.746l-1.8 7.2a.6.6 0 0 1-.582.454H7.68a.6.6 0 0 1-.582-.454L4.812 4.56H3.48a.6.6 0 0 1-.6-.6Zm3.768 3 1.5 6h9.864l1.5-6H6.648Zm2.232 9.6a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Zm-2.4 1.2a2.4 2.4 0 1 1 4.8 0 2.4 2.4 0 0 1-4.8 0Zm10.8-1.2a1.2 1.2 0 1 0 0 2.401 1.2 1.2 0 0 0 0-2.4Zm-2.4 1.2a2.4 2.4 0 1 1 4.8 0 2.4 2.4 0 0 1-4.8 0Z" />
            </svg>
            {itemCount > 0 && (
              <div className="absolute top-[-10px] right-[-10px] bg-red-500 text-white rounded-full w-4 h-4 flex justify-center items-center text-xs">
                {itemCount}
              </div>
            )}
          </BubblyLink>
        </div>
        {/* dark/light */}
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
        <div className="dropdown dropdown-end">
          <label
            tabIndex={0}
            className="m-1 border-none btn flex-nowrap bg-transparent hover:bg-transparent"
          >
            <svg
              width={30}
              height={30}
              fill="#1e1e1e"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 12a3.6 3.6 0 1 0 0-7.2 3.6 3.6 0 0 0 0 7.2Zm2.4-3.6a2.4 2.4 0 1 1-4.801 0 2.4 2.4 0 0 1 4.8 0Zm4.8 9.6c0 1.2-1.2 1.2-1.2 1.2H6s-1.2 0-1.2-1.2S6 13.2 12 13.2s7.2 3.6 7.2 4.8Zm-1.2-.005c-.001-.295-.185-1.183-.999-1.997C16.22 15.216 14.747 14.4 12 14.4c-2.748 0-4.22.816-5.002 1.598-.813.814-.996 1.702-.998 1.997h12Z" />
            </svg>
            <svg
              width={25}
              height={25}
              fill="#1e1e1e"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6.724 8.88h11.51l-5.754 6.577L6.724 8.88Zm-.903.79 5.755 6.577a1.198 1.198 0 0 0 1.807 0l5.755-6.576c.68-.777.128-1.991-.903-1.991H6.725a1.2 1.2 0 0 0-.904 1.99Z" />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content w-[17rem] menu p-2 shadow bg-base-100 rounded-box"
          >
            <li>
              <div className="profile-box">
                <svg
                  width={30}
                  height={30}
                  fill="#1e1e1e"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 12a3.6 3.6 0 1 0 0-7.2 3.6 3.6 0 0 0 0 7.2Zm2.4-3.6a2.4 2.4 0 1 1-4.801 0 2.4 2.4 0 0 1 4.8 0Zm4.8 9.6c0 1.2-1.2 1.2-1.2 1.2H6s-1.2 0-1.2-1.2S6 13.2 12 13.2s7.2 3.6 7.2 4.8Zm-1.2-.005c-.001-.295-.185-1.183-.999-1.997C16.22 15.216 14.747 14.4 12 14.4c-2.748 0-4.22.816-5.002 1.598-.813.814-.996 1.702-.998 1.997h12Z" />
                </svg>
                <div className="content">
                  <p>Seif Eldin Sameh</p>
                  <p>seiffsameh00@gmail.com</p>
                </div>
              </div>
            </li>
            <li>
              <BubblyLink to="/home" colorStart="#0F75BD" colorEnd="#FFCC00">
                <svg
                  width={30}
                  height={30}
                  fill="#1e1e1e"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M15.75 9.5a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                  <path
                    fillRule="evenodd"
                    d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm10-8.75a8.75 8.75 0 0 0-6.835 14.212C6.053 16.032 8.006 14.5 12 14.5c3.994 0 5.946 1.531 6.835 2.962A8.75 8.75 0 0 0 12 3.25Z"
                    clipRule="evenodd"
                  />
                </svg>
                Profile Details
              </BubblyLink>
            </li>
            <li>
              <BubblyLink to="/home" colorStart="#0F75BD" colorEnd="#FFCC00">
                <svg
                  width={30}
                  height={30}
                  fill="#1e1e1e"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 20.75a8.75 8.75 0 1 1 0-17.5 8.75 8.75 0 0 1 0 17.5ZM12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z" />
                  <path d="m13.162 10.235-2.862.359-.103.475.563.103c.367.088.44.22.36.587l-.923 4.335c-.242 1.121.132 1.648 1.01 1.648.682 0 1.473-.315 1.832-.747l.11-.52c-.25.22-.615.307-.858.307-.344 0-.469-.24-.38-.666l1.251-5.881Zm.088-2.61a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z" />
                </svg>
                Help Center
              </BubblyLink>
            </li>
            <li>
              <BubblyLink to="/" colorStart="#0F75BD" colorEnd="#FFCC00">
                <svg
                  width={30}
                  height={30}
                  fill="#1e1e1e"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.08 17.4a.6.6 0 0 0 .6.6h9.6a.6.6 0 0 0 .6-.6V6.6a.6.6 0 0 0-.6-.6h-9.6a.6.6 0 0 0-.6.6V9a.6.6 0 1 1-1.2 0V6.6a1.8 1.8 0 0 1 1.8-1.8h9.6a1.8 1.8 0 0 1 1.8 1.8v10.8a1.8 1.8 0 0 1-1.8 1.8h-9.6a1.8 1.8 0 0 1-1.8-1.8V15a.6.6 0 1 1 1.2 0v2.4Z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M3.054 12.424a.6.6 0 0 1 0-.85l3.6-3.6a.6.6 0 1 1 .85.85L4.927 11.4H15.48a.6.6 0 1 1 0 1.2H4.927l2.577 2.575a.6.6 0 1 1-.85.85l-3.6-3.6Z"
                    clipRule="evenodd"
                  />
                </svg>
                Log Out
              </BubblyLink>
            </li>
          </ul>
        </div>
        <MobileMenu />
      </div>
    </header>
  );
};

export default HeaderHome;