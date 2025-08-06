import { motion } from "framer-motion";

// Components
import { DesktopNavbar, MobileNavbar } from "./Navbar";
import { MenuIcon, XIcon } from "../Icons";
import { ToolTip } from "../TootTip";

// Utils
import { backToTop } from "../../Utils/BackToTop";

// Hooks
import { useMenuToggle } from "../../Hooks/useMenuToggle";
import { useScreenWidth } from "../../Hooks/useScreenWidth";

const IconContainer = ({ children, className, onClick }) => {
  return (
    <button onClick={onClick} className={`p-1 rounded-full ${className}`}>
      {children}
    </button>
  );
};

const Header = () => {
  const { menuIsOpen, openMenu, closeMenu } = useMenuToggle();

  const { screenWidth } = useScreenWidth();

  return (
    <>
      <motion.header
        variants={{
          initial: { opacity: 0, y: -50 },
          animate: { opacity: 1, y: 0 },
        }}
        initial="initial"
        animate="animate"
        transition={{
          delay: 1,
          duration: 0.5,
        }}
        className="w-full h-menuHeight bg-primary/40 backdrop-blur-sm flex justify-between items-center px-sidePadding fixed top-0 z-50"
      >
        {/* Logo */}
        <ToolTip title={"Aslam"}>
          <div onClick={backToTop} className="logo-hover">
            <img
              src="/Svgs/as-logo-white.svg"
              alt="logo"
              className="default-img"
            />
            <img
              src="/Svgs/as-logo-lightblue.svg"
              alt="logo-hover"
              className="hover-img"
            />
          </div>
        </ToolTip>

        {screenWidth > 640 && <DesktopNavbar />}

        {screenWidth <= 640 &&
          (menuIsOpen ? (
            <IconContainer onClick={closeMenu} className="hover:bg-red-500/20">
              <XIcon className="text-red-500" />
            </IconContainer>
          ) : (
            <IconContainer onClick={openMenu} className="hover:bg-secondary/20">
              <MenuIcon className="text-secondary" />
            </IconContainer>
          ))}
      </motion.header>

      <MobileNavbar menuIsOpen={menuIsOpen} closeMenu={closeMenu} />
    </>
  );
};

export default Header;
