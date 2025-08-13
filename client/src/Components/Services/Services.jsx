// data
import servicesObj from "./../../data/services.json";

// Components
import { MainTitle } from "../String";

const Tab = () => {
  const titles = servicesObj.services.map((service) => service.title);

  return (
    <div className="w-full flex flex-row sm:flex-col gap-x-2 overflow-x-auto scrollbar-hidden my-2">
      {titles.map((title, index) => {
        return (
          <div
            key={index}
            className="text-white text-sm font-medium text-nowrap bg-primary border-[1px] border-white/50 px-2 py-1 rounded-md transition-all duration-300 hover:bg-secondary/75 hover:border-secondary"
          >
            {title}
          </div>
        );
      })}
    </div>
  );
};

const Cards = ({ services }) => {
  const maxAngle = 60;
  const angleDif = maxAngle / services.length;

  return (
    <>
      {services.map((service, index) => {
        return (
          <div
            key={index}
            className="w-[65%] aspect-square bg-secondary rounded-2xl flex flex-col justify-center gap-y-2 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-1/2 shadow-md shadow-gray p-5"
            style={{
              rotate: `-${angleDif * index}deg`,
              zIndex: `${services.length - index}`,
            }}
          >
            <p className="text-primary text-lg font-medium line-clamp-2">
              {service.title}
            </p>

            <p className="text-primary/80 text-base line-clamp-5">
              {service.description}
            </p>
          </div>
        );
      })}
    </>
  );
};

const Services = () => {
  return (
    <>
      <section id="services" className="w-full">
        {/* Service Container */}
        <div
          className="relative"
          style={{
            height: `${100 + (servicesObj.services.length - 1) * 50}vh`,
          }}
        >
          {/* Display */}
          <div className="w-full h-screen sticky top-menuHeight">
            <MainTitle>Services</MainTitle>

            <div className="w-full flex flex-col sm:flex-row">
              {/* Tab */}
              <Tab />

              {/* Cards */}
              <Cards services={servicesObj.services} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
