// src/components/FloatingTech.jsx
import { Player } from "@lottiefiles/react-lottie-player";

const FloatingTech = () => {
  return (
    <div className="fixed inset-0 -z-10 opacity-30 pointer-events-none">
      <Player
        autoplay
        loop
        src="https://lottie.host/689a4d68-76ce-488b-aad5-2b3564ec837c/iiSUDX3My9.lottie"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default FloatingTech;
