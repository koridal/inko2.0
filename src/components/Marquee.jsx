import MarqueeItem from "./MarqueeItem";

const Marquee = () => {
  const upperMarquee = [
    '/images/homeImage/seoil.jpg',
    '/images/homeImage/samjin.jpg',
    '/images/homeImage/cjfoods.jpg',
    '/images/homeImage/dhi.jpg',
    '/images/homeImage/cheil.jpg',
    '/images/homeImage/posco.jpg',
    '/images/homeImage/hansae.jpg',
    '/images/homeImage/juahn.jpg',
  ];

  const lowerMarquee = [
    '/images/homeImage/lgelec.jpg',
    '/images/homeImage/saea.jpg',
    '/images/homeImage/samick.jpg',
    '/images/homeImage/ceramic.jpg',
    '/images/homeImage/hankook.jpg',
    '/images/homeImage/bumjin.jpg',
    '/images/homeImage/wintex.jpg',
    '/images/homeImage/pan.jpg',
  ];

  return (
    <div className="container mx-auto">
      <MarqueeItem images={upperMarquee} from={0} to={"-100%"} />
      <MarqueeItem images={lowerMarquee} from={"-100%"} to={0} />
    </div>
  );
};

export default Marquee;