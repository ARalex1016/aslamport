export const Background = ({ children, className }) => {
  return (
    <main
      className={`w-full bg-primary/40 backdrop-blur-lg relative z-20 px-sidePadding pb-1 flex flex-col gap-y-8 mt-[100svh] ${className}`}
    >
      {children}
    </main>
  );
};
