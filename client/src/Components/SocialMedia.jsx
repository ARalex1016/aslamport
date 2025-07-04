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
      <a href="https://github.com/" target="_blank" className="">
        <GitHubIconMui className={socialMediaStyle} />
      </a>
      <a href="#">
        <WhatsAppIconMui className={socialMediaStyle} />
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=100015751629762"
        target="_blank"
      >
        <FacebookOutlinedIconMui className={socialMediaStyle} />
      </a>
    </div>
  );
};

export default SocialMedia;
