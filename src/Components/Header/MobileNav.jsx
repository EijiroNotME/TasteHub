import { HiBars3BottomRight } from "react-icons/hi2";
import { RiCloseCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const MobileNav = ({ menuItems, Logo, onOpen, onClose, hideLeft }) => {
  return (
    <nav className="h-16 flex justify-between items-center px-6 lg:px-12">
      <a href="/">
        <img src={Logo} alt="logo" />
      </a>
      <button onClick={onOpen} className="burger border-primary rounded">
        <HiBars3BottomRight className="w-7 h-7" />
      </button>

      <div
        className={`transition-all duration-500 ease-in-out w-full h-full fixed bg-background z-50 top-0 ${hideLeft} flex justify-center items-center`}
      >
        <button onClick={onClose} className="absolute top-5 right-6">
          <RiCloseCircleLine className="w-7 h-7" />
        </button>

        <div>
          <ul className="flex-col flex gap-5">
            {menuItems?.map((menu, index) => (
              <li>
                <Link
                  to={menu}
                  className="font-medium capitalize text-secondary text-2xl"
                >
                  {menu}
                </Link>
              </li>
            ))}
          </ul>

          <ul className="flex items-center gap-4 font-medium mt-10">
            <li>
              <button className="text-secondary px-4 py-2 rounded border">
                Log In
              </button>
            </li>
            <li>
              <button className="text-secondary px-4 py-2 rounded border">
                Sign Up
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MobileNav;
