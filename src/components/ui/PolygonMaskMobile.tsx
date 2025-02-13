import React from "react";

type Props = {
  imageSrc: string;
  xOffset?: number;
  yOffset?: number;
  scale?: number;
  className?: string;
};

const PolygonMaskMobile = ({ imageSrc, xOffset = 0, yOffset = 0, scale = 1, className }: Props) => {
  return (
    <svg
      className={className}
      width="173"
      height="176"
      viewBox="0 0 173 176"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <clipPath id="polygonClip">
          <path d="M50.5442 14.873C61.2031 5.35415 76.1306 2.24481 89.7037 6.71627L131.956 20.6359C145.529 25.1073 155.686 36.4803 158.6 50.4706L167.672 94.0224C170.586 108.013 165.815 122.495 155.156 132.014L121.975 161.646C111.316 171.165 96.3884 174.274 82.8154 169.803L40.5626 155.883C26.9896 151.412 16.833 140.039 13.9189 126.048L4.84726 82.4967C1.93313 68.5063 6.70413 54.0241 17.3631 44.5052L50.5442 14.873Z" />
        </clipPath>
      </defs>

      <image
        href={imageSrc}
        width={173 * scale}
        height={176 * scale}
        x={xOffset}
        y={yOffset}
        clipPath="url(#polygonClip)"
        preserveAspectRatio="xMidYMid slice"
      />

      <path
        d="M50.5442 14.873C61.2031 5.35415 76.1306 2.24481 89.7037 6.71627L131.956 20.6359C145.529 25.1073 155.686 36.4803 158.6 50.4706L167.672 94.0224C170.586 108.013 165.815 122.495 155.156 132.014L121.975 161.646C111.316 171.165 96.3884 174.274 82.8154 169.803L40.5626 155.883C26.9896 151.412 16.833 140.039 13.9189 126.048L4.84726 82.4967C1.93313 68.5063 6.70413 54.0241 17.3631 44.5052L50.5442 14.873Z"
        stroke="#0092B3"
        strokeWidth="8"
      />
    </svg>
  );
};

export default PolygonMaskMobile;
