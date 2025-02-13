import React from "react";

type Props = {
  imageSrc: string;
  xOffset?: number;
  yOffset?: number;
  scale?: number;
  className?: string;
};

const PolygonMask = ({ imageSrc, xOffset = 0, yOffset = 0, scale = 1, className }: Props) => {
  return (
    <svg
      className={className}
      width="583"
      height="597"
      viewBox="0 0 583 597"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <clipPath id="polygonClipLarge">
          <path d="M212.349 17.1579C223.008 7.63904 237.936 4.52973 251.509 9.0012L495.369 89.3376C508.942 93.809 519.098 105.182 522.012 119.172L574.369 370.529C577.283 384.52 572.512 399.002 561.853 408.521L370.35 579.541C359.691 589.06 344.764 592.17 331.19 587.698L87.3306 507.362C73.7575 502.89 63.601 491.517 60.6869 477.527L8.33034 226.17C5.41621 212.18 10.1872 197.697 20.8461 188.179L212.349 17.1579Z" />
        </clipPath>
      </defs>

      <image
        href={imageSrc}
        width={583 * scale}
        height={597 * scale}
        x={xOffset}
        y={yOffset}
        clipPath="url(#polygonClipLarge)"
        preserveAspectRatio="xMidYMid slice"
      />

      <path
        d="M212.349 17.1579C223.008 7.63904 237.936 4.52973 251.509 9.0012L495.369 89.3376C508.942 93.809 519.098 105.182 522.012 119.172L574.369 370.529C577.283 384.52 572.512 399.002 561.853 408.521L370.35 579.541C359.691 589.06 344.764 592.17 331.19 587.698L87.3306 507.362C73.7575 502.89 63.601 491.517 60.6869 477.527L8.33034 226.17C5.41621 212.18 10.1872 197.697 20.8461 188.179L212.349 17.1579Z"
        stroke="#0092B3"
        strokeWidth="14"
      />
    </svg>
  );
};

export default PolygonMask;
