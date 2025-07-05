import Tooltip from "@mui/material/Tooltip";

export const ToolTip = ({ title, className, children }) => {
  return (
    <Tooltip title={title} className={`${className}`} arrow followCursor>
      {children}
    </Tooltip>
  );
};
