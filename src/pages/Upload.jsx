import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import { BubblyLink } from "react-bubbly-transitions";
import * as Yup from "yup";

// validation
const validationSchema = Yup.object().shape({
  image: Yup.mixed().required("Image file is required"),
});

const Upload = () => {
  const navigate = useNavigate();
  // handle submit
  const handleSubmit = (values) => {
    console.log(values);
    setTimeout(() => {
      navigate("/success");
    }, 1000);
  };
  return (
    <section className="upload flex flex-col justify-center items-center gap-4 min-h-screen">
      <svg
        width="300"
        height="134"
        viewBox="0 0 390 134"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M27.0658 66.0496C30.7108 63.4934 34.0354 61.3263 34.476 61.1596C34.8765 61.0484 35.5174 61.104 35.8779 61.3263C36.2384 61.5485 36.7591 62.1042 37.0395 62.6043C37.2798 63.1045 37.4401 64.1045 37.3199 64.8828C37.1597 65.9943 36.3586 66.7719 33.5147 68.7722C31.1514 70.4394 29.8296 71.6621 29.7094 72.3844C29.5893 72.9955 29.6293 73.8844 29.8296 74.3295C29.9898 74.7739 31.7923 76.663 33.8351 78.4968C36.9994 81.386 37.5202 82.053 37.5202 83.3311C37.5202 84.2206 37.1997 85.3314 36.7991 85.8871C36.4387 86.4429 35.7578 86.832 35.3172 86.832C34.8765 86.832 31.3117 83.9428 27.4263 80.4418C20.657 74.3848 20.2965 73.9403 20.3766 72.3844C20.4167 70.7726 20.7772 70.4394 27.0658 66.0496Z"
          fill="#0F75BD"
        />
        <path
          d="M104.79 78.6704C101.145 81.2265 97.8209 83.3934 97.3801 83.5607C96.9799 83.6713 96.3389 83.616 95.9781 83.3934C95.6179 83.1715 95.097 82.6158 94.8168 82.1154C94.5761 81.6156 94.416 80.6155 94.536 79.8372C94.6961 78.7257 95.4978 77.9481 98.3412 75.9477C100.704 74.2806 102.026 73.0578 102.146 72.3355C102.267 71.7245 102.226 70.8356 102.026 70.3905C101.866 69.946 100.064 68.0569 98.021 66.2232C94.8568 63.3336 94.3359 62.6668 94.3359 61.3888C94.3359 60.4997 94.6561 59.3883 95.0569 58.8326C95.4171 58.2769 96.0981 57.8879 96.539 57.8879C96.9799 57.8879 100.544 60.7775 104.43 64.2781C111.199 70.3352 111.56 70.7796 111.48 72.3355C111.44 73.9474 111.079 74.2806 104.79 78.6704Z"
          fill="#0F75BD"
        />
        <path
          d="M40.7535 4.43022C40.6685 3.15227 41.0938 1.61874 41.7745 1.02236C42.4551 0.425983 44.1567 0 45.603 0C47.73 0 48.9211 0.937159 57.5141 11.8424L60.2363 9.37165C61.7677 7.92331 63.6399 6.81572 64.3202 6.81572C65.001 6.81572 66.7028 7.75287 68.1488 8.94562C70.6163 10.9904 70.7861 10.9904 72.4879 9.54202C73.424 8.77524 75.6356 6.30455 77.3375 4.00424C79.9748 0.681572 80.9109 0 83.208 0C85.25 0 86.3558 0.596376 87.2919 2.12992C88.4826 4.08944 88.3977 4.51542 87.1215 6.81572C86.2709 8.1789 83.8882 11.4163 77.9328 18.8284L84.4842 25.3886C89.7588 30.5856 91.1205 32.4599 91.1205 34.5046C91.1205 36.7197 89.3338 38.8496 78.7841 49.1584C68.9145 58.9561 66.022 61.3415 64.3202 61.086C62.8742 61.0007 58.2799 56.9113 49.857 48.562C40.4132 39.1052 37.5205 35.6974 37.5205 34.0787C37.5205 32.5451 39.4773 30.0744 50.7077 18.9137L45.8583 12.8647C42.7955 9.11606 40.8386 5.87856 40.7535 4.43022Z"
          fill="#010201"
        />
        <path
          d="M0.0050886 70.835C-0.165056 69.648 3.91858 65.0694 14.2128 54.98C23.2308 46.0776 29.2712 40.7361 30.3772 40.7361C31.4832 40.7361 37.7789 46.4167 47.8178 56.4214C56.4956 65.0694 63.897 72.1064 64.4074 72.1064C64.9179 72.1064 72.3197 65.0694 80.9976 56.4214C91.0365 46.3319 97.3319 40.7361 98.4383 40.7361C99.5441 40.7361 105.329 45.9079 114.432 54.98C123.366 63.8825 128.64 69.7326 128.64 70.835C128.64 71.8521 123.535 77.6177 115.198 85.9268C107.881 93.2181 101.501 99.2379 100.991 99.2379C100.48 99.2379 99.1185 98.1355 97.7575 96.864C96.4813 95.5925 95.4604 94.2359 95.4604 93.7267C95.4604 93.2181 100.565 87.8766 118.006 70.4955L108.647 61.0846C103.457 55.9126 99.0336 51.7581 98.6935 51.7581C98.2679 51.7581 88.4842 61.4237 76.7435 73.1243C65.0883 84.909 55.4747 94.829 55.4747 95.1685C55.4747 95.5926 59.4731 95.8468 64.4074 95.8468C69.3424 95.8468 73.3406 95.5926 73.3406 95.1685C73.3406 94.829 72.2348 93.5576 68.6615 89.9116L71.6388 86.944C73.2557 85.2484 74.872 84.0615 75.2121 84.1461C75.5528 84.3158 80.4023 88.979 96.4813 104.749L81.6784 119.417C69.172 131.795 66.5348 134 64.4074 134C62.2807 134 59.6435 131.795 32.4191 104.749L58.0273 79.3132L30.3772 51.7581L21.189 60.6607C16.1696 65.578 12.0859 70.0721 12.0859 70.5807C12.0859 71.1738 16.8501 76.4307 22.7204 82.2808C28.5907 88.1309 33.3549 93.2181 33.3549 93.7267C33.3549 94.2359 32.2489 95.5926 30.9728 96.9486C29.6967 98.2207 28.2503 99.2379 27.825 99.2379C27.3996 99.2379 20.9338 93.2181 13.6172 85.9268C6.21567 78.5503 0.0901448 71.7676 0.0050886 70.835Z"
          fill="#010201"
        />
        <path
          d="M55.7466 94.8221C55.6661 94.4867 57.5981 92.0582 60.1739 89.4614L64.8435 84.688L68.8683 89.6291C71.1222 92.3094 72.9739 94.7379 72.8936 94.9897C72.8127 95.2409 69.0295 95.408 64.3605 95.408C59.6909 95.408 55.8271 95.1568 55.7466 94.8221Z"
          fill="#FFCC00"
        />
        <path
          d="M48.2414 34.3039C48.1552 33.8693 51.5176 30.0449 55.7421 25.8728C60.053 21.7006 63.9328 18.2239 64.3634 18.2239C64.8807 18.2239 68.6745 21.7006 72.8129 25.8728C76.9513 30.0449 80.3997 33.8693 80.3997 34.3039C80.3997 34.8254 76.9513 38.6498 72.8129 42.822C68.6745 46.9941 64.8807 50.3839 64.3634 50.3839C63.9328 50.3839 60.139 46.9941 56.0007 42.822C51.8624 38.6498 48.4138 34.8254 48.2414 34.3039Z"
          fill="#FFCC00"
        />
        <path
          d="M47.693 106.21C45.6578 104.149 45.6578 104.067 47.1842 102.418C48.7105 100.933 49.8977 100.768 64.1434 100.768C77.5409 100.851 79.7459 101.015 81.0178 102.253C81.8656 102.994 82.5442 104.067 82.5442 104.479C82.459 104.974 81.781 105.963 81.0178 106.788C79.6607 108.107 77.7953 108.272 64.6522 108.272C49.9824 108.272 49.8128 108.189 47.693 106.21Z"
          fill="#FFCC00"
        />
        <path
          d="M61.2841 120.737C60.0126 119.421 57.9782 117.228 56.7915 115.913L54.6724 113.632H63.827C68.8277 113.632 72.8964 113.983 72.8964 114.334C72.8964 114.684 71.1163 116.878 68.9122 119.158C66.7088 121.439 64.5899 123.28 64.2504 123.28C63.9115 123.28 62.5555 122.14 61.2841 120.737Z"
          fill="#FFCC00"
        />
        <path
          d="M171.891 62.7164C171.726 62.1418 171.493 61.6348 171.194 61.1942C170.895 60.7461 170.53 60.3677 170.097 60.0611C169.672 59.747 169.184 59.5068 168.634 59.3417C168.091 59.1767 167.489 59.0941 166.828 59.0941C165.593 59.0941 164.507 59.4007 163.571 60.0139C162.643 60.6281 161.919 61.5211 161.4 62.6928C160.88 63.857 160.621 65.2817 160.621 66.9647C160.621 68.6489 160.876 70.081 161.388 71.2602C161.899 72.4405 162.623 73.3421 163.559 73.9628C164.495 74.577 165.601 74.8836 166.875 74.8836C168.032 74.8836 169.019 74.6789 169.837 74.2704C170.663 73.8534 171.293 73.267 171.726 72.5113C172.166 71.7566 172.386 70.8636 172.386 69.8323L173.425 69.9856H167.194V66.1393H177.307V69.1838C177.307 71.3074 176.859 73.133 175.962 74.6595C175.065 76.1775 173.83 77.3503 172.257 78.1757C170.683 78.9947 168.881 79.4032 166.852 79.4032C164.586 79.4032 162.595 78.9036 160.88 77.9045C159.165 76.8979 157.828 75.47 156.868 73.6208C155.916 71.7641 155.44 69.5611 155.44 67.0119C155.44 65.0534 155.723 63.3071 156.29 61.773C156.864 60.2304 157.666 58.9247 158.697 57.8549C159.728 56.785 160.927 55.9703 162.296 55.4118C163.665 54.8533 165.148 54.5735 166.745 54.5735C168.114 54.5735 169.389 54.7739 170.569 55.1759C171.749 55.5694 172.796 56.1279 173.708 56.8515C174.629 57.5751 175.38 58.437 175.962 59.4361C176.544 60.4277 176.918 61.5211 177.083 62.7164H171.891ZM189.241 79.4267C187.408 79.4267 185.823 79.0376 184.485 78.2583C183.156 77.4725 182.129 76.378 181.405 74.9779C180.682 73.5693 180.32 71.9377 180.32 70.081C180.32 68.2083 180.682 66.5713 181.405 65.1713C182.129 63.7627 183.156 62.6692 184.485 61.891C185.823 61.1041 187.408 60.7107 189.241 60.7107C191.074 60.7107 192.656 61.1041 193.985 61.891C195.323 62.6692 196.353 63.7627 197.077 65.1713C197.801 66.5713 198.163 68.2083 198.163 70.081C198.163 71.9377 197.801 73.5693 197.077 74.9779C196.353 76.378 195.323 77.4725 193.985 78.2583C192.656 79.0376 191.074 79.4267 189.241 79.4267ZM189.265 75.5322C190.099 75.5322 190.795 75.2963 191.354 74.8246C191.912 74.3444 192.333 73.6915 192.616 72.8661C192.908 72.0396 193.053 71.0994 193.053 70.0446C193.053 68.9908 192.908 68.0507 192.616 67.2242C192.333 66.3987 191.912 65.7459 191.354 65.2656C190.795 64.7854 190.099 64.5463 189.265 64.5463C188.423 64.5463 187.715 64.7854 187.141 65.2656C186.574 65.7459 186.146 66.3987 185.854 67.2242C185.571 68.0507 185.43 68.9908 185.43 70.0446C185.43 71.0994 185.571 72.0396 185.854 72.8661C186.146 73.6915 186.574 74.3444 187.141 74.8246C187.715 75.2963 188.423 75.5322 189.265 75.5322ZM206.459 54.9047V79.073H201.432V54.9047H206.459ZM217.166 79.3678C215.789 79.3678 214.542 79.014 213.425 78.3054C212.316 77.5904 211.434 76.5398 210.781 75.1548C210.136 73.7623 209.814 72.0557 209.814 70.0328C209.814 67.9563 210.148 66.2293 210.817 64.8529C211.485 63.4679 212.374 62.4334 213.484 61.7484C214.601 61.057 215.824 60.7107 217.154 60.7107C218.169 60.7107 219.015 60.8833 219.691 61.2295C220.376 61.5683 220.926 61.9928 221.343 62.5042C221.768 63.008 222.091 63.5033 222.311 63.991H222.464V54.9047H227.48V79.073H222.524V76.17H222.311C222.075 76.6739 221.741 77.1734 221.308 77.6687C220.883 78.1564 220.329 78.5616 219.644 78.8843C218.967 79.207 218.141 79.3678 217.166 79.3678ZM218.759 75.3671C219.569 75.3671 220.254 75.1473 220.812 74.7067C221.379 74.2586 221.812 73.6326 222.111 72.8296C222.417 72.0278 222.571 71.0876 222.571 70.0092C222.571 68.9319 222.421 67.996 222.122 67.2006C221.823 66.4062 221.391 65.793 220.824 65.3599C220.258 64.9269 219.569 64.7114 218.759 64.7114C217.933 64.7114 217.237 64.9354 216.67 65.3835C216.104 65.8316 215.675 66.4534 215.384 67.2477C215.093 68.0432 214.947 68.9629 214.947 70.0092C214.947 71.0641 215.093 71.9967 215.384 72.8061C215.683 73.609 216.112 74.2383 216.67 74.6949C217.237 75.143 217.933 75.3671 218.759 75.3671ZM239.874 79.4267C238.01 79.4267 236.405 79.0494 235.059 78.2936C233.722 77.5314 232.691 76.453 231.967 75.0605C231.244 73.6605 230.882 72.0042 230.882 70.0928C230.882 68.2276 231.244 66.5917 231.967 65.1831C232.691 63.7745 233.71 62.6767 235.024 61.891C236.346 61.1041 237.895 60.7107 239.674 60.7107C240.869 60.7107 241.983 60.9037 243.013 61.2885C244.052 61.6658 244.956 62.2372 245.728 62.9994C246.506 63.7627 247.112 64.7232 247.545 65.8788C247.978 67.028 248.194 68.3733 248.194 69.9149V71.2956H232.888V68.1804H243.462C243.462 67.4568 243.304 66.8157 242.99 66.2572C242.675 65.6987 242.238 65.2613 241.68 64.9472C241.129 64.6246 240.488 64.4627 239.756 64.4627C238.993 64.4627 238.316 64.6406 237.726 64.9944C237.144 65.3407 236.688 65.8081 236.357 66.3987C236.027 66.9808 235.858 67.6294 235.85 68.3455V71.3074C235.85 72.2047 236.015 72.9797 236.346 73.6326C236.684 74.2854 237.16 74.7893 237.773 75.143C238.387 75.4968 239.115 75.6747 239.957 75.6747C240.515 75.6747 241.027 75.5954 241.491 75.4378C241.955 75.2813 242.352 75.0444 242.683 74.7303C243.013 74.4151 243.265 74.0303 243.438 73.5736L248.088 73.8802C247.852 74.9972 247.368 75.9728 246.636 76.8068C245.912 77.6333 244.976 78.2786 243.828 78.7428C242.687 79.1984 241.369 79.4267 239.874 79.4267ZM256.502 68.5931V79.073H251.475V60.9465H256.266V64.1443H256.478C256.88 63.0905 257.552 62.2565 258.496 61.6423C259.44 61.0216 260.585 60.7107 261.93 60.7107C263.19 60.7107 264.286 60.9862 265.223 61.5361C266.159 62.0871 266.887 62.874 267.406 63.8967C267.926 64.9119 268.185 66.1232 268.185 67.5318V79.073H263.157V68.428C263.166 67.3196 262.882 66.4534 262.308 65.8316C261.734 65.2024 260.943 64.8883 259.936 64.8883C259.259 64.8883 258.662 65.0341 258.142 65.3246C257.631 65.6162 257.23 66.0407 256.939 66.5992C256.655 67.1502 256.51 67.8148 256.502 68.5931Z"
          fill="#0F75BD"
        />
        <path
          d="M279.933 79.0728V54.9045H285.043V64.8763H295.416V54.9045H300.514V79.0728H295.416V69.0892H285.043V79.0728H279.933ZM312.823 79.4265C310.99 79.4265 309.405 79.0374 308.067 78.2581C306.737 77.4723 305.71 76.3778 304.987 74.9777C304.263 73.5691 303.901 71.9375 303.901 70.0808C303.901 68.2081 304.263 66.5711 304.987 65.1711C305.71 63.7625 306.737 62.669 308.067 61.8908C309.405 61.1039 310.99 60.7105 312.823 60.7105C314.656 60.7105 316.237 61.1039 317.567 61.8908C318.905 62.669 319.935 63.7625 320.658 65.1711C321.382 66.5711 321.744 68.2081 321.744 70.0808C321.744 71.9375 321.382 73.5691 320.658 74.9777C319.935 76.3778 318.905 77.4723 317.567 78.2581C316.237 79.0374 314.656 79.4265 312.823 79.4265ZM312.847 75.532C313.681 75.532 314.376 75.2961 314.935 74.8244C315.493 74.3442 315.915 73.6913 316.198 72.8659C316.489 72.0394 316.634 71.0992 316.634 70.0444C316.634 68.9906 316.489 68.0505 316.198 67.224C315.915 66.3985 315.493 65.7457 314.935 65.2654C314.376 64.7852 313.681 64.5461 312.847 64.5461C312.004 64.5461 311.297 64.7852 310.722 65.2654C310.156 65.7457 309.727 66.3985 309.436 67.224C309.153 68.0505 309.011 68.9906 309.011 70.0444C309.011 71.0992 309.153 72.0394 309.436 72.8659C309.727 73.6913 310.156 74.3442 310.722 74.8244C311.297 75.2961 312.004 75.532 312.847 75.532ZM325.013 79.0728V60.9463H329.887V64.1087H330.076C330.406 62.9842 330.961 62.1341 331.74 61.5595C332.519 60.9774 333.415 60.6869 334.43 60.6869C334.682 60.6869 334.954 60.7019 335.245 60.7341C335.536 60.7652 335.792 60.8081 336.012 60.8638V65.3244C335.776 65.2536 335.45 65.1904 335.033 65.1357C334.616 65.081 334.234 65.0532 333.888 65.0532C333.148 65.0532 332.487 65.214 331.905 65.5366C331.331 65.8518 330.875 66.2924 330.536 66.8584C330.206 67.4255 330.041 68.0784 330.041 68.818V79.0728H325.013ZM343.639 68.5929V79.0728H338.611V60.9463H343.402V64.1441H343.615C344.016 63.0903 344.688 62.2563 345.633 61.6421C346.577 61.0214 347.722 60.7105 349.067 60.7105C350.326 60.7105 351.424 60.986 352.36 61.5359C353.295 62.0869 354.023 62.8738 354.543 63.8965C355.062 64.9117 355.322 66.123 355.322 67.5316V79.0728H350.294V68.4278C350.302 67.3194 350.019 66.4532 349.445 65.8314C348.87 65.2022 348.08 64.8881 347.072 64.8881C346.396 64.8881 345.798 65.0339 345.279 65.3244C344.768 65.616 344.366 66.0405 344.075 66.599C343.792 67.15 343.646 67.8146 343.639 68.5929ZM367.544 79.4265C365.68 79.4265 364.075 79.0492 362.73 78.2934C361.392 77.5312 360.362 76.4528 359.637 75.0603C358.914 73.6603 358.553 72.004 358.553 70.0926C358.553 68.2274 358.914 66.5915 359.637 65.1829C360.362 63.7743 361.38 62.6765 362.695 61.8908C364.016 61.1039 365.566 60.7105 367.344 60.7105C368.54 60.7105 369.653 60.9035 370.683 61.2883C371.722 61.6656 372.627 62.237 373.398 62.9992C374.177 63.7625 374.783 64.723 375.216 65.8786C375.648 67.0278 375.864 68.3731 375.864 69.9147V71.2954H360.558V68.1802H371.132C371.132 67.4566 370.975 66.8155 370.66 66.257C370.346 65.6985 369.909 65.2611 369.35 64.947C368.8 64.6244 368.159 64.4625 367.427 64.4625C366.663 64.4625 365.987 64.6404 365.397 64.9942C364.815 65.3405 364.358 65.8079 364.028 66.3985C363.697 66.9806 363.529 67.6292 363.52 68.3453V71.3072C363.52 72.2045 363.685 72.9795 364.016 73.6324C364.354 74.2852 364.83 74.7891 365.444 75.1428C366.058 75.4966 366.785 75.6745 367.627 75.6745C368.186 75.6745 368.697 75.5952 369.161 75.4376C369.625 75.2811 370.023 75.0442 370.353 74.7301C370.683 74.4149 370.935 74.0301 371.109 73.5734L375.758 73.88C375.522 74.997 375.039 75.9726 374.307 76.8066C373.583 77.6331 372.646 78.2784 371.498 78.7426C370.357 79.1982 369.04 79.4265 367.544 79.4265ZM388.786 60.9463V64.723H377.871V60.9463H388.786ZM380.348 56.6037H385.376V73.5027C385.376 73.9668 385.447 74.3292 385.588 74.5886C385.73 74.8405 385.927 75.0174 386.179 75.1192C386.438 75.2222 386.738 75.2725 387.075 75.2725C387.311 75.2725 387.548 75.2532 387.784 75.2136C388.02 75.1664 388.201 75.131 388.326 75.1074L389.117 78.8487C388.865 78.927 388.512 79.0181 388.055 79.12C387.598 79.2304 387.044 79.2968 386.391 79.3204C385.18 79.3676 384.118 79.2068 383.204 78.8369C382.299 78.4671 381.596 77.8925 381.092 77.1142C380.589 76.3349 380.341 75.3519 380.348 74.163V56.6037Z"
          fill="#010201"
        />
      </svg>
      <div className="box bg-white border-2 border-[#1e1e1e] border-solid flex flex-col justify-center items-center gap-6 py-4 px-6 rounded-2xl">
        <h1 className="text-3xl font-bold">Profile Picture</h1>
        <Formik
          initialValues={{ image: null }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="flex flex-col justify-center items-center gap-8">
              <div>
                <label
                  htmlFor="image"
                  className="block text-[#1e1e1e] dark:text-white font-bold mb-2"
                >
                  Upload Profile Picture
                </label>
                <Field name="image" type="file" accept="image/*" />
                <ErrorMessage name="image">
                  {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                </ErrorMessage>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="submit-btn bg-[#ffcc00] border-2 border-[#1e1e1e] dark:border-white border-solid w-full text-[#1e1e1e] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </Form>
          )}
        </Formik>
        <BubblyLink to="/success" colorStart="#0F75BD" colorEnd="#FFCC00">
          skip
          <svg
            width={30}
            height={30}
            fill="#0f75bd"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3.25 12a8.75 8.75 0 1 0 17.5 0 8.75 8.75 0 0 0-17.5 0ZM22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0Zm-14.375-.625a.625.625 0 1 0 0 1.25h7.241l-2.684 2.682a.627.627 0 0 0 .886.885l3.75-3.75a.625.625 0 0 0 0-.885l-3.75-3.75a.626.626 0 1 0-.886.886l2.684 2.682H7.625Z"
              clipRule="evenodd"
            />
          </svg>
        </BubblyLink>
      </div>
    </section>
  );
};

export default Upload;
