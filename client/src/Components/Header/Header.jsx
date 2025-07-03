import { useState, useEffect } from "react";

// Components
import { DesktopNavbar, MobileNavbar } from "./Navbar";
import SocialMedia from "../SocialMedia";
import { MenuIcon, XIcon } from "../Icons";

// Hooks
import { useMenuToggle } from "../../Hooks/useMenuToggle";

const IconContainer = ({ children, className, onClick }) => {
  return (
    <button onClick={onClick} className={`p-1 rounded-full ${className}`}>
      {children}
    </button>
  );
};

const Header = () => {
  const { menuIsOpen, openMenu, closeMenu } = useMenuToggle();

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const name = import.meta.env.VITE_API_NAME;

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      closeMenu();
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <header className="w-full h-menuHeight bg-primary/40 backdrop-blur-sm flex justify-between items-center px-sidePadding fixed top-0 z-50">
        <p className="text-white hover:text-secondary font-bold transition-all duration-300">
          {name}
        </p>

        {screenWidth <= 640 ? "" : <DesktopNavbar />}

        {screenWidth <= 640 ? (
          menuIsOpen ? (
            <IconContainer onClick={closeMenu} className="hover:bg-red-500/20">
              <XIcon className="text-red-500" />
            </IconContainer>
          ) : (
            <IconContainer onClick={openMenu} className="hover:bg-secondary/20">
              <MenuIcon className="text-secondary" />
            </IconContainer>
          )
        ) : (
          <SocialMedia />
        )}
      </header>

      <MobileNavbar menuIsOpen={menuIsOpen} closeMenu={closeMenu} />
    </>
  );
};

export default Header;
