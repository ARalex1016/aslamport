import Tooltip from "@mui/material/Tooltip";

export const ToolTip = ({ title, children }) => {
  return (
    <Tooltip title={title} arrow followCursor>
      {children}
    </Tooltip>
  );
};
