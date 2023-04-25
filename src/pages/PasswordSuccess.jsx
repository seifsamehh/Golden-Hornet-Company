import { BubblyLink } from "react-bubbly-transitions";

const PasswordSuccess = () => {
  return (
    <section className="flex items-center justify-center min-h-screen password-success">
      <div className="flex flex-col items-center gap-6 p-6 bg-white rounded-md box">
        <h1 className="text-3xl font-bold">
          Your Password is Successfully Changed
        </h1>
        <svg
          width="101"
          height="101"
          viewBox="0 0 101 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_485_4538)">
            <path
              d="M99.5 50.5C99.5 77.562 77.562 99.5 50.5 99.5C23.438 99.5 1.5 77.562 1.5 50.5C1.5 23.438 23.438 1.5 50.5 1.5C77.562 1.5 99.5 23.438 99.5 50.5Z"
              fill="#0F75BD"
              stroke="black"
              stroke-width="3"
            />
            <path
              d="M101.077 19.8788L92.0715 10.9817C90.8424 9.76671 88.8486 9.76671 87.6194 10.9817L49.1253 50.6323L32.525 34.2299C31.2938 33.0149 29.3021 33.0149 28.0719 34.2299L20.0898 42.117C18.8607 43.331 18.8607 45.3005 20.0898 46.5145L46.7326 72.8362C47.4427 73.5381 48.4052 73.8209 49.3304 73.7118C50.2555 73.8199 51.218 73.5381 51.9281 72.8362L101.077 24.2774C102.306 23.0623 102.306 21.0939 101.077 19.8788Z"
              fill="#F8F8F8"
            />
            <path
              d="M51.928 72.8362L101.077 24.2774C102.306 23.0624 102.306 21.0939 101.077 19.8788L99.6071 18.4265L49.0495 68.1538L21.2059 41.0131L20.0908 42.116C18.8617 43.33 18.8617 45.2995 20.0908 46.5135L46.7326 72.8362C47.4426 73.5381 48.4052 73.8209 49.3303 73.7118C50.2555 73.8209 51.218 73.5391 51.928 72.8362Z"
              fill="#EBEBEB"
            />
          </g>
          <defs>
            <clipPath id="clip0_485_4538">
              <rect width="101" height="101" fill="white" />
            </clipPath>
          </defs>
        </svg>

        <BubblyLink to="/login" colorStart="#0F75BD" colorEnd="#FFCC00">
          Sign In
        </BubblyLink>
      </div>
    </section>
  );
};

export default PasswordSuccess;
