// src/components/VideoBackground.jsx
const VideoBackground = ({ src }) => (
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover z-0"
  >
    <source src={src} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
);

export default VideoBackground;
