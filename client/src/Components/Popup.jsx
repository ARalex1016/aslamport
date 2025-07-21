import { useEffect } from "react";

export const PopUpFullScreen = ({ onClose, className, children }) => {
  useEffect(() => {
    // Disable scroll
    document.body.style.overflow = "hidden";

    return () => {
      // Re-enable scroll when unmounted
      document.body.style.overflow = "";
    };
  }, []);

  const handleBackgroundClick = (e) => {
    // Close only if clicked directly on the background (not children)
    if (e.target === e.currentTarget && typeof onClose === "function") {
      onClose();
    }
  };

  return (
    <div
      onClick={handleBackgroundClick}
      className={`w-screen h-[100svh] bg-black/60 absolute z-20 inset-0 flex flex-row justify-center items-center py-menuHeight ${className}`}
    >
      {children}
    </div>
  );
};
