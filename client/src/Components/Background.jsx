export const Background = ({ children, className }) => {
  return (
    <main
      className={`w-full bg-primary/60 backdrop-blur-lg relative z-20 px-sidePadding flex flex-col gap-y-8 mt-[100svh] ${className}`}
    >
      {children}
    </main>
  );
};
