import { useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Components
import SocialMedia from "../SocialMedia";

export const NavLink = ({ key, sectionId, className, children }) => {
  const scrollToSection = (id, index) => {
    if (id === "hero" || index === 0) {
      // Scroll to the top
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Scroll to the specific section
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <p
      key={key}
      onClick={() => scrollToSection(sectionId)}
      className={`${className}`}
    >
      {children}
    </p>
  );
};

const Navbar = () => {
  const menuItems = ["hero", "skills", "projects", "contact"];

  return (
    <>
      {menuItems.map((item) => {
        return (
          <NavLink
            key={item}
            sectionId={item}
            className="w-full text-xl font-medium text-white  pl-10 transition-all duration-300 hover:text-secondary"
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </NavLink>
        );
      })}
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
            className="w-1/2 bg-primary/40 flex flex-col gap-y-5 backdrop-blur-sm border-[1px] border-secondary/25 rounded-lg overflow-hidden fixed top-menuHeight right-sidePadding z-50"
          >
            <Navbar />

            <SocialMedia className="pl-10" />
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};
