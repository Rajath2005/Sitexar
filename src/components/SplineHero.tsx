import Spline from '@splinetool/react-spline';

const SplineHero = () => (
  <div className="absolute inset-0 w-full h-full">
    <Spline scene="https://prod.spline.design/V9kmPuoPcPESxcx5/scene.splinecode" style={{ width: '100%', height: '100%' }} />
    <div className="absolute inset-0 hero-gradient pointer-events-none"></div>
  </div>
);

export default SplineHero;


