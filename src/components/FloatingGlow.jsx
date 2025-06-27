const FloatingGlow = () => (
  <div className="pointer-events-none fixed top-0 left-0 w-full h-full -z-10">
    <div className="absolute w-96 h-96 bg-cyberpink opacity-20 blur-3xl animate-pulse left-1/4 top-1/4"></div>
    <div className="absolute w-96 h-96 bg-neon opacity-20 blur-3xl animate-pulse right-1/4 bottom-1/4"></div>
  </div>
);

export default FloatingGlow;
