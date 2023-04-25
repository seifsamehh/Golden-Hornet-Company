import { useState } from "react";
import { Link } from "react-router-dom";

function MobileNav({ open, setOpen }) {
  return (
    <div
      className={`absolute top-0 left-0 h-screen w-full bg-[#0f75bd]/80 text-white transform ${
        open ? "-translate-y-0" : "-translate-y-[105%]"
      } transition-transform duration-300 ease-in-out filter`}
    >
      <div className="flex flex-col items-center justify-center mt-28">
        <Link
          className="my-3 text-xl"
          to="/home"
          onClick={() => setOpen(false)}
        >
          Home
        </Link>
        <Link
          className="my-3 text-xl"
          to="/cart"
          onClick={() => setOpen(false)}
        >
          Shopping Cart
        </Link>
        <h2 className="text-3xl font-bold text-[#ffcc00]">SERVICES</h2>
        <Link
          className="my-3 text-xl"
          to="/programming"
          onClick={() => setOpen(false)}
        >
          Programming
        </Link>
        <Link
          className="my-3 text-xl"
          to="/marketing"
          onClick={() => setOpen(false)}
        >
          Marketing
        </Link>
        <Link
          className="my-3 text-xl"
          to="/design"
          onClick={() => setOpen(false)}
        >
          Design
        </Link>
        <h2 className="text-3xl font-bold text-[#ffcc00]">PROFILE</h2>
        <Link
          className="my-3 text-xl"
          to="/wallet"
          onClick={() => setOpen(false)}
        >
          Wallet
        </Link>
        <h2 className="text-3xl font-bold text-[#ffcc00]">ABOUT US</h2>
        <Link
          className="my-3 text-xl"
          to="/team"
          onClick={() => setOpen(false)}
        >
          Our Team
        </Link>
        <Link
          className="my-3 text-xl"
          to="/contact"
          onClick={() => setOpen(false)}
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav>
      <MobileNav open={open} setOpen={setOpen} />
      <div className="flex items-center justify-center w-11/12 min-[290px]:block md:hidden">
        <div
          className="relative z-50 flex flex-col items-center justify-between w-6 h-6 cursor-pointer group"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {/* hamburger button */}
          <span
            className={`h-1 w-full bg-[#1e1e1e] rounded-lg cursor-pointer transform transition duration-300 ease-in-out ${
              open ? "rotate-45 translate-y-2.5" : ""
            }`}
          />
          <span
            className={`h-1 w-full bg-[#1e1e1e] rounded-lg cursor-pointer transition-all duration-300 ease-in-out ${
              open ? "hidden" : "w-full"
            }`}
          />
          <span
            className={`h-1 w-full bg-[#1e1e1e] rounded-lg cursor-pointer transform transition duration-300 ease-in-out ${
              open ? "-rotate-45 -translate-y-2.5" : ""
            }`}
          />
        </div>
      </div>
    </nav>
  );
}
