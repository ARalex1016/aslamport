// Icons
import {
  WhatsAppIconMui,
  GitHubIconMui,
  FacebookOutlinedIconMui,
} from "./Icons";

const socialMediaStyle = "text-white hover:text-secondary";

const SocialMedia = ({ className }) => {
  return (
    <div className={`flex flex-row gap-x-2 ${className}`}>
      <GitHubIconMui className={socialMediaStyle} />
      <WhatsAppIconMui className={socialMediaStyle} />
      <FacebookOutlinedIconMui className={socialMediaStyle} />
    </div>
  );
};

export default SocialMedia;
