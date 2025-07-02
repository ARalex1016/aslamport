// Icons
import { ArrowUpIcon } from "./Icons";

const BackToTop = ({ className }) => {
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      title="Back to top"
      onClick={handleBackToTop}
      className={`text-white ${className}`}
    >
      <ArrowUpIcon size={16} />
    </button>
  );
};

export default BackToTop;
