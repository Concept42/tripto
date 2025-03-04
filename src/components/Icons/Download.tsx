import React from "react";

type Props = React.SVGProps<SVGSVGElement>;

const Download = ({ ...props }: Props) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M21 21H3M18 11L12 17M12 17L6 11M12 17V3"
        stroke="#0092B3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Download;
