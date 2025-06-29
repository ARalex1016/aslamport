// data
import servicesObj from "./../../data/services.json";

const Cards = ({ services }) => {
  const maxAngle = 60;
  const angleDif = maxAngle / services.length;

  return (
    <>
      {services.map((service, index) => {
        return (
          <div
            key={index}
            className="w-[65%] aspect-square bg-secondary rounded-md border-[1px] border-primary/50 flex flex-col justify-center gap-y-4 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-1/2 p-5"
            style={{
              rotate: `-${angleDif * index}deg`,
              zIndex: `${services.length - index}`,
            }}
          >
            <p className="text-white text-lg font-medium line-clamp-2">
              {service.title}
            </p>

            <p className="text-white/70 text-lg line-clamp-5">
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
      <section>
        {/* Service Container */}
        <div
          className="bg-blue-800/20 relative"
          style={{
            height: `${100 + (servicesObj.services.length - 1) * 50}vh`,
          }}
        >
          {/* Display */}
          <div className="w-full h-screen sticky top-0 pt-menuHeight">
            <h2 className="text-2xl text-white text-center py-5">Services</h2>

            {/* Cards */}
            <Cards services={servicesObj.services} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
