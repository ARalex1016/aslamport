import { useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Components
import SocialMedia from "../SocialMedia";

export const NavLink = ({ sectionId, className, children }) => {
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
    <p onClick={() => scrollToSection(sectionId)} className={`${className}`}>
      {children}
    </p>
  );
};

const Navbar = () => {
  const menuItems = [
    {
      name: "home",
      sectionId: "hero",
    },
    {
      name: "skills",
      sectionId: "skills",
    },
    {
      name: "projects",
      sectionId: "projects",
    },
    {
      name: "contact",
      sectionId: "contact",
    },
  ];

  return (
    <>
      {menuItems.map(({ name, sectionId }, index) => {
        return (
          <div key={index}>
            <NavLink
              sectionId={sectionId}
              className="w-full text-xl font-medium text-white  pl-10 transition-all duration-300 hover:text-secondary"
            >
              {name.charAt(0).toUpperCase() + name.slice(1)}
            </NavLink>
          </div>
        );
      })}
    </>
  );
};

export const DesktopNavbar = () => {
  return (
    <>
      <nav className="flex flex-row">
        <Navbar />
      </nav>
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
