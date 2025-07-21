import { useState, useEffect } from "react";

export const useAboutMeToggle = () => {
  const [isOpenAboutMe, setIsOpenAboutMe] = useState(false);

  const openAboutMe = () => {
    setIsOpenAboutMe(true);
  };

  const closeAboutMe = () => {
    setIsOpenAboutMe(false);
  };

  useEffect(() => {
    const handleScrollY = () => {
      if (isOpenAboutMe) {
        closeAboutMe();
      }
    };

    window.addEventListener("scroll", handleScrollY);

    return () => {
      window.removeEventListener("scroll", handleScrollY);
    };
  }, [isOpenAboutMe]);

  return { isOpenAboutMe, openAboutMe, closeAboutMe };
};
