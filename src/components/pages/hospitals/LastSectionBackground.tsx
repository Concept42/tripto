"use client";

const baseCircles = [
  { id: 1, width: 2600, height: 2600, offset: 0 },
  { id: 2, width: 3000, height: 3000, offset: -150 }
];
const mdCircles = [
  { id: 1, width: 1759, height: 1695, offset: 0 },
  { id: 2, width: 2010, height: 1940, offset: -120 }
];
const xlCircles = [
  { id: 1, width: 4000, height: 4000, offset: 0 },
  { id: 2, width: 4500, height: 4500, offset: -250 }
];
const xxlCircles = [
  { id: 1, size: 6000, offset: 20 },
  { id: 2, size: 6077, offset: 220 }
];

const LastSectionBackground = () => {
  return (
    <>
      <div className="absolute left-1/2 top-[-2300px] -z-10 translate-x-[-50%] md:hidden xl:top-[-2300px] xl:block 2xl:hidden">
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
      <div className="absolute left-1/2 top-[-1400px] -z-10 hidden translate-x-[-50%] md:block xl:hidden">
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
      <div className="absolute left-1/2 top-[-3700px] -z-10 hidden translate-x-[-50%] 2xl:block 3xl:hidden">
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
      <div className="absolute left-1/2 top-[-5750] -z-10 hidden translate-x-[-50%] 3xl:block">
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

export default LastSectionBackground;
