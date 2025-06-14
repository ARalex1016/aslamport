// Components
import { DesktopNavbar, MobileNavbar } from "./Navbar";
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

  return (
    <>
      <header className="w-full h-16 bg-primary/40 backdrop-blur-md flex justify-between items-center px-sidePadding fixed">
        <DesktopNavbar />

        {menuIsOpen ? (
          <IconContainer onClick={closeMenu} className="hover:bg-red-500/20">
            <XIcon className="text-red-500" />
          </IconContainer>
        ) : (
          <IconContainer onClick={openMenu} className="hover:bg-secondary/20">
            <MenuIcon className="text-secondary" />
          </IconContainer>
        )}

        <MobileNavbar menuIsOpen={menuIsOpen} closeMenu={closeMenu} />
      </header>
    </>
  );
};

export default Header;
