// Lucide Icons
import { Menu, X, Share2 } from "lucide-react";

// Mui Icons
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";

export const MenuIcon = ({ size = 24, className }) => {
  return <Menu size={size} className={`${className}`} />;
};

export const XIcon = ({ size = 24, className }) => {
  return <X size={size} className={`${className}`} />;
};

export const Share2Icon = ({ size = 24, className }) => {
  return <Share2 size={size} className={`${className}`} />;
};

// Mui
export const WhatsAppIconMui = () => {
  return <WhatsAppIcon />;
};

export const GitHubIconMui = () => {
  return <GitHubIcon />;
};

export const FacebookOutlinedIconMui = () => {
  return <FacebookOutlinedIcon />;
};
