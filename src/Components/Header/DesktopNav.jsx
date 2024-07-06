import { Link } from "react-router-dom";

const DesktopNav = ({ menuItems, Logo }) => {
  return (
    <nav className="h-16 flex justify-between items-center px-6 lg:px-12">
      <a href="/">
        <img src={Logo} alt="Logo" />
      </a>
      <ul className="flex gap-7">
        {menuItems?.map((menu, index) => (
          <li>
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
      <ul className="flex items-center gap-4 font-medium">
        <li>
          <button className="text-secondary px-4 py-2 rounded">
            <Link to="/login">Log In</Link>
          </button>
        </li>
        <li>
          <button className="text-primary px-4 py-2 rounded-lg bg-accent hover:bg-accent/80">
            <Link to="/sign-up">Sign Up</Link>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default DesktopNav;
