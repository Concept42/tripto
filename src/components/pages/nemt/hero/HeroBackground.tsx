"use client";

const baseCircles = [
  { id: 1, size: 1650, offset: -30 },
  { id: 2, size: 1727, offset: 50 },
  { id: 3, size: 1939, offset: -20 },
  { id: 4, size: 2081, offset: -10 },
  { id: 5, size: 2239, offset: -10 },
  { id: 6, size: 2562, offset: -190 }
];
const mdCircles = [
  { id: 1, size: 1650, offset: -10 },
  { id: 2, size: 1727, offset: 40 },
  { id: 3, size: 1939, offset: -50 },
  { id: 4, size: 2081, offset: -80 },
  { id: 5, size: 2239, offset: -120 },
  { id: 6, size: 2562, offset: -340 }
];
const xlCircles = [
  { id: 1, size: 3000, offset: 20 },
  { id: 2, size: 3077, offset: 70 },
  { id: 3, size: 3289, offset: 10 },
  { id: 4, size: 3431, offset: 20 },
  { id: 5, size: 3589, offset: 40 },
  { id: 6, size: 3912, offset: -100 }
];
const xxlCircles = [
  { id: 1, size: 6000, offset: 20 },
  { id: 2, size: 6077, offset: 70 },
  { id: 3, size: 6289, offset: 10 },
  { id: 4, size: 6431, offset: 20 },
  { id: 5, size: 6589, offset: 40 },
  { id: 6, size: 6912, offset: -100 }
];

const HeroBackground = () => {
  return (
    <>
      <div className="absolute left-1/2 top-[-1440px] -z-10 translate-x-[-50%] md:hidden xl:top-[-1050px] xl:block 2xl:hidden">
        {baseCircles.map((circle) => (
          <div
            key={circle.id}
            className={"absolute left-1/2 translate-x-[-50%] rounded-full border border-neutrals-grey10"}
            style={{
              width: circle.size,
              height: circle.size,
              marginTop: circle.offset
            }}
          ></div>
        ))}
      </div>
      <div className="absolute left-1/2 top-[-1440px] -z-10 hidden translate-x-[-50%] md:block xl:hidden">
        {mdCircles.map((circle) => (
          <div
            key={circle.id}
            className={"absolute left-1/2 translate-x-[-50%] rounded-full border border-neutrals-grey10"}
            style={{
              width: circle.size,
              height: circle.size,
              marginTop: circle.offset
            }}
          ></div>
        ))}
      </div>
      <div className="absolute left-1/2 top-[-2500px] -z-10 hidden translate-x-[-50%] 2xl:block 3xl:hidden">
        {xlCircles.map((circle) => (
          <div
            key={circle.id}
            className={"absolute left-1/2 translate-x-[-50%] rounded-full border border-neutrals-grey10"}
            style={{
              width: circle.size,
              height: circle.size,
              marginTop: circle.offset
            }}
          ></div>
        ))}
      </div>
      <div className="absolute left-1/2 top-[-5500] -z-10 hidden translate-x-[-50%] 3xl:block">
        {xxlCircles.map((circle) => (
          <div
            key={circle.id}
            className={"absolute left-1/2 translate-x-[-50%] rounded-full border border-neutrals-grey10"}
            style={{
              width: circle.size,
              height: circle.size,
              marginTop: circle.offset
            }}
          ></div>
        ))}
      </div>
    </>
  );
};

export default HeroBackground;
