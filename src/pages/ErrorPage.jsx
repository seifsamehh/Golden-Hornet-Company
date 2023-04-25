import { BubblyLink } from "react-bubbly-transitions";

const ErrorPage = () => {
  return (
    <section className="error flex justify-center items-center min-h-screen">
      <div className="box bg-white flex flex-col items-center gap-6 rounded-md p-6">
        <h1 className="text-3xl font-bold">Verification Failed</h1>
        <svg
          width="101"
          height="101"
          viewBox="0 0 101 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_485_3427)">
            <path
              d="M99.5 50.5C99.5 77.562 77.562 99.5 50.5 99.5C23.438 99.5 1.5 77.562 1.5 50.5C1.5 23.438 23.438 1.5 50.5 1.5C77.562 1.5 99.5 23.438 99.5 50.5Z"
              fill="#DD4F4F"
              stroke="black"
              strokeWidth="3"
            />
            <path
              d="M69.9059 73.2913C68.8959 73.2913 67.8875 72.9062 67.1158 72.1361L28.881 33.8997C27.3392 32.3579 27.3392 29.8613 28.881 28.321C30.4228 26.7808 32.9194 26.7792 34.4597 28.321L72.696 66.5574C74.2379 68.0993 74.2379 70.5958 72.696 72.1361C71.9243 72.9062 70.9159 73.2913 69.9059 73.2913Z"
              fill="white"
            />
            <path
              d="M31.6696 73.2913C30.6596 73.2913 29.6512 72.9062 28.8795 72.1361C27.3377 70.5943 27.3377 68.0977 28.8795 66.5574L67.1159 28.321C68.6577 26.7792 71.1543 26.7792 72.6946 28.321C74.2348 29.8629 74.2364 32.3595 72.6946 33.8997L34.4598 72.1361C33.6896 72.9062 32.6796 73.2913 31.6696 73.2913Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_485_3427">
              <rect width="101" height="101" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <BubblyLink to="/forget" colorStart="#0F75BD" colorEnd="#FFCC00">
          Try Again
        </BubblyLink>
      </div>
    </section>
  );
};

export default ErrorPage;
