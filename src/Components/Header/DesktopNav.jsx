import { Link } from "react-router-dom";

const DesktopNav = ({ menuItems, Logo }) => {
  return (
    <nav className="h-16 flex justify-between items-center px-6 lg:px-12 ">
      <a href="/">
        <img src={Logo} alt="Logo" />
      </a>
      <ul className="flex gap-7">
        {menuItems?.map((menu, index) => (
          <li key={index}>
            <Link
              to={menu}
              className="font-medium capitalize text-secondary hover:text-accent transition-all duration-300 ease-linear"
            >
              {menu}
            </Link>
          </li>
        ))}
      </ul>
      {/* Login and Sign up */}
      <ul className="flex items-center gap-2 font-medium">
        <li key="login">
          <button className="text-secondary px-4 py-2 rounded  hover:text-accent transition duration-300">
            <Link to="/login">Log In</Link>
          </button>
        </li>
        <li key="sign-up">
          <button className="text-accent px-4 py-2  hover:text-secondary transition duration-300">
            <Link to="/sign-up">Sign Up</Link>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default DesktopNav;
