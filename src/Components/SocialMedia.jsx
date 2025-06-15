// Icons
import {
  WhatsAppIconMui,
  GitHubIconMui,
  FacebookOutlinedIconMui,
} from "./Icons";

const SocialMedia = ({ className }) => {
  return (
    <div className={`text-secondary flex flex-row gap-x-2 ${className}`}>
      <GitHubIconMui />
      <WhatsAppIconMui />
      <FacebookOutlinedIconMui />
    </div>
  );
};

export default SocialMedia;
