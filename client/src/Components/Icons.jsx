// Lucide Icons
import {
  Menu,
  X,
  Share2,
  ChevronRight,
  ChevronLeft,
  ArrowUp,
  ArrowDown,
  Send,
  Loader,
} from "lucide-react";

export const MenuIcon = ({ size = 24, className }) => {
  return <Menu size={size} className={`${className}`} />;
};

export const XIcon = ({ size = 24, className }) => {
  return <X size={size} className={`${className}`} />;
};

export const Share2Icon = ({ size = 24, className }) => {
  return <Share2 size={size} className={`${className}`} />;
};

export const ChevronRightIcon = ({ size = 24, className }) => {
  return <ChevronRight size={size} className={`${className}`} />;
};

export const ChevronLeftIcon = ({ size = 24, className }) => {
  return <ChevronLeft size={size} className={`${className}`} />;
};

export const ArrowUpIcon = ({ size = 24, className }) => {
  return <ArrowUp size={size} className={`${className}`} />;
};

export const ArrowDownIcon = ({ size = 24, className }) => {
  return <ArrowDown size={size} className={`${className}`} />;
};

export const SendIcon = ({ size = 24, className }) => {
  return <Send size={size} className={`${className}`} />;
};

export const LoaderIcon = ({ size = 24, className }) => {
  return <Loader size={size} className={`${className}`} />;
};
