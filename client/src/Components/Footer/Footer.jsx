// Components
import SocialMedia from "../SocialMedia";
import BackToTop from "../BackToTop";

const Footer = () => {
  const name = import.meta.env.VITE_API_NAME;
  const currentYear = new Date().getFullYear();

  return (
    <section className="w-full flex flex-col justify-center items-center gap-y-2 pb-2">
      <p className="text-white text-sm">
        ©{" "}
        <span className="font-medium">
          {currentYear} {name}
        </span>{" "}
        All right reserved
      </p>

      <SocialMedia />

      <BackToTop className="rounded-full bg-secondary/30 hover:bg-secondary/50 p-1 absolute right-sidePadding bottom-2 animate-bounce" />
    </section>
  );
};

export default Footer;
