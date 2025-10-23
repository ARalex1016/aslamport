import { useRef } from "react";

// data
import servicesObj from "./../../data/services.json";

// Components
import { MainTitle } from "../String";

const Tab = () => {
  const titles = servicesObj.services.map((service) => service.title);

  return (
    <div className="w-full h-full basis-1/2 flex flex-row sm:flex-col sm:items-center sm:justify-center gap-x-2 gap-y-5 overflow-x-auto scrollbar-hidden">
      {titles.map((title, index) => {
        return (
          <div
            key={index}
            className="w-80 text-white text-sm font-medium text-nowrap bg-primary border-[1px] border-white/50 rounded-sm transition-all duration-300 hover:bg-secondary/75 hover:border-secondary px-2 py-2"
          >
            {title}
          </div>
        );
      })}
    </div>
  );
};

const Cards = () => {
  const services = servicesObj.services;

  const maxAngle = 60;
  const angleDif = maxAngle / services.length;

  return (
    <>
      <div className="w-full h-full basis-1/2 relative">
        {services.map((service, index) => {
          return (
            <div
              key={index}
              className="w-72 aspect-square bg-secondary rounded-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-1/2 shadow-md shadow-gray flex flex-col gap-y-2 p-5"
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
      </div>
    </>
  );
};

const Services = () => {
  const serviceRef = useRef(null);

  window.addEventListener("scroll", () => {
    let distance = window.innerHeight / 2;

    let topVal = serviceRef.current.getBoundingClientRect().top;

    let index = -1 * (topVal / distance + 1);

    index = Math.floor(index);

    for (let i = 0; i < servicesObj.services.length; i++) {
      if (i <= index) {
        servicesObj.services[i].classList.add("away");
      } else {
        servicesObj.services[i].classList.remove("away");
      }
    }
  });

  return (
    <>
      <section
        id="services"
        ref={serviceRef}
        className="w-full relative"
        style={{
          height: `${100 + servicesObj.services.length * 50}vh`,
        }}
      >
        {/* Display */}
        <div className="w-full h-screen sticky top-menuHeight">
          <MainTitle>Services</MainTitle>

          <div className="w-full h-[100svh] flex flex-col sm:flex-row">
            {/* Tab */}
            <Tab />

            {/* Cards */}
            <Cards />
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
