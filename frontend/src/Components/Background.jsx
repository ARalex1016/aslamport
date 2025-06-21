export const Background = ({ children, className }) => {
  return (
    <main
      className={`w-full bg-primary/60 backdrop-blur-md relative z-20 px-sidePadding flex flex-col gap-y-5 ${className}`}
      style={{
        marginTop: `calc(100svh - 10px)`,
      }}
    >
      {children}
    </main>
  );
};
