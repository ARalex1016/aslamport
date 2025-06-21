// Components
import { TypingEffect } from "../TypingEffect ";
import SocialMedia from "../SocialMedia";

const Button = ({ children, className }) => {
  return (
    <button
      className={`font-medium rounded-md px-5 py-2 border-2 border-secondary transition-all duration-300 ${className}`}
    >
      {children}
    </button>
  );
};

const Hero = () => {
  return (
    <section
      id="hero"
      className="w-screen h-screen bg-transparent flex flex-col items-center gap-y-10 py-menuHeight fixed top-0 z-10"
      style={{
        paddingLeft: `calc(var(--sidePadding) * 2)`,
        paddingRight: `calc(var(--sidePadding) * 2)`,
      }}
    >
      <img
        src="/Images/avatar2.png"
        alt="Image"
        // srcset=""
        className="size-64 rounded-full object-cover"
      />

      <div className="w-full text-white flex flex-col gap-y-2">
        <p className="text-2xl">
          Hi It's <span className="text-secondary">Aslam</span>
        </p>

        <TypingEffect className="text-2xl" />

        <p className="text-white/50">
          I help business owners and busy web developers to design & develop
          creative websites that fits their vision and attracts the visitors to
          stay for ever.
        </p>

        <SocialMedia className="my-2" />

        {/* Action Buttons */}
        <div className="flex flex-row gap-x-5">
          <Button className="text-primary bg-secondary hover:text-secondary hover:bg-primary">
            Hire Me
          </Button>

          <Button className="text-secondary hover:text-primary hover:bg-secondary">
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
