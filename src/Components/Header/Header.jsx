import { useState } from "react";
import DesktopNav from "./DesktopNav";
import Logo from "/Tastehub.svg";
import MobileNav from "./MobileNav";

const Header = () => {
  const [hideLeft, setHideLeft] = useState("-left-[1000px]");
  const menuItems = ["recipes", "resources", "about", "contact"];
  const onOpen = () => {
    setHideLeft("left-0");
  };
  const onClose = () => {
    setHideLeft("-left-[1000px]");
  };
  return (
    <>
      <div className="max-[900px]:hidden">
        <DesktopNav menuItems={menuItems} Logo={Logo} />
      </div>

      <div className="min-[900px]:hidden">
        <MobileNav
          menuItems={menuItems}
          Logo={Logo}
          onOpen={onOpen}
          onClose={onClose}
          hideLeft={hideLeft}
        />
      </div>
    </>
  );
};

export default Header;
