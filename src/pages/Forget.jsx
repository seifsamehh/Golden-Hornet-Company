import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import forget from "../assets/forgetImage.png";
import { BubblyLink } from "react-bubbly-transitions";

// validation
const validationSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
});

const Forget = () => {
  const navigate = useNavigate();
  // handle submit
  const handleSubmit = (values) => {
    console.log(values);
    setTimeout(() => {
      navigate("/otp");
    }, 1000);
  };
  return (
    <section className="forget flex items-center gap-12 min-[290px]:flex-wrap md:flex-nowrap min-h-screen">
      <div className="min-[290px]:w-full md:w-1/2 min-[290px]:p-4 md:ml-6 left">
        <BubblyLink to="/" colorStart="#0F75BD" colorEnd="#FFCC00">
          <svg
            width="300"
            height="111"
            viewBox="0 0 322 111"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.3973 54.6569C25.4137 52.5417 28.1648 50.7483 28.5294 50.6104C28.8609 50.5184 29.3912 50.5644 29.6895 50.7483C29.9878 50.9322 30.4187 51.3921 30.6508 51.8059C30.8496 52.2198 30.9822 53.0474 30.8827 53.6914C30.7502 54.6111 30.0873 55.2546 27.7339 56.91C25.7782 58.2896 24.6844 59.3014 24.585 59.8991C24.4856 60.4048 24.5187 61.1403 24.6844 61.5086C24.817 61.8764 26.3086 63.4397 27.999 64.9571C30.6176 67.348 31.0485 67.9 31.0485 68.9576C31.0485 69.6937 30.7833 70.6129 30.4518 71.0728C30.1536 71.5326 29.5901 71.8547 29.2255 71.8547C28.8608 71.8547 25.9109 69.4638 22.6957 66.5667C17.094 61.5544 16.7956 61.1866 16.8619 59.8991C16.8951 58.5653 17.1934 58.2896 22.3973 54.6569Z"
              fill="#0F75BD"
            />
            <path
              d="M86.7156 65.1009C83.6992 67.2161 80.9483 69.0092 80.5835 69.1476C80.2523 69.2392 79.7219 69.1934 79.4233 69.0092C79.1253 68.8256 78.6942 68.3657 78.4624 67.9517C78.2632 67.5381 78.1307 66.7104 78.23 66.0664C78.3625 65.1467 79.0259 64.5032 81.3789 62.8478C83.3344 61.4682 84.4284 60.4564 84.5277 59.8587C84.6276 59.353 84.5939 58.6175 84.4284 58.2491C84.2959 57.8813 82.8045 56.3181 81.1139 54.8006C78.4955 52.4095 78.0645 51.8577 78.0645 50.8001C78.0645 50.0643 78.3294 49.1446 78.6611 48.6848C78.9592 48.225 79.5227 47.9031 79.8875 47.9031C80.2523 47.9031 83.2019 50.2942 86.417 53.1911C92.0187 58.2034 92.3173 58.5711 92.251 59.8587C92.2179 61.1925 91.9193 61.4682 86.7156 65.1009Z"
              fill="#0F75BD"
            />
            <path
              d="M33.7237 3.66609C33.6533 2.60857 34.0053 1.33955 34.5686 0.846038C35.1318 0.35253 36.5398 2.28882e-05 37.7367 2.28882e-05C39.4968 2.28882e-05 40.4825 0.775534 47.5933 9.79973L49.846 7.75519C51.1132 6.55667 52.6625 5.64012 53.2254 5.64012C53.7888 5.64012 55.1971 6.41563 56.3936 7.40264C58.4356 9.09469 58.576 9.09469 59.9843 7.89617C60.7589 7.26165 62.5891 5.21712 63.9974 3.31358C66.1798 0.564033 66.9544 2.28882e-05 68.8554 2.28882e-05C70.5451 2.28882e-05 71.4602 0.493532 72.2348 1.76256C73.2201 3.38409 73.1499 3.73659 72.0938 5.64012C71.39 6.76817 69.4182 9.44718 64.4901 15.5808L69.9114 21.0094C74.2762 25.31 75.4031 26.861 75.4031 28.5531C75.4031 30.3861 73.9245 32.1486 65.1945 40.6793C57.0273 48.7869 54.6337 50.761 53.2254 50.5495C52.0289 50.4789 48.227 47.0949 41.2569 40.1858C33.4421 32.3601 31.0483 29.5401 31.0483 28.2006C31.0483 26.9315 32.6676 24.887 41.961 15.6513L37.948 10.6457C35.4134 7.54368 33.7941 4.86461 33.7237 3.66609Z"
              fill="#010201"
            />
            <path
              d="M0.00421088 58.6168C-0.136586 57.6346 3.24267 53.8458 11.7613 45.4966C19.2238 38.1297 24.2223 33.7096 25.1376 33.7096C26.0528 33.7096 31.2625 38.4104 39.5699 46.6894C46.7509 53.8458 52.8756 59.669 53.298 59.669C53.7204 59.669 59.8455 53.8458 67.0266 46.6894C75.3339 38.3402 80.5434 33.7096 81.459 33.7096C82.3741 33.7096 87.1611 37.9894 94.6944 45.4966C102.087 52.8635 106.451 57.7046 106.451 58.6168C106.451 59.4586 102.227 64.2296 95.328 71.1055C89.2732 77.1391 83.9935 82.1206 83.5711 82.1206C83.1487 82.1206 82.0219 81.2084 80.8956 80.1562C79.8396 79.1041 78.9947 77.9814 78.9947 77.56C78.9947 77.1391 83.2189 72.719 97.6513 58.3359L89.9068 50.5482C85.6124 46.2684 81.9516 42.8305 81.6702 42.8305C81.318 42.8305 73.2219 50.8289 63.5063 60.5112C53.8614 70.2632 45.906 78.4722 45.906 78.7532C45.906 79.1041 49.2148 79.3145 53.298 79.3145C57.3817 79.3145 60.6903 79.1041 60.6903 78.7532C60.6903 78.4722 59.7753 77.4201 56.8183 74.403L59.2821 71.9472C60.6201 70.5442 61.9576 69.562 62.239 69.6319C62.521 69.7724 66.5339 73.6312 79.8396 86.6812L67.59 98.819C57.2408 109.062 55.0584 110.887 53.298 110.887C51.5381 110.887 49.3558 109.062 26.8272 86.6812L48.0183 65.6327L25.1376 42.8305L17.5342 50.1975C13.3805 54.2666 10.0012 57.9855 10.0012 58.4064C10.0012 58.8972 13.9437 63.2474 18.8014 68.0884C23.6592 72.9294 27.6016 77.1391 27.6016 77.56C27.6016 77.9814 26.6864 79.1041 25.6304 80.2262C24.5744 81.2789 23.3775 82.1206 23.0255 82.1206C22.6735 82.1206 17.323 77.1391 11.2684 71.1055C5.14355 65.0014 0.074596 59.3886 0.00421088 58.6168Z"
              fill="#010201"
            />
            <path
              d="M46.1309 78.4666C46.0643 78.1891 47.6631 76.1795 49.7946 74.0306L53.6588 70.0805L56.9893 74.1693C58.8544 76.3873 60.3868 78.3969 60.3203 78.6053C60.2534 78.8132 57.1227 78.9514 53.259 78.9514C49.3949 78.9514 46.1976 78.7436 46.1309 78.4666Z"
              fill="#FFCC00"
            />
            <path
              d="M39.9203 28.387C39.849 28.0274 42.6314 24.8626 46.1272 21.4102C49.6946 17.9577 52.9051 15.0806 53.2615 15.0806C53.6896 15.0806 56.829 17.9577 60.2535 21.4102C63.6781 24.8626 66.5318 28.0274 66.5318 28.387C66.5318 28.8186 63.6781 31.9833 60.2535 35.4359C56.829 38.8883 53.6896 41.6934 53.2615 41.6934C52.9051 41.6934 49.7658 38.8883 46.3413 35.4359C42.9167 31.9833 40.063 28.8186 39.9203 28.387Z"
              fill="#FFCC00"
            />
            <path
              d="M39.4664 87.8902C37.7823 86.1845 37.7823 86.1164 39.0454 84.7519C40.3084 83.5235 41.2908 83.3869 53.0793 83.3869C64.166 83.4554 65.9906 83.5915 67.0431 84.6153C67.7447 85.2293 68.3062 86.1164 68.3062 86.4577C68.2357 86.867 67.6747 87.6856 67.0431 88.3681C65.9201 89.4599 64.3765 89.5965 53.5003 89.5965C41.3609 89.5965 41.2206 89.528 39.4664 87.8902Z"
              fill="#FFCC00"
            />
            <path
              d="M50.713 99.9113C49.6608 98.8223 47.9774 97.0079 46.9953 95.9194L45.2417 94.032H52.8173C56.9554 94.032 60.3223 94.3226 60.3223 94.6127C60.3223 94.9028 58.8493 96.7178 57.0254 98.6046C55.202 100.492 53.4486 102.016 53.1676 102.016C52.8872 102.016 51.7651 101.072 50.713 99.9113Z"
              fill="#FFCC00"
            />
            <path
              d="M142.242 51.8986C142.105 51.4231 141.913 51.0035 141.666 50.6389C141.419 50.2681 141.116 49.9549 140.758 49.7012C140.406 49.4413 140.003 49.2426 139.547 49.106C139.098 48.9694 138.6 48.9011 138.053 48.9011C137.031 48.9011 136.132 49.1548 135.357 49.6622C134.589 50.1705 133.99 50.9094 133.561 51.879C133.131 52.8424 132.916 54.0214 132.916 55.4141C132.916 56.8077 133.128 57.9929 133.551 58.9687C133.974 59.9454 134.573 60.6914 135.348 61.2051C136.122 61.7134 137.037 61.9671 138.092 61.9671C139.049 61.9671 139.866 61.7976 140.543 61.4597C141.227 61.1146 141.747 60.6293 142.105 60.0039C142.47 59.3794 142.652 58.6405 142.652 57.7871L143.512 57.9139H138.355V54.731H146.725V57.2504C146.725 59.0077 146.353 60.5184 145.611 61.7817C144.869 63.0378 143.847 64.0083 142.545 64.6913C141.243 65.3691 139.752 65.7071 138.072 65.7071C136.197 65.7071 134.55 65.2937 133.131 64.4669C131.712 63.6339 130.605 62.4523 129.811 60.9221C129.023 59.3856 128.629 57.5626 128.629 55.4531C128.629 53.8324 128.863 52.3873 129.332 51.1179C129.807 49.8414 130.471 48.7609 131.324 47.8756C132.177 46.9903 133.17 46.3161 134.303 45.8539C135.436 45.3917 136.663 45.1602 137.984 45.1602C139.117 45.1602 140.172 45.3261 141.148 45.6587C142.125 45.9843 142.991 46.4465 143.746 47.0453C144.508 47.6441 145.129 48.3573 145.611 49.1841C146.093 50.0046 146.402 50.9095 146.539 51.8986H142.242ZM156.6 65.7266C155.083 65.7266 153.771 65.4046 152.664 64.7597C151.564 64.1094 150.715 63.2037 150.116 62.0451C149.517 60.8795 149.217 59.5293 149.217 57.9929C149.217 56.4431 149.517 55.0885 150.116 53.93C150.715 52.7644 151.564 51.8595 152.664 51.2155C153.771 50.5644 155.083 50.2388 156.6 50.2388C158.117 50.2388 159.426 50.5644 160.526 51.2155C161.633 51.8595 162.485 52.7644 163.084 53.93C163.683 55.0885 163.983 56.4431 163.983 57.9929C163.983 59.5293 163.683 60.8795 163.084 62.0451C162.485 63.2037 161.633 64.1094 160.526 64.7597C159.426 65.4046 158.117 65.7266 156.6 65.7266ZM156.62 62.5038C157.31 62.5038 157.886 62.3086 158.348 61.9183C158.81 61.5209 159.159 60.9806 159.393 60.2976C159.634 59.6136 159.754 58.8356 159.754 57.9627C159.754 57.0907 159.634 56.3127 159.393 55.6288C159.159 54.9457 158.81 54.4055 158.348 54.0081C157.886 53.6106 157.31 53.4128 156.62 53.4128C155.923 53.4128 155.337 53.6106 154.862 54.0081C154.393 54.4055 154.038 54.9457 153.797 55.6288C153.563 56.3127 153.446 57.0907 153.446 57.9627C153.446 58.8356 153.563 59.6136 153.797 60.2976C154.038 60.9806 154.393 61.5209 154.862 61.9183C155.337 62.3086 155.923 62.5038 156.62 62.5038ZM170.848 45.4343V65.4338H166.688V45.4343H170.848ZM179.708 65.6778C178.569 65.6778 177.537 65.385 176.612 64.7987C175.694 64.207 174.965 63.3376 174.425 62.1915C173.891 61.0392 173.624 59.6269 173.624 57.953C173.624 56.2347 173.901 54.8056 174.454 53.6665C175.007 52.5204 175.743 51.6644 176.661 51.0975C177.585 50.5253 178.598 50.2388 179.698 50.2388C180.538 50.2388 181.238 50.3816 181.798 50.6682C182.364 50.9485 182.82 51.2998 183.165 51.7229C183.516 52.1399 183.783 52.5497 183.966 52.9533H184.093V45.4343H188.243V65.4338H184.141V63.0316H183.966C183.77 63.4485 183.494 63.8619 183.136 64.2718C182.784 64.6754 182.325 65.0107 181.759 65.2777C181.199 65.5447 180.515 65.6778 179.708 65.6778ZM181.026 62.3672C181.697 62.3672 182.263 62.1853 182.725 61.8207C183.194 61.4499 183.552 60.9318 183.8 60.2674C184.054 59.6039 184.181 58.8259 184.181 57.9335C184.181 57.0419 184.057 56.2675 183.809 55.6093C183.562 54.9519 183.204 54.4445 182.735 54.0861C182.266 53.7277 181.697 53.5494 181.026 53.5494C180.343 53.5494 179.766 53.7348 179.298 54.1056C178.829 54.4764 178.474 54.991 178.233 55.6483C177.992 56.3065 177.872 57.0677 177.872 57.9335C177.872 58.8064 177.992 59.5781 178.233 60.2479C178.481 60.9123 178.836 61.433 179.298 61.8109C179.766 62.1818 180.343 62.3672 181.026 62.3672ZM198.499 65.7266C196.956 65.7266 195.628 65.4143 194.515 64.7889C193.408 64.1582 192.555 63.2658 191.956 62.1135C191.357 60.9549 191.058 59.5843 191.058 58.0027C191.058 56.4591 191.357 55.1054 191.956 53.9398C192.555 52.7741 193.398 51.8657 194.486 51.2155C195.579 50.5644 196.862 50.2388 198.333 50.2388C199.323 50.2388 200.244 50.3985 201.097 50.717C201.956 51.0292 202.705 51.502 203.343 52.1327C203.988 52.7644 204.489 53.5592 204.847 54.5155C205.205 55.4665 205.384 56.5798 205.384 57.8554V58.998H192.718V56.4201H201.468C201.468 55.8213 201.338 55.2908 201.077 54.8286C200.817 54.3665 200.456 54.0045 199.993 53.7446C199.538 53.4776 199.007 53.3436 198.402 53.3436C197.77 53.3436 197.21 53.4909 196.722 53.7836C196.24 54.0702 195.863 54.4569 195.589 54.9457C195.316 55.4274 195.176 55.9641 195.169 56.5567V59.0077C195.169 59.7502 195.306 60.3916 195.579 60.9318C195.859 61.4721 196.253 61.889 196.761 62.1818C197.269 62.4745 197.871 62.6218 198.568 62.6218C199.03 62.6218 199.453 62.5561 199.837 62.4257C200.221 62.2962 200.55 62.1001 200.824 61.8402C201.097 61.5794 201.305 61.2609 201.449 60.883L205.296 61.1368C205.101 62.0611 204.701 62.8684 204.095 63.5585C203.496 64.2425 202.721 64.7765 201.771 65.1606C200.827 65.5376 199.736 65.7266 198.499 65.7266ZM212.259 56.7616V65.4338H208.099V50.434H212.064V53.0802H212.239C212.572 52.2082 213.128 51.518 213.909 51.0097C214.691 50.4961 215.638 50.2388 216.751 50.2388C217.793 50.2388 218.701 50.4668 219.476 50.9219C220.25 51.3778 220.853 52.029 221.282 52.8753C221.712 53.7153 221.927 54.7177 221.927 55.8834V65.4338H217.767V56.625C217.774 55.7077 217.539 54.991 217.064 54.4764C216.589 53.9557 215.934 53.6958 215.101 53.6958C214.541 53.6958 214.046 53.8165 213.616 54.0569C213.193 54.2982 212.861 54.6494 212.62 55.1116C212.386 55.5676 212.266 56.1176 212.259 56.7616Z"
              fill="#0F75BD"
            />
            <path
              d="M231.649 65.4337V45.4342H235.878V53.686H244.461V45.4342H248.68V65.4337H244.461V57.1722H235.878V65.4337H231.649ZM258.866 65.7265C257.349 65.7265 256.037 65.4045 254.93 64.7596C253.83 64.1093 252.98 63.2036 252.381 62.045C251.782 60.8794 251.483 59.5292 251.483 57.9928C251.483 56.443 251.782 55.0885 252.381 53.9299C252.98 52.7643 253.83 51.8594 254.93 51.2154C256.037 50.5643 257.349 50.2387 258.866 50.2387C260.383 50.2387 261.691 50.5643 262.791 51.2154C263.898 51.8594 264.751 52.7643 265.35 53.9299C265.948 55.0885 266.248 56.443 266.248 57.9928C266.248 59.5292 265.948 60.8794 265.35 62.045C264.751 63.2036 263.898 64.1093 262.791 64.7596C261.691 65.4045 260.383 65.7265 258.866 65.7265ZM258.885 62.5037C259.576 62.5037 260.151 62.3085 260.613 61.9182C261.076 61.5208 261.424 60.9805 261.658 60.2975C261.9 59.6135 262.019 58.8355 262.019 57.9626C262.019 57.0906 261.9 56.3127 261.658 55.6287C261.424 54.9456 261.076 54.4054 260.613 54.008C260.151 53.6106 259.576 53.4127 258.885 53.4127C258.188 53.4127 257.603 53.6106 257.127 54.008C256.659 54.4054 256.304 54.9456 256.063 55.6287C255.828 56.3127 255.711 57.0906 255.711 57.9626C255.711 58.8355 255.828 59.6135 256.063 60.2975C256.304 60.9805 256.659 61.5208 257.127 61.9182C257.603 62.3085 258.188 62.5037 258.885 62.5037ZM268.953 65.4337V50.4339H272.987V53.0508H273.143C273.416 52.1202 273.876 51.4168 274.52 50.9413C275.164 50.4596 275.906 50.2192 276.746 50.2192C276.955 50.2192 277.179 50.2316 277.42 50.2582C277.661 50.284 277.873 50.3194 278.055 50.3656V54.0568C277.859 53.9982 277.59 53.9459 277.245 53.9006C276.9 53.8554 276.584 53.8323 276.297 53.8323C275.685 53.8323 275.138 53.9654 274.656 54.2324C274.182 54.4932 273.804 54.8578 273.523 55.3262C273.25 55.7955 273.113 56.3357 273.113 56.9478V65.4337H268.953ZM284.366 56.7615V65.4337H280.206V50.4339H284.17V53.0801H284.347C284.679 52.2081 285.235 51.5179 286.016 51.0096C286.798 50.496 287.745 50.2387 288.859 50.2387C289.9 50.2387 290.808 50.4667 291.583 50.9218C292.357 51.3777 292.96 52.0289 293.39 52.8752C293.819 53.7152 294.034 54.7176 294.034 55.8833V65.4337H289.873V56.6249C289.88 55.7077 289.646 54.9909 289.171 54.4764C288.695 53.9556 288.042 53.6957 287.208 53.6957C286.648 53.6957 286.153 53.8164 285.724 54.0568C285.3 54.2981 284.968 54.6493 284.727 55.1115C284.493 55.5675 284.372 56.1175 284.366 56.7615ZM304.148 65.7265C302.606 65.7265 301.278 65.4142 300.165 64.7888C299.057 64.1581 298.205 63.2657 297.605 62.1134C297.006 60.9548 296.708 59.5843 296.708 58.0026C296.708 56.459 297.006 55.1053 297.605 53.9397C298.205 52.774 299.048 51.8656 300.135 51.2154C301.229 50.5643 302.511 50.2387 303.983 50.2387C304.973 50.2387 305.893 50.3984 306.746 50.7169C307.605 51.0291 308.354 51.5019 308.992 52.1327C309.637 52.7643 310.138 53.5591 310.497 54.5154C310.854 55.4664 311.033 56.5797 311.033 57.8553V58.9979H298.367V56.42H307.118C307.118 55.8212 306.987 55.2907 306.726 54.8285C306.466 54.3664 306.105 54.0044 305.642 53.7445C305.187 53.4775 304.657 53.3435 304.051 53.3435C303.419 53.3435 302.86 53.4908 302.372 53.7835C301.89 54.0701 301.512 54.4568 301.239 54.9456C300.965 55.4273 300.825 55.964 300.818 56.5566V59.0076C300.818 59.7501 300.955 60.3915 301.229 60.9317C301.508 61.472 301.902 61.8889 302.411 62.1817C302.918 62.4744 303.52 62.6217 304.217 62.6217C304.679 62.6217 305.102 62.556 305.486 62.4256C305.87 62.2961 306.199 62.1001 306.473 61.8401C306.746 61.5793 306.954 61.2609 307.098 60.883L310.945 61.1367C310.75 62.061 310.35 62.8683 309.744 63.5584C309.145 64.2424 308.37 64.7764 307.42 65.1605C306.476 65.5375 305.386 65.7265 304.148 65.7265ZM321.726 50.4339V53.5591H312.694V50.4339H321.726ZM314.744 46.8402H318.904V60.8244C318.904 61.2085 318.963 61.5084 319.08 61.723C319.197 61.9315 319.36 62.0779 319.569 62.1621C319.784 62.2473 320.031 62.289 320.31 62.289C320.506 62.289 320.702 62.273 320.897 62.2402C321.092 62.2012 321.242 62.1719 321.346 62.1524L322 65.2483C321.792 65.3131 321.499 65.3885 321.121 65.4728C320.743 65.5642 320.285 65.6192 319.744 65.6387C318.742 65.6777 317.863 65.5446 317.107 65.2386C316.358 64.9325 315.777 64.4571 315.36 63.813C314.943 63.1681 314.738 62.3546 314.744 61.3709V46.8402Z"
              fill="#010201"
            />
          </svg>
        </BubblyLink>
        <h1 className="text-3xl font-bold">Email Address</h1>
        <img src={forget} alt="forget image" />
        <p>First, tell us what is your email address</p>
        <Formik
          initialValues={{ email: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="form-control">
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
                  className="mt-2 text-red-500"
                />
              </div>
              <button
                type="submit"
                className="submit-btn bg-[#ffcc00] border-2 border-[#1e1e1e] dark:border-white border-solid w-full text-[#1e1e1e] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-6"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Continue"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
      <div className="right w-full bg-[#ffcc00]"></div>
    </section>
  );
};

export default Forget;
