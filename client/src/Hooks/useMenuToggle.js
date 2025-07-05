import { useState, useEffect } from "react";

export const useMenuToggle = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const openMenu = () => {
    setMenuIsOpen(true);
  };

  const closeMenu = () => {
    setMenuIsOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      closeMenu();
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return {
    menuIsOpen,
    openMenu,
    closeMenu,
  };
};
