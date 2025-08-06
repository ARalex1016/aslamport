import { useState } from "react";

import { FacebookSvg, WhatsAppSvg, GitHubSvg } from "./Skill/IconsSvg";

// Components
import { ToolTip } from "./TootTip";

const socialPlatforms = [
  {
    name: "Github",
    link: "https://github.com/ARalex1016",
    baseColor: "black",
    Icon: GitHubSvg,
  },
  {
    name: "What's App",
    link: "https://wa.me/9779701425253",
    baseColor: "#2ED14B",
    Icon: WhatsAppSvg,
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/profile.php?id=100015751629762",
    baseColor: "#1877F2",
    Icon: FacebookSvg,
  },
];

const SocialMedia = ({ className }) => {
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <div
      className={`flex flex-row gap-x-2 sm:flex-col sm:gap-y-4 ${className}`}
    >
      {socialPlatforms.map(({ name, link, baseColor, Icon }, index) => {
        const isHovered = hoverIndex === index;

        return (
          <div key={index}>
            <ToolTip title={name} baseColor={baseColor}>
              <a
                href={link}
                target="_blank"
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
                className="group size-8 sm:size-9 rounded-xs grid place-items-center social-icons transition-all duration-300"
                style={{
                  backgroundColor: isHovered
                    ? baseColor
                    : "rgb(var(--primary))",
                }}
              >
                <Icon className="size-5 fill-secondary group-hover:fill-white transition-all duration-300" />
              </a>
            </ToolTip>
          </div>
        );
      })}
    </div>
  );
};

export default SocialMedia;
