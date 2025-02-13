"use client";

const baseCircles = [
  { id: 1, width: 1759, height: 1695, offset: 0 },
  { id: 2, width: 2010, height: 1940, offset: -120 }
];
const mdCircles = [
  { id: 1, width: 1759, height: 1695, offset: 0 },
  { id: 2, width: 2010, height: 1940, offset: -120 }
];
const xlCircles = [
  { id: 1, width: 2300, height: 2500, offset: 0 },
  { id: 2, width: 2600, height: 2800, offset: -180 }
];
const xxlCircles = [
  { id: 1, size: 6000, offset: 20 },
  { id: 2, size: 6077, offset: 70 }
];

const BenefitsBackground = () => {
  return (
    <>
      <div className="absolute left-1/2 top-[-1400px] z-0 translate-x-[-50%] md:hidden xl:top-[-1120px] xl:block 2xl:hidden">
        {baseCircles.map((circle) => (
          <div
            key={circle.id}
            className={"absolute left-1/2 translate-x-[-50%] rounded-full border border-primary-mistyBlue"}
            style={{
              width: circle.width,
              height: circle.height,
              marginTop: circle.offset
            }}
          ></div>
        ))}
      </div>
      <div className="absolute left-1/2 top-[-1400px] z-0 hidden translate-x-[-50%] md:block xl:hidden">
        {mdCircles.map((circle) => (
          <div
            key={circle.id}
            className={"absolute left-1/2 translate-x-[-50%] rounded-full border border-primary-mistyBlue"}
            style={{
              width: circle.width,
              height: circle.height,
              marginTop: circle.offset
            }}
          ></div>
        ))}
      </div>
      <div className="absolute left-1/2 top-[-1940px] z-0 hidden translate-x-[-50%] 2xl:block 3xl:hidden">
        {xlCircles.map((circle) => (
          <div
            key={circle.id}
            className={"absolute left-1/2 translate-x-[-50%] rounded-full border border-primary-mistyBlue"}
            style={{
              width: circle.width,
              height: circle.height,
              marginTop: circle.offset
            }}
          ></div>
        ))}
      </div>
      <div className="absolute left-1/2 top-[-5500] z-0 hidden translate-x-[-50%] 3xl:block">
        {xxlCircles.map((circle) => (
          <div
            key={circle.id}
            className={"absolute left-1/2 translate-x-[-50%] rounded-full border border-primary-mistyBlue"}
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

export default BenefitsBackground;
