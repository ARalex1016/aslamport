import { useRef, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

const NavbarText = ({ children, to }) => {
  const handleNavClick = (section) => {
    window.history.pushState({}, "", `/${section}`);
  };

  return (
    <Link
      to={to}
      smooth
      duration={200}
      onClick={() => handleNavClick(to)}
      className="w-full text-xl font-medium text-white pl-10 transition-all duration-300 hover:text-secondary"
    >
      {children}
    </Link>
  );
};

const Navbar = () => {
  return (
    <>
      <NavbarText to="hero">Hero</NavbarText>

      <NavbarText to="skills">Skills</NavbarText>

      <NavbarText to="projects">Project</NavbarText>

      <NavbarText>Contact Us</NavbarText>
    </>
  );
};

export const DesktopNavbar = () => {
  return (
    <>
      <div></div>
    </>
  );
};

export const MobileNavbar = ({ menuIsOpen, closeMenu }) => {
  const navRef = useRef();

  useEffect(() => {
    if (!menuIsOpen) return;

    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    const handleScroll = () => {
      closeMenu();
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll, true); // use capture to detect scroll early

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll, true);
    };
  }, [menuIsOpen, closeMenu]);

  return (
    <>
      <AnimatePresence>
        {menuIsOpen && (
          <motion.nav
            ref={navRef}
            variants={{
              initial: {
                maxHeight: 0,
                paddingBlock: 0,
                // opacity: 0,
              },
              final: {
                maxHeight: "80vh",
                paddingBlock: "16px",
                // opacity: 1,
              },
            }}
            initial="initial"
            animate="final"
            exit="initial"
            transition={{
              ease: "easeInOut",
              duration: 0.4,
            }}
            className="w-1/2 bg-primary/40 flex flex-col gap-y-5 backdrop-blur-md border-[1px] border-secondary/25 rounded-lg overflow-hidden absolute top-full right-sidePadding"
          >
            <Navbar />
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};
