const Banner = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="w-full px-0 sm:px-6 md:px-10 h-[500px]">
      <div
        className="mx-auto w-full sm:rounded-2xl max-w-7xl h-full overflow-hidden relative"
        style={{
          backgroundImage: "url('/banner.jpg')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="bg-primary-700 mix-blend-multiply absolute inset-0"></div>
        <div className="absolute inset-0">{children}</div>
      </div>
    </div>
  );
};

export default Banner;
