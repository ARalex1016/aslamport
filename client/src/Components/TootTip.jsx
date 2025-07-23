import Tooltip from "@mui/material/Tooltip";

export const ToolTip = ({ title, placement = "top", className, children }) => {
  return (
    <Tooltip
      title={title}
      placement={placement}
      arrow
      // slotProps={{
      //   popper: {
      //     modifiers: [
      //       {
      //         name: "offset",
      //         options: {
      //           offset: [0, -12],
      //         },
      //       },
      //     ],
      //   },
      // }}
      className={`${className}`}
    >
      {children}
    </Tooltip>
  );
};
