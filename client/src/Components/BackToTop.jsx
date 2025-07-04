// Icons
import { ArrowUpIcon } from "./Icons";

// Components
import { ToolTip } from "./TootTip";

const BackToTop = ({ className }) => {
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <ToolTip title="Back to top">
      <button
        title="Back to top"
        onClick={handleBackToTop}
        className={`text-white ${className}`}
      >
        <ArrowUpIcon size={16} />
      </button>
    </ToolTip>
  );
};

export default BackToTop;
