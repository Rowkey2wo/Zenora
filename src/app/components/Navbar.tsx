import { motion } from "motion/react";

type NavbarProps = {
  onMenuClick: () => void;
};


export default function Navbar({ onMenuClick }: NavbarProps) {
  const navTitle = ["Home", "About", "Services", "Contact"];

  return (
    <header className="w-full fixed shadow-2xl bg-[rgba(0,0,0,0.6)] z-50">
      <div className="relative flex h-14 px-4">
        
        <img src="/DDDD.png" className="h-15" alt="" />
        <div className="hidden lg:flex w-full justify-end p-3 me-10">
          {navTitle.map((title) => (
            <motion.ul
              key={title}
              whileHover={{ y: -3 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex text-xl mx-5"
            >
              <li className="relative cursor-pointer text-white after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-white after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">
                {title}
              </li>
            </motion.ul>
          ))}

        </div>
          {/* <ul className="flex lg:gap-10 text-xl">
            <li className="hover:border-b delay-200 transition">Home</li>
            <li className="border-b">About</li>
            <li className="border-b">Service</li>
          </ul> */}
          {/* <h1 className="pt-2 text-3xl font-extrabold text-white tracking-wide">
            Zenora
          </h1> */}
        <button
          onClick={onMenuClick}
          className="absolute right-4 lg:hidden p-3 border mt-1 rounded-full"
          aria-label="Open Menu"
        >
          <svg
            className="h-6 w-6 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}
