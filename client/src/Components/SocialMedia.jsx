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
      className={`flex flex-row gap-x-2 sm:flex-col sm:gap-y-4 sm:absolute sm:right-4 sm:top-1/2 sm:-translate-y-1/2 ${className}`}
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
                className="group size-7 rounded-full grid place-items-center"
                style={{
                  backgroundColor: isHovered
                    ? baseColor
                    : "rgba(255, 255, 255, 0.8)",
                }}
              >
                <Icon className="size-5 group-hover:fill-white" />
              </a>
            </ToolTip>
          </div>
        );
      })}
    </div>
  );
};

export default SocialMedia;
