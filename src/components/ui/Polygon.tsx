import React from "react";

type Props = {
  className?: string;
};

const Polygon = ({ className }: Props) => {
  return (
    <svg
      width="203"
      className={className}
      height="198"
      viewBox="0 0 203 198"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M196.427 102.777C201.315 89.3481 198.667 74.3318 189.481 63.3846L151.893 18.5881C142.707 7.64086 128.379 2.42575 114.305 4.90729L56.7158 15.0618C42.6423 17.5434 30.9617 27.3445 26.0741 40.7733L6.07355 95.7243C1.18585 109.153 3.83362 124.169 13.0195 135.117L50.6081 179.913C59.794 190.86 74.1223 196.075 88.1959 193.594L145.785 183.439C159.859 180.958 171.539 171.157 176.427 157.728L196.427 102.777Z"
        fill="#E9F7FF"
        stroke="#A9CFE4"
        strokeWidth="7"
      />
    </svg>
  );
};

export default Polygon;
