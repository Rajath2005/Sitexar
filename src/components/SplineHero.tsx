import Spline from '@splinetool/react-spline';

const SplineHero = () => (
  // add data-parallax to allow the background 3D scene to respond subtly to mouse/scroll
  <div className="absolute inset-0 w-full h-full" data-parallax data-parallax-speed="0.09" data-parallax-axis="both">
    <Spline
      scene="https://prod.spline.design/V9kmPuoPcPESxcx5/scene.splinecode"
      style={{ width: "100%", height: "100%" }}
    />
    <div className="absolute inset-0 hero-gradient pointer-events-none"></div>
  </div>
);

export default SplineHero;


