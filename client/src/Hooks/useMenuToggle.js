import { useState } from "react";

export const useMenuToggle = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const openMenu = () => {
    setMenuIsOpen(true);
  };

  const closeMenu = () => {
    setMenuIsOpen(false);
  };

  return {
    menuIsOpen,
    openMenu,
    closeMenu,
  };
};
