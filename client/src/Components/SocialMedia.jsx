// Icons
import {
  WhatsAppIconMui,
  GitHubIconMui,
  FacebookOutlinedIconMui,
} from "./Icons";

// Components
import { ToolTip } from "./TootTip";

const socialMediaStyle = "text-white hover:text-secondary";

const socialPlatforms = [
  {
    name: "Github",
    link: "https://github.com/ARalex1016",
    Icon: GitHubIconMui,
  },
  {
    name: "What's App",
    link: "https://wa.me/9779701425253",
    Icon: WhatsAppIconMui,
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/profile.php?id=100015751629762",
    Icon: FacebookOutlinedIconMui,
  },
];

const SocialMedia = ({ className }) => {
  return (
    <div className={`flex flex-row gap-x-2 ${className}`}>
      {socialPlatforms.map(({ name, link, Icon }, index) => {
        return (
          <div key={index}>
            <ToolTip title={name}>
              <a href={link} target="_blank">
                <Icon className={socialMediaStyle} />
              </a>
            </ToolTip>
          </div>
        );
      })}
    </div>
  );
};

export default SocialMedia;
